---
title: Object解读
date: 2021-6-10
author: reonce
tags: JavaScript,Object
location: 成都  
---
今天复习了一下assign方法的用法，学习到了一些之前不知道的知识点。 Object.assign（） 转换时，会将不是对象类型的数据先转换成对象，在进行赋值操作， 如果首位参数为null或者undefiend 则会报错。如果非对象参数出现在源对象的位置（即非首参数），这些参数都会转成对象，如果无法转成对象，就会跳过。这意味着， 如果undefined和null不在首参数，就不会报错。其他类型的值（即数值、字符串和布尔值）不在首参数，也不会报错。但是，除了字符串会以数组形式，拷贝入目标对象，其他值都不会产生效果（这里，个人不太懂不报错的意义是什么）。 Object.assign只拷贝自身属性，不可枚举的属性（enumerable为false）和继承的属性不会被拷贝。 对于嵌套的对象，assign执行的是替换而不是添加 可以用于数组，但是会将数组转换成对象

console.log(Object.assign([1, 2, 3], [4, 5])); //[4,5,3] /只会将对应位置的替换*/

注意，Object.assign()是浅拷贝方法
