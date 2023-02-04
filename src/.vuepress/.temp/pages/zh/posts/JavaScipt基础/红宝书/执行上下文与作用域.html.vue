<template><div><h3 id="上下文" tabindex="-1"><a class="header-anchor" href="#上下文" aria-hidden="true">#</a> 上下文</h3>
<p>上下文之间的连接是线性的、有序的。每个上下文都可以到上一级上下文中去搜索变量和函数，但是不能到下一级去搜索。有点像事件冒泡，一层一层往上。</p>
<h3 id="作用域链增强" tabindex="-1"><a class="header-anchor" href="#作用域链增强" aria-hidden="true">#</a> 作用域链增强</h3>
<ul>
<li>
<p>tyr/catch 中的catch块</p>
</li>
<li>
<p>with语句</p>
<p>这两种情况下，会在作用域链前端加一个变量对象</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">buildUrl</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> qs <span class="token operator">=</span> <span class="token string">"?debug=true"</span><span class="token punctuation">;</span>
  <span class="token keyword">with</span><span class="token punctuation">(</span>location<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> url <span class="token operator">=</span> href <span class="token operator">+</span> qs<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> url<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


