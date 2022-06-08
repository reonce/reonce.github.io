---
title: 手写instanceOf
date: 2022-6-8
author: reonce
tags: 手写代码系列
location: 成都  
---
instanceof 运算符用来检测 constructor.prototype 是否存在于参数 object 的原型链上。
原理和我想的差不多，递归比较左侧的构造函数的__proto__与右侧类型的prototype是否相等，直至到达原型链顶端null。

~~~js
function myInstance(left, right) {
    var proto = left.__proto__;
    var prototype = right.prototype;

    if (proto === null) {
        return false;
    } else if (proto === prototype) {
        return true;
    } else {
        return myInstance(proto, right);
    }
}
var a = {};
console.log(myInstance(a,Array)); //false
console.log(myInstance({}, Object)) //true
~~~

一种更好的写法，避免递归函数带来的“栈”问题。（2022.6.8更新）
~~~js
function newInstance(left, right) {
    let flag = left;
    while(flag) {
      const proto = flag.__proto__ ;
      if(proto === right.prototype) {
        return true;
      }
      flag = proto;
    }
    return false
}
var a = {};
console.log(newInstance(a,Array)); //false
console.log(newInstance({}, Object)) //true
~~~

instanceof存在一点局限性，也就是在instanceof 和多全局对象(例如：多个 frame 或多个 window 之间的交互)时。
在浏览器中，我们的脚本可能需要在多个窗口之间进行交互。多个窗口意味着多个全局环境，不同的全局环境拥有不同的全局对象，从而拥有不同的内置类型构造函数。这可能会引发一些问题。比如，表达式 [] instanceof window.frames[0].Array 会返回 false，因为 Array.prototype !== window.frames[0].Array.prototype，并且数组从前者继承。

当你在你的脚本中开始处理多个 frame 或多个 window 以及通过函数将对象从一个窗口传到另一个窗口时，这就是一个有效而强大的话题。比如，实际上你可以通过使用Array.isArray(myObj) 或者Object.prototype.toString.call(myObj) === "[object Array]" 来安全的检测传过来的对象是否是一个数组。
