---
title: JSON
date: 2022-4-21
author: reonce
tags: 红宝书
location: 成都  
---
# JSON



`JSON.stringify(obj, []/fun, number/string)`接收三个参数，第一个是要序列化的对象。第二个参数可以是一个包含要序列化对象的键的数组，或者是一个函数，这个函数接收`(key, value)`两个参数。第三个参数表示缩进。

对象中可以定义`toJSON()`方法，序列化json时，将返回对象定义的`toJSON()`方法的返回值。



`JSON.parse()`方法也可以接受一个函数作为第二个参数，这个参数被称为**复活函数**。复活函数接受两个参数（key, value），也需要返回值，如果返回undefined，则结果中会删除相应的键。如果返回了其他值，则该值会成为响应键的值从插入到结果中。

