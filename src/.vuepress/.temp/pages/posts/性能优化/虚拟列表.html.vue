<template><div><h1 id="虚拟列表原理解析" tabindex="-1"><a class="header-anchor" href="#虚拟列表原理解析" aria-hidden="true">#</a> 虚拟列表原理解析</h1>
<h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2>
<h3 id="虚拟列表介绍" tabindex="-1"><a class="header-anchor" href="#虚拟列表介绍" aria-hidden="true">#</a> 虚拟列表介绍</h3>
<p>​	<strong>虚拟列表</strong>是解决<strong>大数据量渲染</strong>列表的一种方案。原理简述就是只渲染当前视口内的列表项。初次接触容易联想到浏览器的栅格化（raster），但是实现原理和类似于懒加载的栅格化不同，它始终只渲染当前视口的内容，而不是即将看到哪，就增加那块部分的渲染。</p>
<p>通常，解决<strong>大数据量渲染</strong>问题有两种方案，一种是采用时间分片，另一种就是本文要谈的虚拟列表。在正文开始前，不妨简单了解一下第一种方案，<strong>时间分片</strong>。</p>
<p>在什么优化方案都不用的单次渲染中，随着数据量的增多，页面会越来越卡顿。一次性把全部的数据都渲染了，导致了性能问题。思索一下，其实不需要把所有的数据都在第一时间渲染出来，只需要保障首屏的数据一次呈现，后面的逐渐渲染，不就看不出来卡顿了吗。这个渐渐渲染的方案就叫做<strong>时间分片</strong></p>
<h4 id="时间分片实现方案简述" tabindex="-1"><a class="header-anchor" href="#时间分片实现方案简述" aria-hidden="true">#</a> 时间分片实现方案简述</h4>
<p>直接说目前的最优方案，用<code v-pre>requestAnimationFrame</code> api，在浏览器空闲帧的间隙去渲染。 贴一段代码理解一下：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">//需要插入的容器</span>
<span class="token keyword">let</span> ul <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'container'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 插入十万条数据</span>
<span class="token keyword">let</span> total <span class="token operator">=</span> <span class="token number">100000</span><span class="token punctuation">;</span>
<span class="token comment">// 一次插入 20 条</span>
<span class="token keyword">let</span> once <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>
<span class="token comment">//总页数</span>
<span class="token keyword">let</span> page <span class="token operator">=</span> total<span class="token operator">/</span>once
<span class="token comment">//每条记录的索引</span>
<span class="token keyword">let</span> index <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token comment">//循环加载数据</span>
<span class="token keyword">function</span> <span class="token function">loop</span><span class="token punctuation">(</span><span class="token parameter">curTotal<span class="token punctuation">,</span>curIndex</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>curTotal <span class="token operator">&lt;=</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//每页多少条</span>
    <span class="token keyword">let</span> pageCount <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>curTotal <span class="token punctuation">,</span> once<span class="token punctuation">)</span><span class="token punctuation">;</span>
    window<span class="token punctuation">.</span><span class="token function">requestAnimationFrame</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> pageCount<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">let</span> li <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'li'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            li<span class="token punctuation">.</span>innerText <span class="token operator">=</span> curIndex <span class="token operator">+</span> i <span class="token operator">+</span> <span class="token string">' : '</span> <span class="token operator">+</span> <span class="token operator">~</span><span class="token operator">~</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> total<span class="token punctuation">)</span>
            ul<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>li<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        <span class="token function">loop</span><span class="token punctuation">(</span>curTotal <span class="token operator">-</span> pageCount<span class="token punctuation">,</span>curIndex <span class="token operator">+</span> pageCount<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token function">loop</span><span class="token punctuation">(</span>total<span class="token punctuation">,</span>index<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>todo： 使用setTimeout会导致闪屏，原因是时间循环机制导致的执行时间不确定，以及屏幕刷新率的影响</p>
<p>未来的优化更新： <code v-pre>DocumentFragment</code> 可以用append方法加入元素样式表的计算，性能更好</p>
<h2 id="虚拟列表与时间分片的对比" tabindex="-1"><a class="header-anchor" href="#虚拟列表与时间分片的对比" aria-hidden="true">#</a> 虚拟列表与时间分片的对比</h2>
<p>听上去按照时间逐渐分片渲染已经是很不错的方案了，但是数据量如果更大更多，用户大概率看不到下面的数据。这时候渲染的性能就浪费了，有些不划算。 因此，更优秀的虚拟列表方案来了，看到哪，渲染到哪，无敌~。但是虚拟列表进行渲染的时候也有一定的前置条件，不然也就没有时间分片渲染什么事了。</p>
<h2 id="原理" tabindex="-1"><a class="header-anchor" href="#原理" aria-hidden="true">#</a> 原理</h2>
<p>虚拟列表初次渲染时，只渲染当前可视区域的列表项。当发生滚动时，通过<strong>计算</strong>不断的更新列表项的Dom，展示滚动后的Dom，整体随着滚动条的滚出呈现高速更新的状态。</p>
<p>核心的原理就是如何根据滚动条计算，得到应该渲染哪些列表项。实现计算的前提有以下几点：</p>
<ol>
<li>固定的可视内容区域（高度固定） 后文简称 <code v-pre>curHeight</code></li>
<li>列表每一项的高度已知(本文中他们是相同的）。后文简称 <code v-pre>itemHeight</code></li>
<li>一个额外的用来滚动的元素。它的高度是所有列表项<strong>高度</strong> * 列表项的<strong>数量</strong> 后文简称 <code v-pre>allHeight</code></li>
</ol>
<p>大致的html结构如下：</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>list<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>list-scroll-placeholder<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>list-content<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token comment">&lt;!-- item-1 --></span>
      <span class="token comment">&lt;!-- item-2 --></span>
      <span class="token comment">&lt;!-- ...... --></span>
      <span class="token comment">&lt;!-- item-n --></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><code v-pre>list-scroll-placeholder</code>表示需要滚动的占位元素，高度是<code v-pre>allHeight</code></li>
<li><code v-pre>list-content</code> 表示列表渲染的主体，也就是可视内容区域，高度是<code v-pre>curHeight</code>。其中的每一项高度是<code v-pre>itemHeight</code></li>
<li>用<code v-pre>scrollTop</code> 表示当前滚动距离顶部的高度</li>
<li>用<code v-pre>startIndex</code>和<code v-pre> endIndex</code> 分别表示渲染列表项的开头索引和结束索引</li>
</ul>
<p>有了这些信息，我们尝试着进行一下滚动的计算。</p>
<h4 id="开始索引和结束索引的计算" tabindex="-1"><a class="header-anchor" href="#开始索引和结束索引的计算" aria-hidden="true">#</a> 开始索引和结束索引的计算</h4>
<p>首先初始的scrollTop为0，随着滚动条的滚动，渲染列表的<strong>开始索引</strong>和<strong>结束索引</strong>也跟着一起变化。</p>
<p>脑补一下可以想到  startIndex 始终等于 scrollTop 除以 itemHeight</p>
<p>我们向下取整得到<strong>开始索引</strong>： <code v-pre>startIndex</code> === Math.floor(scrollTop / itemHeight)</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/** 滚动距离顶部的距离 */</span>
<span class="token keyword">const</span> scrollTop <span class="token operator">=</span> e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>scrollTop<span class="token punctuation">;</span>
startIndex <span class="token operator">===</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>scrollTop <span class="token operator">/</span> <span class="token constant">ITEM_HEIGHT</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>由于endIndex等于startIndex加上中间渲染的列表项数。</p>
<p>因此向上取整得到<strong>结束索引</strong>： <code v-pre>endIndex</code> === startIndex + Math.ceil(curHeight / itemHeight)</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/** 每一项的高度 */</span>
<span class="token keyword">const</span> <span class="token constant">ITEM_HEIGHT</span> <span class="token operator">=</span> <span class="token number">40</span><span class="token punctuation">;</span>
<span class="token doc-comment comment">/** 可是区域的高度 */</span>
<span class="token keyword">const</span> <span class="token constant">CUR_HEIGHT</span> <span class="token operator">=</span> <span class="token number">650</span><span class="token punctuation">;</span>
<span class="token doc-comment comment">/** 列表项的数量 */</span>
<span class="token keyword">const</span> <span class="token constant">ITEM_NUM</span> <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token constant">CUR_HEIGHT</span> <span class="token operator">/</span> <span class="token constant">ITEM_HEIGHT</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
endIndex <span class="token operator">===</span> startIndex <span class="token operator">+</span> <span class="token constant">ITEM_NUM</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>有了这些计算逻辑，就已经可以实现一个简易的虚拟列表了！</p>
<h2 id="实现" tabindex="-1"><a class="header-anchor" href="#实现" aria-hidden="true">#</a> 实现</h2>
<p>编写一个测试列表</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/** 模拟列表数据 */</span>
<span class="token keyword">const</span> <span class="token constant">BASE_ARR</span> <span class="token operator">=</span> Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">length</span><span class="token operator">:</span> <span class="token number">500</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">(</span><span class="token parameter">_<span class="token punctuation">,</span> k</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token constant">BASE_ITEM</span><span class="token punctuation">.</span>content<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">---第</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>k<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">次</span><span class="token template-punctuation string">`</span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以react为例，根据起始索引和结束索引，可以维护出一个实际渲染的数组</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>  <span class="token doc-comment comment">/** 实际渲染的数组 */</span>
  <span class="token keyword">const</span> realList <span class="token operator">=</span> <span class="token function">useMemo</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token constant">BASE_ARR</span><span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>startIndex<span class="token punctuation">,</span> startIndex <span class="token operator">+</span> <span class="token constant">ITEM_NUM</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>startIndex<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>增加监听滚动条的逻辑</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">".list"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">"scroll"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> scrollTop <span class="token operator">=</span> e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>scrollTop<span class="token punctuation">;</span>
    <span class="token keyword">const</span> newIndex <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>scrollTop <span class="token operator">/</span> <span class="token constant">ITEM_HEIGHT</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">setStartIndex</span><span class="token punctuation">(</span>newIndex<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将这个数组和占位滚动条渲染到页面上，虚拟列表的简易版就出现了</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>wrap<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>
      <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>list<span class="token punctuation">"</span></span>
      <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token value css language-css"><span class="token punctuation">{</span><span class="token punctuation">{</span></span></span></span>
        <span class="token attr-name"><span class="token namespace">height:</span></span> <span class="token attr-name">`${CUR_HEIGHT}px`,</span>
      <span class="token attr-name">}}</span>
    <span class="token punctuation">></span></span>
      {/* 占位滚动区域，高度为allHeight */}
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>
        <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>list-scroll-placeholder<span class="token punctuation">"</span></span>
        <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token value css language-css"><span class="token punctuation">{</span><span class="token punctuation">{</span></span></span></span> <span class="token attr-name"><span class="token namespace">height:</span></span> <span class="token attr-name">`${BASE_ARR?.length</span> <span class="token attr-name">*</span> <span class="token attr-name">40}px`</span> <span class="token attr-name">}}</span>
      <span class="token punctuation">/></span></span>
      {/* 可视区域，高度固定为curHeight */}
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>list-content<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        {/* 每一项的高度，高度为itemHeight */}
        {realList.map((item, index) => (
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>list-item<span class="token punctuation">"</span></span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>{index}</span><span class="token punctuation">></span></span>
            {item.content}-第{index + startIndex}次
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
        ))}
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="优化" tabindex="-1"><a class="header-anchor" href="#优化" aria-hidden="true">#</a> 优化</h2>
<p>虽然简易版的列表已经”虚拟“起来了，但是很明显，它的更新频率非常高，性能不客观。于是开始学习网上大神们的优化方案</p>
<h3 id="更通用的更新、更好的阅读性" tabindex="-1"><a class="header-anchor" href="#更通用的更新、更好的阅读性" aria-hidden="true">#</a> 更通用的更新、更好的阅读性</h3>
<p>在以上实现的demo中，我们是预设了一些固定的值去计算使用。</p>
<p>但是在增加了后续一些优化后，我们会发现需要控制的值变多了。(放在这里是因为声明了变量，照顾后续的阅读体验)</p>
<blockquote>
<p>这时候个人想法将是一些值改为props传参，毕竟大部分都是可配置的。</p>
<p>网上给出了我不曾设想的方案，原来useState也可以变成响应式的...</p>
</blockquote>
<p>在demo2中，增加了响应式的状态管理 <code v-pre>useReactive</code></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>  <span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token function">useReactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">//渲染的数据</span>
    <span class="token literal-property property">scrollAllHeight</span><span class="token operator">:</span> <span class="token string">"650px"</span><span class="token punctuation">,</span> <span class="token comment">// 容器的初始高度</span>
    <span class="token literal-property property">listHeight</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">//列表高度</span>
    <span class="token literal-property property">itemHeight</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">// 子组件的高度</span>
    <span class="token literal-property property">renderCount</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">// 需要渲染的数量</span>
    <span class="token literal-property property">bufferCount</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token comment">// 缓冲的个数</span>
    <span class="token literal-property property">start</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">// 起始索引</span>
    <span class="token literal-property property">end</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">// 终止索引</span>
    <span class="token literal-property property">currentOffset</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">// 偏移量</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在页面渲染时，通过计算取更新state里的值（计算原理是一样的）</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">// 子列表高度</span>
    <span class="token keyword">const</span> ItemHeight <span class="token operator">=</span> <span class="token number">40</span><span class="token punctuation">;</span>
    <span class="token comment">// 容器的高度</span>
    <span class="token keyword">const</span> scrollAllHeight <span class="token operator">=</span> allRef<span class="token punctuation">.</span>current<span class="token punctuation">.</span>offsetHeight<span class="token punctuation">;</span>
    <span class="token comment">// 列表高度</span>
    <span class="token keyword">const</span> listHeight <span class="token operator">=</span> ItemHeight <span class="token operator">*</span> list<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
    <span class="token comment">//渲染节点的数量</span>
    <span class="token keyword">const</span> renderCount <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">ceil</span><span class="token punctuation">(</span>scrollAllHeight <span class="token operator">/</span> ItemHeight<span class="token punctuation">)</span> <span class="token operator">+</span> state<span class="token punctuation">.</span>bufferCount<span class="token punctuation">;</span>
    state<span class="token punctuation">.</span>renderCount <span class="token operator">=</span> renderCount<span class="token punctuation">;</span>
    state<span class="token punctuation">.</span>end <span class="token operator">=</span> renderCount <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
    state<span class="token punctuation">.</span>listHeight <span class="token operator">=</span> listHeight<span class="token punctuation">;</span>
    state<span class="token punctuation">.</span>itemHeight <span class="token operator">=</span> ItemHeight<span class="token punctuation">;</span>
    state<span class="token punctuation">.</span>data <span class="token operator">=</span> list<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>state<span class="token punctuation">.</span>start<span class="token punctuation">,</span> state<span class="token punctuation">.</span>end<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// eslint-disable-next-line react-hooks/exhaustive-deps</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>allRef<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="监听逻辑设置" tabindex="-1"><a class="header-anchor" href="#监听逻辑设置" aria-hidden="true">#</a> 监听逻辑设置</h3>
<p>以上我们的监听滚动条计算，是借助了useEffect，这种情况下如果组件渲染了两次，它就执行创建了两个”监听“。</p>
<p>使用<code v-pre>useEventListener</code>可以避免这种情况(内部借助了useRef，阻止了多次设置监听)</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>  <span class="token function">useEventListener</span><span class="token punctuation">(</span>
    <span class="token string">"scroll"</span><span class="token punctuation">,</span>
    <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token comment">// 顶部高度</span>
      <span class="token keyword">const</span> <span class="token punctuation">{</span> scrollTop <span class="token punctuation">}</span> <span class="token operator">=</span> scrollRef<span class="token punctuation">.</span>current<span class="token punctuation">;</span>
      state<span class="token punctuation">.</span>start <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>scrollTop <span class="token operator">/</span> state<span class="token punctuation">.</span>itemHeight<span class="token punctuation">)</span><span class="token punctuation">;</span>
      state<span class="token punctuation">.</span>end <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>
        scrollTop <span class="token operator">/</span> state<span class="token punctuation">.</span>itemHeight <span class="token operator">+</span> state<span class="token punctuation">.</span>renderCount <span class="token operator">+</span> <span class="token number">1</span>
      <span class="token punctuation">)</span><span class="token punctuation">;</span>
      state<span class="token punctuation">.</span>currentOffset <span class="token operator">=</span> scrollTop <span class="token operator">-</span> <span class="token punctuation">(</span>scrollTop <span class="token operator">%</span> state<span class="token punctuation">.</span>itemHeight<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">target</span><span class="token operator">:</span> scrollRef <span class="token punctuation">}</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="升级版usememo-利用usecreation优化缓存列表" tabindex="-1"><a class="header-anchor" href="#升级版usememo-利用usecreation优化缓存列表" aria-hidden="true">#</a> 升级版useMemo，利用useCreation优化缓存列表</h3>
<p>据说相当于<strong>升级版</strong>的useMemo</p>
<blockquote>
<p>听着牛逼唬人，其实就是用useRef的特性不重复render了呗</p>
</blockquote>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>  <span class="token function">useCreation</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    state<span class="token punctuation">.</span>data <span class="token operator">=</span> list<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>state<span class="token punctuation">.</span>start<span class="token punctuation">,</span> state<span class="token punctuation">.</span>end<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>state<span class="token punctuation">.</span>start<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>附 <code v-pre>useCreation</code>源码</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> type <span class="token punctuation">{</span> DependencyList <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useRef <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> depsAreSame <span class="token keyword">from</span> <span class="token string">'../utils/depsAreSame'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> useCreation<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">></span><span class="token punctuation">(</span><span class="token function-variable function">factory</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token constant">T</span><span class="token punctuation">,</span> <span class="token literal-property property">deps</span><span class="token operator">:</span> DependencyList<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> current <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useRef</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    deps<span class="token punctuation">,</span>
    <span class="token literal-property property">obj</span><span class="token operator">:</span> <span class="token keyword">undefined</span> <span class="token keyword">as</span> <span class="token keyword">undefined</span> <span class="token operator">|</span> <span class="token constant">T</span><span class="token punctuation">,</span>
    <span class="token literal-property property">initialized</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>current<span class="token punctuation">.</span>initialized <span class="token operator">===</span> <span class="token boolean">false</span> <span class="token operator">||</span> <span class="token operator">!</span><span class="token function">depsAreSame</span><span class="token punctuation">(</span>current<span class="token punctuation">.</span>deps<span class="token punctuation">,</span> deps<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    current<span class="token punctuation">.</span>deps <span class="token operator">=</span> deps<span class="token punctuation">;</span>
    current<span class="token punctuation">.</span>obj <span class="token operator">=</span> <span class="token function">factory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    current<span class="token punctuation">.</span>initialized <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> current<span class="token punctuation">.</span>obj <span class="token keyword">as</span> <span class="token constant">T</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="增加了缓存节点" tabindex="-1"><a class="header-anchor" href="#增加了缓存节点" aria-hidden="true">#</a> 增加了缓存节点</h3>
<p>优化前的版本很粗糙，可以看出随着滚动条滚动，整个列表都在高速更新。网上给出了<strong>缓存节点</strong> 的方案，原理很像懒加载，在没显示的区域预留几个缓存节点。</p>
<blockquote>
<p>很牛，自己没想到这一点</p>
</blockquote>
<p>增加它的原理很简单，只要在计算的时候多计算几个缓存节点就行了</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code> <span class="token comment">//渲染节点的数量</span>
 <span class="token keyword">const</span> renderCount <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">ceil</span><span class="token punctuation">(</span>scrollAllHeight <span class="token operator">/</span> ItemHeight<span class="token punctuation">)</span> <span class="token operator">+</span> state<span class="token punctuation">.</span>bufferCount<span class="token punctuation">;</span>
 <span class="token comment">// state.bufferCount 即为缓存节点的数量，它的数量是自定义的</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="更多的可优化的方向" tabindex="-1"><a class="header-anchor" href="#更多的可优化的方向" aria-hidden="true">#</a> 更多的可优化的方向</h3>
<ol>
<li>
<h5 id="下拉滚动加载请求数据" tabindex="-1"><a class="header-anchor" href="#下拉滚动加载请求数据" aria-hidden="true">#</a> 下拉滚动加载请求数据</h5>
</li>
</ol>
<p>触底的时候触发请求，将数据拼接到list当中</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>  <span class="token function">useEventListener</span><span class="token punctuation">(</span><span class="token string">'scroll'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    
    <span class="token comment">// 顶部高度</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> clientHeight<span class="token punctuation">,</span> scrollHeight <span class="token punctuation">}</span> <span class="token operator">=</span> scrollRef<span class="token punctuation">.</span>current
    <span class="token comment">// 滚动条距离的高度</span>
    <span class="token keyword">const</span> button <span class="token operator">=</span> scrollHeight <span class="token operator">-</span> clientHeight <span class="token operator">-</span> scrollTop
    <span class="token keyword">if</span><span class="token punctuation">(</span>button <span class="token operator">===</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> onRequest<span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token function">onRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> scrollRef<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>
<h5 id="不定高的虚拟列表" tabindex="-1"><a class="header-anchor" href="#不定高的虚拟列表" aria-hidden="true">#</a> 不定高的虚拟列表</h5>
</li>
</ol>
<p>不定高很麻烦，因为无法计算出每个高度的情况，导致<code v-pre>列表的整体高度</code>、<code v-pre>偏移量</code>都无法正常的计算</p>
<p>解决思路：</p>
<ul>
<li>第一种，将<code v-pre>ItemHeight</code>作为参数传递过来，我们可以根据传递<code v-pre>数组</code>来控制，但这种情况需要我们提前将列表的高度算出来，算每个子列表的高度很麻烦，其次这个高度还要根据屏幕的大小去变化，这个方法明显不适合</li>
<li>第二种，<code v-pre>预算高度</code>，我们可以假定子列表的高度也就是虚假高度（<code v-pre>initItemHeight</code>）,当我们渲染的时候，在更新对应高度，这样就可以解决子列表高度的问题</li>
</ul>
<blockquote>
<p>参考链接原文中有实例</p>
</blockquote>
<p>&lt;完&gt;</p>
<p>优化方案参考： <a href="https://juejin.cn/post/7121551701731409934#heading-16" target="_blank" rel="noopener noreferrer">https://juejin.cn/post/7121551701731409934#heading-16<ExternalLinkIcon/></a></p>
</div></template>


