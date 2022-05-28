---
title: JavaScript的继承（__proto__, prototype, constructor）
date: 2022-5-28
author: reonce
tags: JavaScript,Object
location: 成都  
---

> 最近读《JS语言精粹》，对于原型链有了新的理解，记录以便复习


JS的属性有很多时候是通过**继承**而来的，当它自身不存在某个属性时，它会逐级查找它的“父对象”（原型对象）的属性，找到便使用。但是由于构造函数的设计，这个继承关系并不是简单的一对一，而是呈一个“三角关系”。举个例子：

```jsx
// 定义一个构造函数，并扩充它的原型
function Mammal(name) {
	this.name = name;
}

Mammal.prototype.say = function () {
	return `my name is ${this.name}`;
}

const people = new Mammal('reonce');
// 继承自Mammal的属性, 可以打印 people.__proto__ 查看构造函数的原型对象（prototype）
people.name // reonce;  
people.say() // my name is reonce

// 这里也可以给 people.__proto__ 赋值一个函数，同样的，它会对构造函数Mammal的原型进行扩充
// 这是因为people.__proto__和Mammal.prototype是全等的
// 个人不推荐这种做法，不易维护
```

以上代码我们简单对 `__proto__、prototype` 有了一点了解, `__proto__` 是自下而上的，由子对象去查询父对象的属性，它全等于对应构造函数的 `prototype` ；也就是说 `prototype` 是自上而下的，它是一个函数的**原型对象**，它只存在于函数中，因为只有函数才能作为**构造函数**  。

接着我们对例子中的关系做一个拆分：

- people.__prototype === Mammal.prototype

悟了，那么为什么没有一个直接指向Mammal的属性呢

有的，这个属性叫做 `constructor`  它由一个对象直接指向生成它的**构造函数**

- people.constructor === Mammal

但是这里要注意，实际上people上是不存在这个指向关系的。之所以它可以指向，是因为它继承了Mammal的原型对象，实际上使用的是**父对象**的属性，就像使用父对象的其他属性（例如name）一样，只不过这里换成了constructor而已

实际存在的指向关系是：

- Mammal.prototype.constructor === Mammal

这里你的理解要做一个拆分，把Mammal.prototype当作一个变量去看，这个变量的constructor指向Mammal。

OK，看到这里应该对三者的关系复习的差不多了。

Mammal的constructor指向 Function， 之后在指向对象，最后指向null。

子对象不断查找父对象属性，找到便使用的关系叫做原型链，null即原型链的终点。

也就是**对象的继承。**
