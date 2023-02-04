<template><div><h1 id="第17章-事件-17-1事件流-17-2事件处理程序" tabindex="-1"><a class="header-anchor" href="#第17章-事件-17-1事件流-17-2事件处理程序" aria-hidden="true">#</a> 第17章 事件  17.1事件流-17.2事件处理程序</h1>
<h2 id="_17-1-事件流" tabindex="-1"><a class="header-anchor" href="#_17-1-事件流" aria-hidden="true">#</a> 17.1 事件流</h2>
<p><strong>事件流</strong> 描述了页面接收事件的顺序，事件流方案分为 <strong>事件冒泡</strong> 和 <strong>事件冒泡</strong>，所有现代浏览器都支持它们。</p>
<h3 id="_17-1-1-事件冒泡" tabindex="-1"><a class="header-anchor" href="#_17-1-1-事件冒泡" aria-hidden="true">#</a> 17.1.1 事件冒泡</h3>
<p>由 IE 团队提出，事件从触发事件的具体元素节点逐级向上传播到不具体的元素(文档)</p>
<h3 id="_17-1-2-事件捕获" tabindex="-1"><a class="header-anchor" href="#_17-1-2-事件捕获" aria-hidden="true">#</a> 17.1.2 事件捕获</h3>
<p>由 NetScape 团队提出，事件从最不具体的节点（文档) 最先接收事件，之后逐级捕获到具体触发事件的元素节点</p>
<blockquote>
<p>实际上所有浏览器都是从 window 对象开始捕获事件的，而 DOM2 规定的其实是从 document 开始</p>
</blockquote>
<h3 id="_17-1-3-dom-事件流" tabindex="-1"><a class="header-anchor" href="#_17-1-3-dom-事件流" aria-hidden="true">#</a> 17.1.3 DOM 事件流</h3>
<p>DOM2 规定的事件流分为三个阶段： 事件捕获、到达目标和事件冒泡。以下面结构举例：</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
       目标节点
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行顺序是：</p>
<ol>
<li>捕获阶段  document&gt;  html &gt; body  (实际浏览器是从 window 对象开始的)</li>
<li>到达目标节点 div</li>
<li>冒泡阶段 div &gt; body &gt; html &gt; document</li>
</ol>
<p>虽然 DOM2 明确规定了捕获阶段不能命中事件目标，但是现代浏览器都会在捕获阶段的事件目标上触发事件，最终的结果就是实践目标上有两次机会处理事件。</p>
<h2 id="_17-2-事件处理程序" tabindex="-1"><a class="header-anchor" href="#_17-2-事件处理程序" aria-hidden="true">#</a> 17.2 事件处理程序</h2>
<p>响应事件而调用的函数被称为 <strong>事件处理程序</strong>（或<strong>事件监听器</strong>)</p>
<h3 id="_17-2-1-html-事件处理程序" tabindex="-1"><a class="header-anchor" href="#_17-2-1-html-事件处理程序" aria-hidden="true">#</a> 17.2.1 HTML 事件处理程序</h3>
<h4 id="绑定方法" tabindex="-1"><a class="header-anchor" href="#绑定方法" aria-hidden="true">#</a> 绑定方法</h4>
<p>在 HTML 上绑定事件处理程序通常以 <code v-pre>on</code> 开头的事件，例如：</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>你好<span class="token punctuation">'</span></span> <span class="token special-attr"><span class="token attr-name">onclick</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value javascript language-javascript">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'打印了'</span><span class="token punctuation">)</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>
  点击我打印
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="内部-this-对象" tabindex="-1"><a class="header-anchor" href="#内部-this-对象" aria-hidden="true">#</a> 内部 <strong>this</strong> 对象</h4>
<p>在执行事件内部的 <code v-pre>this</code> 可以拿到元素的所有属性，例如下面例子会打印出”你好“：</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>你好<span class="token punctuation">'</span></span> <span class="token special-attr"><span class="token attr-name">onclick</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value javascript language-javascript">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>id<span class="token punctuation">)</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>
  点击我打印
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="内部-event-对象" tabindex="-1"><a class="header-anchor" href="#内部-event-对象" aria-hidden="true">#</a> 内部 event 对象</h4>
<p>函数内部还会有一个特殊的局部变量  <code v-pre>event</code>，会在 17.3 事件对象章节具体解释</p>
<h4 id="内部作用域扩展" tabindex="-1"><a class="header-anchor" href="#内部作用域扩展" aria-hidden="true">#</a> 内部作用域扩展</h4>
<p>这种动态创建的函数内部作用域扩展了，在其中 <code v-pre>document</code> 和元素自身的属性都可以当做局部变量来访问。这是通过 <code v-pre>with</code> 实现的：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token keyword">with</span><span class="token punctuation">(</span>document<span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">with</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
     <span class="token comment">// 属性值</span>
   <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这种作用域扩展在不同浏览器可能导致不同的结果。</p>
