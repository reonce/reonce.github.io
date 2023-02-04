<template><div><h1 id="_16-2-2-操作样式表-16-2-3-元素尺寸-md" tabindex="-1"><a class="header-anchor" href="#_16-2-2-操作样式表-16-2-3-元素尺寸-md" aria-hidden="true">#</a> 16.2.2 操作样式表-16.2.3 <a href="http://xn--z4qw4xwfs16j.md" target="_blank" rel="noopener noreferrer">元素尺寸.md<ExternalLinkIcon/></a></h1>
<h2 id="_16-2-2-操作样式表" tabindex="-1"><a class="header-anchor" href="#_16-2-2-操作样式表" aria-hidden="true">#</a> 16.2.2 操作样式表</h2>
<h3 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h3>
<p>CSSStyleSheet 类型表示 CSS 的样式表，它的实例除了 <code v-pre>disabled</code> 属性外，全是只读属性。</p>
<p>详细属性在 P470 ，目前感觉用不上，了解即可</p>
<p>在多数情况下，用 style 属性就可以实现操作样式规则的任务。例如修改第一个样式表中第一个规则的样式：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> sheet <span class="token operator">=</span> document<span class="token punctuation">.</span>styleSheets<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> rule <span class="token operator">=</span> sheet<span class="token punctuation">.</span>rules<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
rule<span class="token punctuation">.</span>style<span class="token punctuation">.</span>backgroundColor <span class="token operator">=</span> <span class="token string">'red'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="新建和删除规则" tabindex="-1"><a class="header-anchor" href="#新建和删除规则" aria-hidden="true">#</a> 新建和删除规则</h3>
<p>新建规则可以用 <code v-pre>insertRule</code> 方法，两个传参分别是规则的文本和插入位置的索引</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>sheet<span class="token punctuation">.</span><span class="token function">insertRule</span><span class="token punctuation">(</span><span class="token string">"body {background-color : "</span>red<span class="token string">"}"</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>删除规则用 <code v-pre>deleteRule</code> 方法，传入要删除的索引即可</p>
<h2 id="_16-2-3-元素尺寸" tabindex="-1"><a class="header-anchor" href="#_16-2-3-元素尺寸" aria-hidden="true">#</a> 16.2.3 元素尺寸</h2>
<h3 id="偏移尺寸" tabindex="-1"><a class="header-anchor" href="#偏移尺寸" aria-hidden="true">#</a> 偏移尺寸</h3>
<p>偏移尺寸的相对元素是 包含它的元素 ，不一定是父元素。 例如： <code v-pre>&lt;td /&gt;</code> 元素的 包含元素是 <code v-pre>&lt;table /&gt;</code></p>
<ul>
<li>offsetTop 表示元素上边框距离 <strong>包含元素</strong>  (注意不一定是父元素）上边框的像素数</li>
<li>offsetLeft 表示元素左边框距离 <strong>包含元素</strong> 左边框的像素数</li>
<li>offsetHeight 表示元素在垂直方向占用的像素数，包含本身高度、边框高度</li>
<li>offsetWidth 表示元素在水平方向占用的像素数，包含本身宽度、边框宽度</li>
<li>offsetParent 表示元素的 <strong>包含元素</strong> 对象</li>
</ul>
<p>可以通过不断计算自身元素和包含元素的 offsetTop 和，来确定元素距离顶部的距离。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">getElementTop</span> <span class="token punctuation">(</span><span class="token parameter">ele</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> result <span class="token operator">=</span> ele<span class="token punctuation">.</span>offsetTop<span class="token punctuation">;</span>
  <span class="token keyword">let</span> current <span class="token operator">=</span> ele<span class="token punctuation">.</span>offsetParent
  <span class="token keyword">while</span><span class="token punctuation">(</span>current <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    result <span class="token operator">+=</span> current<span class="token punctuation">.</span>offsetTop<span class="token punctuation">;</span>
    current <span class="token operator">=</span> current<span class="token punctuation">.</span>offsetParent
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> result
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="客户端尺寸" tabindex="-1"><a class="header-anchor" href="#客户端尺寸" aria-hidden="true">#</a> 客户端尺寸</h3>
<ul>
<li><code v-pre>clientHeight</code> 表示不含边框的 <strong>内容+内边距</strong> 高度像素数</li>
<li><code v-pre>clientWidth</code> 表示不含边框的 <strong>内容+内边距</strong>  宽度像素数</li>
</ul>
<h3 id="滚动尺寸" tabindex="-1"><a class="header-anchor" href="#滚动尺寸" aria-hidden="true">#</a> 滚动尺寸</h3>
<p>滚动尺寸，提供了元素内容滚动距离的信息</p>
<ul>
<li>scrollHeight 没有滚动条出现时，元素内容的 <strong>总高度</strong></li>
<li>scrollTop 元素距离顶部的滚动偏移量，设置它可以改变元素的垂直滚动位置</li>
<li>scrollLeft 元素距离左侧的滚动偏移量，设置它可以改变元素的水平滚动位置</li>
<li>scrollWidth 没有滚动条出现时，元素内容的 <strong>总宽度</strong></li>
</ul>
<p>其中， <code v-pre>scrollHeight</code> 和 <code v-pre>scrollWidth</code> 可以用来确定元素内容的总体尺寸</p>
<h3 id="确定元素尺寸-getboundingclientrect" tabindex="-1"><a class="header-anchor" href="#确定元素尺寸-getboundingclientrect" aria-hidden="true">#</a> 确定元素尺寸 getBoundingClientRect()</h3>
<p>调用元素的 <code v-pre>getBoundingClientRect()</code> 方法会返回一个 DOMRect 对象，包含 left、top、right、bottom、height、width 六个属性</p>
<ul>
<li>left <strong>元素左侧</strong>距离页面左侧的距离</li>
<li>right <strong>元素右侧</strong>距离页面左侧的距离</li>
<li>top <strong>元素顶部</strong>距离页面顶部的距离</li>
<li>bottom <strong>元素底部</strong>距离页面顶部的距离</li>
</ul>
</div></template>


