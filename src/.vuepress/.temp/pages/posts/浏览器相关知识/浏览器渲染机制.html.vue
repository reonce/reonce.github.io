<template><div><h1 id="浏览器渲染机制" tabindex="-1"><a class="header-anchor" href="#浏览器渲染机制" aria-hidden="true">#</a> 浏览器渲染机制</h1>
<p>本文讲解释Html、css和js代码是如何变成页面的</p>
<h2 id="渲染流水线" tabindex="-1"><a class="header-anchor" href="#渲染流水线" aria-hidden="true">#</a> 渲染流水线</h2>
<p>浏览器的渲染机制很复杂，在渲染模块中通常会被划分为很多子阶段，Html经过这些子阶段，最后输入像素。 这个渲染的处理过程被称为<strong>渲染流水线。</strong></p>
<p>按照渲染时间顺序来划分，子阶段可大致分为一下几个：</p>
<ul>
<li>构建DOM树</li>
<li>样式计算</li>
<li>布局阶段</li>
<li>分层</li>
<li>绘制</li>
<li>分块</li>
<li>光栅化和合成</li>
</ul>
<p>下面我们从每个子阶段的<strong>输入、处理过程、输出</strong>来解释每个阶段做的事情。</p>
<h3 id="构建dom树" tabindex="-1"><a class="header-anchor" href="#构建dom树" aria-hidden="true">#</a> 构建DOM树</h3>
<p>浏览器是不能直接理解和试用HTML的，需要讲HTML代码转化成浏览器能理解的“语言”，而浏览器能理解的语言是一种树结构，被称作 <strong>DOM树</strong></p>
<p>构建DOM树的输入内容就是HTML文件，经过HTML解析器的解析，最后输出树状结构的DOM元素。</p>
<p>我们平时控制台查看样式选中某个节点的时候，所查看的就是DOM树中的一个节点。</p>
<ul>
<li>可以通过js修改DOM的属性，它直接或间接（某些框架）修改DOM树。</li>
</ul>
<h3 id="样式计算" tabindex="-1"><a class="header-anchor" href="#样式计算" aria-hidden="true">#</a> 样式计算</h3>
<p>样式计算是为了处理DOM节点中每个元素的具体样式</p>
<ol>
<li>
<p><strong>把CSS转换为浏览器能理解的结构</strong></p>
<p>css样式来源主要来自一下三种：</p>
<ul>
<li>
<style>标记内的css
</li>
<li>元素的style属性内嵌的css</li>
<li>通过link引用的外部css文件</li>
</ul>
<p>浏览器得到这些css代码后，会执行一个转换操作，把css代码转换为styleSheets。可以在控制台打印 <code v-pre>document.styleSheets</code> ,然后可以看到一个数组对象的结构，这个结构同时具备查询和修改功能，为后面的样式操作提供基础</p>
</li>
<li>
<p><strong>转换样式表中的属性值，使其标准化</strong></p>
<p>实际上，css代码中的很多属性值，比如：em、blue、bold，渲染引擎是不易理解的，需要把一些不容易理解的值，转换为标准值。有点像babel把ES6的代码转换成ES5的，让执行器理解“新代码”；</p>
<p>通常标准是把一些属性转换成一个“<strong>具体的值</strong>”；</p>
<p>例如： 2em—&gt;32px; blue —&gt;rgb(0, 0, 255); bold —&gt;700;</p>
</li>
<li>
<p><strong>计算DOM树中每个节点的具体样式</strong></p>
<p>这里涉及到css的<strong>继承规则</strong>和<strong>层叠规则。</strong></p>
<ul>
<li>继承规则，大致是子元素可以继承来自父元素的 <code v-pre>font-size</code> <code v-pre>color</code> <code v-pre>font-wehght</code> 等。这里不过多探讨。</li>
<li>层叠规则，是指定义了如何合并多个源的属性值算法，也就是css展示的优先级。</li>
</ul>
<p>遵循这两种规则，最终计算出DOM节点每个元素的样式，保存在<strong>ComputedStyle</strong> 的结构里。</p>
<p>这个结构可以通过控制台查看，选中某个节点—&gt;点击右侧的Computed。</p>
</li>
</ol>
<h3 id="分层" tabindex="-1"><a class="header-anchor" href="#分层" aria-hidden="true">#</a> 分层</h3>
<p>有了DOM树，有了各个节点的样式，我们还不能直接去绘制页面。因为浏览器页面存在着<strong>分层</strong>的概念。</p>
<p>浏览器页面中存在着复杂的3D变化、页面滚动、浮动、绝对定位、z-indexing做z轴排序等。这些都需要为特定的节点生成专用的图层，最终生成一颗<strong>图层树（LayerTree）</strong>。</p>
<ul>
<li>
<p><strong>拥有层叠上下文属性的元素会被提升为单独的一层。</strong></p>
<p>例如： position:fixed、z-index:2、fliter:blue(5px)、opacitty:0.5等，这些属性被称为层叠上下文属性。会按照自身优先级垂直分布在一个二维平面的Z轴上</p>
</li>
<li>
<p><strong>需要裁剪(clip)的地方也会创建图层</strong></p>
<p>例如设置一个高度为200px的div，里面的文字很多，于是文字会溢出。</p>
<p>在默认属性中，多出的文字会悬浮在div的下方排列，呈现在单独的图层。</p>
<p>如果出现了滚动条，滚动条也会被提升到单独的图层。</p>
</li>
</ul>
<h3 id="图层绘制" tabindex="-1"><a class="header-anchor" href="#图层绘制" aria-hidden="true">#</a> 图层绘制</h3>
<p>完成图层的创建之后，渲染引擎会对图层中的每个图层进行绘制。</p>
<p><strong>绘制列表</strong>是用来记录绘制顺序和绘制指令的列表，而实际的绘制操作是由渲染引擎的<strong>合成线程</strong>来完成的。</p>
<p>当图层的绘制列表准备好之后，主线程会把绘制列表提交给<strong>合成线程</strong>。</p>
<h3 id="栅格化-raster-操作" tabindex="-1"><a class="header-anchor" href="#栅格化-raster-操作" aria-hidden="true">#</a> 栅格化（raster)操作</h3>
<p>通常的页面可能很大，用户使用只能看到其中的一部分，用户能看到的这部分叫做<strong>视口。</strong></p>
<p>有些像懒加载机制，当用户没有看到视口下方的内容时，去绘制显然是增加了开销的。这个点的优化本质就是始终绘制视口位置所呈现的“页面”。</p>
<p>合成线程会按照视口附近的<strong>图块</strong>优先生成<strong>位图，<strong>生成位图的操作是由</strong>栅格化</strong>来执行的。</p>
<p>栅格化的本质就是<strong>图块</strong>转化成<strong>位图</strong>，图块是栅格化的最小执行单位。</p>
<p>通常栅格化过程会使用GPU来加速生成，这种方式叫做<strong>快速栅格化（GPU栅格化）</strong> 生成的位图会保存在GPU的内存中。</p>
<h3 id="合成和显示" tabindex="-1"><a class="header-anchor" href="#合成和显示" aria-hidden="true">#</a> 合成和显示</h3>
<p>一旦所有图块都被光栅化，合成线程就会生成一个绘制图块的命令——“DrawQuad”，然后将该命令提交给浏览器进程。</p>
<p>浏览器进程里面有一个叫viz的组件，用来接收合成线程发过来的DrawQuad命令，然后根据DrawQuad命令，将其页面内容绘制到内存中，最后再将内存显示在屏幕上。</p>
<p>到这里，经过这一系列的阶段，编写好的HTML、CSS、JavaScript等文件，经过浏览器就会显示出漂亮的页面了</p>
<h3 id="渲染流水线总结" tabindex="-1"><a class="header-anchor" href="#渲染流水线总结" aria-hidden="true">#</a> <strong><strong>渲染流水线总结</strong></strong></h3>
<p>HTML到DOM、样式计算、布局、图层、绘制、光栅化、合成和显示</p>
<ul>
<li>渲染进程将HTML内容转换为能够读懂的DOM树结构。</li>
<li>渲染引擎将CSS样式表转化为浏览器可以理解的styleSheets，计算出DOM节点的样式。</li>
<li>创建布局树，并计算元素的布局信息。</li>
<li>对布局树进行分层，并生成分层树。</li>
<li>为每个图层生成绘制列表，并将其提交到合成线程。</li>
<li>合成线程将图层分成图块，并在光栅化线程池中将图块转换成位图。</li>
<li>合成线程发送绘制图块命令DrawQuad给浏览器进程。</li>
<li>浏览器进程根据DrawQuad消息生成页面，并显示到显示器上</li>
</ul>
</div></template>


