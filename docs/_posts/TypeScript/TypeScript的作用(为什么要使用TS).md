---
title: TypeScript的作用(为什么要使用TS)
date: 2022-6-30
author: reonce
tags: TypeScript
location: 成都  
---
# 基础知识

## TS的作用(为什么要使用TypeScript）

### 静态类型检查

*静态类型系统*描述了当我们运行程序时我们的值的形状和行为。像 TypeScript 这样的类型检查器使用这些信息并告诉我们什么时候事情可能会出轨。

```jsx
const message = "hello!";
 
message();
This expression is not callable.
  Type 'String' has no call signatures.
```

### **非异常故障**

访问对象上不存在的属性也会引发错误

静态类型系统必须调用应该在其系统中将哪些代码标记为错误，即使它是不会立即抛出错误的“有效”JavaScript。在 TypeScript 中，以下代码会产生关于`location`未定义的错误：

```
const user = {
  name: "Daniel",
  age: 26,
};

user.location;
Property 'location' does not exist on type '{ name: string; age: number; }'.Property 'location' does not exist on type '{ name: string; age: number; }'.尝试

```

虽然有时这意味着在您可以表达的内容上进行权衡，但其目的是捕捉我们程序中的合法错误。TypeScript 捕获*了很多*合法的错误。

例如：错别字，

```
const announcement = "Hello World!";

// How quickly can you spot the typos?
announcement.toLocaleLowercase();
announcement.toLocalLowerCase();

// We probably meant to write this...
announcement.toLocaleLowerCase();
```

未调用的函数，

```
function flipCoin() {
  // Meant to be Math.random()
  return Math.random < 0.5;
Operator '<' cannot be applied to types '() => number' and 'number'.Operator '<' cannot be applied to types '() => number' and 'number'.}
尝试

```

或基本逻辑错误。

```
const value = Math.random() < 0.5 ? "a" : "b";
if (value !== "a") {
  // ...
} else if (value === "b") {
This condition will always return 'false' since the types '"a"' and '"b"' have no overlap.This condition will always return 'false' since the types '"a"' and '"b"' have no overlap.  // Oops, unreachable
}

```

### 工具类型

类型检查器具有检查诸如我们是否正在访问变量和其他属性的正确属性之类的信息。一旦有了这些信息，它还可以开始***建议*您可能想要使用哪些属性**。

## 擦除类型

```jsx
function greet(person: string, date: Date) {
  console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}
 
greet("Maddison", new Date());
```

编译函数`greet`以`tsc`输出 JavaScript 时会发生什么：

```
"use strict";
function greet(person, date) {
    console.log("Hello ".concat(person, ", today is ").concat(date.toDateString(), "!"));
}
greet("Maddison", new Date());

尝试

```

这里注意两点：

1. 我们的`persondate`
    
    和
    
    参数不再有类型注释。
    
2. 我们的“模板字符串”——使用反引号（```
    
    字符）的字符串——被转换为带有连接的纯字符串。
    

稍后会详细介绍第二点，但现在让我们关注第一点。类型注释不是 JavaScript 的一部分（或者 ECMAScript 是迂腐的），所以实际上没有任何浏览器或其他运行时可以在未经修改的情况下运行 TypeScript。这就是 TypeScript 首先需要一个编译器的原因——它需要某种方式来剥离或转换任何 TypeScript 特定的代码，以便您可以运行它。大多数特定于 TypeScript 的代码都被删除了，同样地，我们的类型注释也被完全删除了。

> 请记住：**类型注释永远不会改变程序的运行时行为。**
> 

## 降级

与上面的另一个区别是我们的模板字符串是从

```
`Hello ${person}, today is ${date.toDateString()}!`;
```

至

```
"Hello " + person + ", today is " + date.toDateString() + "!";
```

为什么会这样？

模板字符串是 ECMAScript 版本中的一项功能，称为 ECMAScript 2015（又名 ECMAScript 6、ES2015、ES6 等 -*不要问*）。TypeScript 能够将代码从较新版本的 ECMAScript 重写为较旧的版本，例如 ECMAScript 3 或 ECMAScript 5（又名 ES3 和 ES5）。从 ECMAScript 的新版本或“更高”版本向下移动到旧版本或“更低”版本的过程有时称为*downleveling*。

默认情况下，TypeScript 以 ES3 为目标，这是一个非常旧的 ECMAScript 版本。`[target](https://www.typescriptlang.org/tsconfig#target)`通过使用该选项，我们可以选择更新一点的东西。运行`--target es2015`更改 TypeScript 以针对 ECMAScript 2015，这意味着代码应该能够在任何支持 ECMAScript 2015 的地方运行。所以运行`tsc --target es2015 hello.ts`会给我们以下输出：

```
function greet(person, date) {
  console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}
greet("Maddison", new Date());

```

> 虽然默认目标是 ES3，但当前绝大多数浏览器都支持 ES2015。因此，大多数开发人员可以安全地将 ES2015 或更高版本指定为目标，除非与某些古老的浏览器的兼容性很重要。
>
