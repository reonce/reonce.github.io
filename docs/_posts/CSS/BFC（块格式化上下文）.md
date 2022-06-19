---
title: BFC（块格式化上下文）
date: 2022-6-19
author: reonce
tags: 
location: 成都  
---
# BFC-块格式上下文

## 概念

> **块格式化上下文（Block Formatting Context，BFC）**
 是 Web 页面的可视 CSS 渲染的一部分，是块级盒子的布局过程发生的区域，也是浮动元素与其他元素交互的区域。
> 

列举几个触发`BFC`使用的`CSS`属性

- **`overflow: auto`**
- **`display: flow-root`**
- overflow: hidden
- display: inline-block
- position: absolute
- position: fixed
- display: table-cell
- display: flex

使用它们中的一种时，元素就会被设置为BFC。

**使用 `overflow: auto`**

在创建包含浮动元素的 BFC 时，通常的做法是设置父元素 `overflow: auto` 或者其它除默认的 `overflow: visible` 以外的值。`<div>` 元素变成布局中的迷你布局，任何子元素都会被包含进去。使用 `overflow` 创建新的 BFC，是因为 `overflow` 属性会告诉浏览器应该怎样处理溢出的内容。如果使用它仅仅为了创建 BFC，你可能会遇到不希望出现的滚动条或阴影，需要注意。

**使用 `display: flow-root`**

一个新的 `display` 属性的值，它可以创建无副作用的 BFC。在父级块中使用 `display: flow-root` 可以创建新的 BFC。

给 `<div>` 元素设置 `display: flow-root` 属性后，`<div>` 中的所有内容都会参与 BFC，浮动的内容不会从底部溢出。

你可以从 `flow-root` 这个值的名字上看出来，它创建一个新的用于流式布局的上下文，类似于浏览器的根（`html`）元素。

## 为了解决什么

- **高度塌陷**
- **外边距重叠 [[MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing)]**
    
    块的[上外边距 (margin-top)](https://developer.mozilla.org/zh-CN/docs/Web/CSS/margin-top)和[下外边距 (margin-bottom)](https://developer.mozilla.org/zh-CN/docs/Web/CSS/margin-bottom).
    有时合并 (折叠) 为单个边距，其大小为单个边距的最大值 (或如果它们相等，则仅为其中一个)，这种行为称为**边距折叠**
    。
    

看一个塌陷的例子：

```tsx
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>高度塌陷</title>
    <style>
        .box {
            margin: 100px;
            width: 100px;
            height: 100px;
            background: red;
            float: left;
        }
        .container {
            background: #000;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="box"></div>
        <div class="box"></div>
    </div>
</body>
</html>
```

这时候，页面并没有呈现出黑色，因为子元素使用了float，脱离了正常的文档流，导致实际上

`container` 并没有**高度** 

这时候，使用以上的方法给`container` 设置，它就会生成独立的**块格式化上下文,**

解决以上的问题
