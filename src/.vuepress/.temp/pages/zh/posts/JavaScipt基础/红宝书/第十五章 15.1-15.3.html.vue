<template><div><h1 id="第十五章-dom扩展-15-1-15-3" tabindex="-1"><a class="header-anchor" href="#第十五章-dom扩展-15-1-15-3" aria-hidden="true">#</a> 第十五章 DOM扩展 15.1-15.3</h1>
<h2 id="_15-1-selectors-api" tabindex="-1"><a class="header-anchor" href="#_15-1-selectors-api" aria-hidden="true">#</a> 15.1 Selectors API</h2>
<p>Selectors API 是 W3C 推荐标准，规定了浏览器原生支持的、通过 CSS 查询 DOM 的 API</p>
<h3 id="_15-1-1-queryselector" tabindex="-1"><a class="header-anchor" href="#_15-1-1-queryselector" aria-hidden="true">#</a> 15.1.1 querySelector()</h3>
<p>这个方法可以传入 CSS 选择符参数，例如：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 通过标签元素查找</span>
<span class="token keyword">let</span> body <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'body'</span><span class="token punctuation">)</span>
<span class="token comment">// 通过 id 查找</span>
<span class="token keyword">let</span> myDiv <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'#myDiv'</span><span class="token punctuation">)</span>
<span class="token comment">// 通过 类名 查找</span>
<span class="token keyword">let</span> myDiv <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'.box'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个方法会返回找到的第一个元素，未找到则返回 null</p>
<h3 id="_15-1-2-queryselectorall" tabindex="-1"><a class="header-anchor" href="#_15-1-2-queryselectorall" aria-hidden="true">#</a> 15.1.2 querySelectorAll()</h3>
<p>和 querySelector() 传参相同，它会返回一个符合条件的 NodeList 集合，未找到则会返回一个空的 NodeList 实例</p>
<h3 id="_15-1-3-matches" tabindex="-1"><a class="header-anchor" href="#_15-1-3-matches" aria-hidden="true">#</a> 15.1.3 matches()</h3>
<p>根据 CSS选择符 来判断是否能找到符合条件的元素，返回一个布尔值，可以用来做前置判断。</p>
<h2 id="_15-2-元素遍历" tabindex="-1"><a class="header-anchor" href="#_15-2-元素遍历" aria-hidden="true">#</a> 15.2 元素遍历</h2>
<p>由于 IE9 以前不会把元素节点的空格当成空白节点，其他浏览器会。因此又专门出了个叫做 Element Traversal API。 定义了一下五个属性：</p>
<ul>
<li>childElementCount  子元素数量（不含文本节点和注释）</li>
<li>firstElementChild 指向第一个 Element 类型的子元素</li>
<li>lastElementChild</li>
<li>previousElementSibling 执行前一个 Element 类型的兄弟节点</li>
<li>nextElementSibling</li>
</ul>
<p>之前的 Element 遍历需要加一行 nodeType 类型的判断，现在用这个 API 则可以之间遍历了。</p>
</div></template>


