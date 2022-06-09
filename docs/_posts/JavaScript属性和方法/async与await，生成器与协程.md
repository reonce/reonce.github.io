---
title: async与await，生成器与协程
date: 2022-6-9
author: reonce
tags: JavaScript
location: 成都  

---
# ****async await使用同步方式写异步代码****

## async函数

ES2017 标准引入了 async 函数，使得异步操作变得更加方便。

**async 函数是生成器的语法糖，目的是实现以同步的方式写异步代码，相较于promise的链式调用，它更符合人们的线性思维。**

通常通过try catch捕获异常，完全是在写同步代码一样。它的底层是基于promise和Generator 实现的，下面直接介绍Generator。

## 生成器与协程

```jsx
function* genDemo() {
    console.log(" 开始执行第一段 ")
    yield 'generator 2'
 
    console.log(" 开始执行第二段 ")
    yield 'generator 2'
 
    console.log(" 开始执行第三段 ")
    yield 'generator 2'
 
    console.log(" 执行结束 ")
    return 'generator 2'
}
 
console.log('main 0')
let gen = genDemo()
console.log(gen.next().value)
console.log('main 1')
console.log(gen.next().value)
console.log('main 2')
console.log(gen.next().value)
console.log('main 3')
console.log(gen.next().value)
console.log('main 4')
```

根据这段代码，可以看出它与普通函数的区别。它并不是一次性执行完的，而是通过“多段返回”的形式，yield可以理解为”一次返回“，不像普通函数，返回后函数只是暂停，等待外部触发next()后再返回下一个内容。

- 内部：每遇到yield关键字，js就会将它之后的内容给外部，并暂停执行。
- 外部：通过next()方法回复函数的执行

**那么，生成器函数是怎么让函数暂停的呢？**

这里是利用了**协程**的原理。协程是比线程更小的一个单位，可以粗浅的理解为它是线程上的一个任务，一个线程中可以存在多个协程，但是线程上同时只能执行一个协程。如果正在执行协程A，这时候要启动协程B，就只有先暂停执行协程A，把主线程控制权交给协程B。如果从协程A启动协程B，我们把协程A成为协程B的**父协程。**

协程的一大特点是它是完全由程序所控制，这样在切换它时，资源消耗和性能都会更加好。

执行生成器函数时，协程和父协程是在主线程上**交互执行**的，而不是并发执行。他们之前的切换是通过yield和next函数配合完成。

当执行next函数时，JS引擎会保存下一个协程的调用栈信息，并返回父协程的调用栈信息。yield便是暂停父协程执行的关键字。两者交互，配合实现了“暂停”。

## 使用生成器函数模拟async

下方是一个依次读取两个文件的代码：

```
const fs = require("fs");
const readFile = function (fileName) {
  return new Promise(function (resolve, reject) {
    fs.readFile(fileName, function (error, data) {
      if (error) return reject(error);
      resolve(data);
    });
  });
};
const gen = function* () {
  const f1 = yield readFile("/etc/fstab");
  const f2 = yield readFile("/etc/shells");
  console.log(f1.toString());
  console.log(f2.toString());
};
```

上面代码的函数`gen`可以写成`async`函数，就是下面这样。

```
const asyncReadFile = async function () {
  const f1 = await readFile("/etc/fstab");
  const f2 = await readFile("/etc/shells");
  console.log(f1.toString());
  console.log(f2.toString());
};
```

一比较就会发现，`async`函数就是将 Generator 函数的星号（`*`）替换成`async`，将`yield`替换成`await`，仅此而已。

`async`函数对 Generator 函数的改进，体现在以下四点。

（1）内置执行器。

Generator 函数的执行必须靠执行器，所以才有了`co`模块，而`async`函数自带执行器。也就是说，`async`函数的执行，与普通函数一模一样，只要一行。

```
asyncReadFile();
```

上面的代码调用了`asyncReadFile`函数，然后它就会自动执行，输出最后结果。这完全不像 Generator 函数，需要调用`next`方法，或者用`co`模块，才能真正执行，得到最后结果。

（2）更好的语义。

`async`和`await`，比起星号和`yield`，语义更清楚了。`async`表示函数里有异步操作，`await`表示紧跟在后面的表达式需要等待结果。

（3）更广的适用性。

`co`模块约定，`yield`命令后面只能是 Thunk 函数或 Promise 对象，而`async`函数的`await`命令后面，可以是 Promise 对象和原始类型的值（数值、字符串和布尔值，但这时会自动转成立即 resolved 的 Promise 对象）。

（4）返回值是 Promise。

`async`函数的返回值是 Promise 对象，这比 Generator 函数的返回值是 Iterator 对象方便多了。你可以用`then`方法指定下一步的操作。

进一步说，`async`函数完全可以看作多个异步操作，包装成的一个 Promise 对象，而`await`命令就是内部`then`命令的语法糖。
