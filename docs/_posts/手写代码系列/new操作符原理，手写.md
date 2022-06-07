---
title: new操作符原理，手写
date: 2022-6-7
author: reonce
tags: 手写代码系列
location: 成都  
---
new 的过程和普通的函数返回不同，new 其实是一种继承的方式， 通过new，实例与构造函数通过原型链连接了起来出来，所以实例能访问到构造函数的属性，具体过程如下

* 开辟一个块内存，创建一个空对象
* 链接该对象（设置该对象的constructor）到另一个对象上
* 将步骤1创建的新对象作为this的上下文
* 返回新创建的对象，如果该函数返回的不是一个对象，则返回它的this
~~~js
function _new(Fn, ...args) {
  const obj = {};
  obj.__proto__ = Fn.prototype;
  let res = Fn.call(obj, ...args);
  if(res !== null && (typeof res === 'object' || typeof res === 'function')) {
    return res
  }
  return obj;
}

// 测试一下
function Dog(name, age) {
        this.name = name;
        this.age = age;
    }
    Dog.prototype.sayInfo = function() {
        console.log(`Name = ${this.name}, Age = ${this.age}`);
    }
    let dog = _new(Dog, 'Hello', 12);
    dog.sayInfo();  
~~~