<p>直接在 HTML 上指定事件处理程序会导致 HTML 和 JavaScript 代码产生强耦合问题，修改的时候两处都要改，因此开发者更喜欢使用 JavaScript 指定事件处理程序</p>
<h3 id="_17-2-2-dom0-事件处理程序" tabindex="-1"><a class="header-anchor" href="#_17-2-2-dom0-事件处理程序" aria-hidden="true">#</a> 17.2.2 DOM0 事件处理程序</h3>
<p>通过给元素的小写事件处理程序属性赋值，可以指定其事件处理程序，和 HTML 事件处理程序内部特性相同</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> btn <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'myBtn'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
btn<span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>id<span class="token punctuation">)</span> <span class="token comment">// 'myBtn'</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过给元素的事件设置为 null，移除元素的事件</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>btn<span class="token punctuation">.</span>onclick <span class="token operator">=</span> <span class="token keyword">null</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>17.2.2 DOM2 事件处理程序</p>
<p>DOM2 提出了两个新的方法来添加或移除 DOM 的时间处理程序，分别是 <code v-pre>addEventLister</code> 和 <code v-pre>removeEventLister</code> ，它们都接收三个参数： 事件名、事件处理函数和一个布尔值（默认是 false，表示在冒泡阶段调用；为 true 则表示在捕获阶段调用)，例如：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> btn <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'myBtn'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
btn<span class="token punctuation">.</span><span class="token function">addEventLister</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>id<span class="token punctuation">)</span> <span class="token comment">// 'myBtn'</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>相比于 DOM0 的方式，它可以为一个元素添加多个事件处理程序（按照添加顺序执行)</p>
<p>注意，通过 <code v-pre>addEventLister</code> 添加的事件处理程序<strong>只能</strong>用<code v-pre>removeEventLister</code> 方法移除，而且必须传入相同的三个参数。</p>
<p>这样也就导致了，如果 <code v-pre>addEventLister</code> 添加的事件处理程序第二个参数是个匿名函数（例如箭头函数),它将无法被移除。</p>
<p>通常这样配合使用：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">handler</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>id<span class="token punctuation">)</span> <span class="token comment">// 'myBtn'</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> btn <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'myBtn'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
btn<span class="token punctuation">.</span><span class="token function">addEventLister</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">,</span>handler<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span>
btn<span class="token punctuation">.</span><span class="token function">removeEventLister</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">,</span>handler<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_17-2-4-ie-的不用看了" tabindex="-1"><a class="header-anchor" href="#_17-2-4-ie-的不用看了" aria-hidden="true">#</a> 17.2.4 IE 的不用看了</h3>
<h3 id="_17-2-5-跨浏览器事件处理程序" tabindex="-1"><a class="header-anchor" href="#_17-2-5-跨浏览器事件处理程序" aria-hidden="true">#</a> 17.2.5 跨浏览器事件处理程序</h3>
<p>其实就是用之前监测一下支不支持 DOM2 提出的那两种方法，支持就用，不支持就试试 IE 的能不能用，还不行就用 DOM0的。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">addHandler</span><span class="token punctuation">(</span><span class="token parameter">element<span class="token punctuation">,</span> hander</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span>element<span class="token punctuation">.</span>addEventLister<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    element<span class="token punctuation">.</span><span class="token function">addEventLister</span><span class="token punctuation">(</span>element<span class="token punctuation">,</span> hander<span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>element<span class="token punctuation">.</span>attachEvent<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// IE 的，本文没写</span>
    element<span class="token punctuation">.</span><span class="token function">attachEvent</span><span class="token punctuation">(</span>element<span class="token punctuation">,</span> hander<span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    element<span class="token punctuation">[</span><span class="token string">"on"</span> <span class="token operator">+</span> type<span class="token punctuation">]</span> <span class="token operator">=</span> hander
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


