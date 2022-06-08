---
title: JS函数柯里化
date: 2022-3-6
author: reonce
tags: 
location: 成都  
---
JS函数的柯里化：通过函数调用继续返回函数的形式，实现多次接受参数统一处理的函数编码形式。示例如下：

~~~js
function sum(a){ 
  return (b)=>{ 
    return (c)=>{ 
      return a+b+c
       } 
    } 
    } 
  sum(1)(2)(3) //6
~~~
