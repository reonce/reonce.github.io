<template><div><h1 id="未知高度元素-垂直水平居中" tabindex="-1"><a class="header-anchor" href="#未知高度元素-垂直水平居中" aria-hidden="true">#</a> 未知高度元素，垂直水平居中</h1>
<p>除flex外的方法：</p>
<h2 id="absolute-transform" tabindex="-1"><a class="header-anchor" href="#absolute-transform" aria-hidden="true">#</a> absolute+transform</h2>
<div class="language-jsx line-numbers-mode" data-ext="jsx"><pre v-pre class="language-jsx"><code><span class="token punctuation">.</span>parent <span class="token punctuation">{</span>
      <span class="token literal-property property">position</span><span class="token operator">:</span> relative<span class="token punctuation">;</span>
      <span class="token literal-property property">height</span><span class="token operator">:</span> 500px<span class="token punctuation">;</span>
      <span class="token literal-property property">width</span><span class="token operator">:</span> 500px<span class="token punctuation">;</span>
      background<span class="token operator">-</span>color<span class="token operator">:</span> #fd0c70<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">.</span>child <span class="token punctuation">{</span>
      <span class="token literal-property property">position</span><span class="token operator">:</span> absolute<span class="token punctuation">;</span>
      <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token number">50</span><span class="token operator">%</span><span class="token punctuation">;</span>
      <span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token number">50</span><span class="token operator">%</span><span class="token punctuation">;</span>
      <span class="token literal-property property">transform</span><span class="token operator">:</span> <span class="token function">translate</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">50</span><span class="token operator">%</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">50</span><span class="token operator">%</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token literal-property property">width</span><span class="token operator">:</span> 100px<span class="token punctuation">;</span>
      <span class="token literal-property property">height</span><span class="token operator">:</span> 100px<span class="token punctuation">;</span>
      <span class="token literal-property property">background</span><span class="token operator">:</span> blue<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="absolute-margin-实测子元素需要有高度和宽度" tabindex="-1"><a class="header-anchor" href="#absolute-margin-实测子元素需要有高度和宽度" aria-hidden="true">#</a> absolute+margin（实测子元素需要有高度和宽度）</h2>
<div class="language-jsx line-numbers-mode" data-ext="jsx"><pre v-pre class="language-jsx"><code><span class="token punctuation">.</span>parent <span class="token punctuation">{</span>
     <span class="token literal-property property">height</span><span class="token operator">:</span> 500px<span class="token punctuation">;</span>
     <span class="token literal-property property">width</span><span class="token operator">:</span> 500px<span class="token punctuation">;</span>
     background<span class="token operator">-</span>color<span class="token operator">:</span> #fd0c70<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">.</span>child <span class="token punctuation">{</span>
      <span class="token literal-property property">position</span><span class="token operator">:</span> absolute<span class="token punctuation">;</span>
      <span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
      <span class="token literal-property property">right</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
      <span class="token literal-property property">bottom</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
      <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
      <span class="token literal-property property">margin</span><span class="token operator">:</span> auto<span class="token punctuation">;</span>

      <span class="token literal-property property">width</span><span class="token operator">:</span> 100px<span class="token punctuation">;</span>
      <span class="token literal-property property">height</span><span class="token operator">:</span> 100px<span class="token punctuation">;</span>
      <span class="token literal-property property">background</span><span class="token operator">:</span> blue<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="display-table-vertical-align" tabindex="-1"><a class="header-anchor" href="#display-table-vertical-align" aria-hidden="true">#</a> display: table + vertical-align</h2>
<div class="language-jsx line-numbers-mode" data-ext="jsx"><pre v-pre class="language-jsx"><code><span class="token punctuation">.</span>parent <span class="token punctuation">{</span>
      <span class="token literal-property property">display</span><span class="token operator">:</span> table<span class="token punctuation">;</span>
      <span class="token literal-property property">height</span><span class="token operator">:</span> 500px<span class="token punctuation">;</span>
      <span class="token literal-property property">width</span><span class="token operator">:</span> 500px<span class="token punctuation">;</span>
      background<span class="token operator">-</span>color<span class="token operator">:</span> #fd0c70<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token punctuation">.</span>child <span class="token punctuation">{</span>
      <span class="token literal-property property">display</span><span class="token operator">:</span> table<span class="token operator">-</span>cell<span class="token punctuation">;</span>
      vertical<span class="token operator">-</span>align<span class="token operator">:</span> middle<span class="token punctuation">;</span>
      text<span class="token operator">-</span>align<span class="token operator">:</span> center<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="伪元素-已知父元素宽高-子元素未知" tabindex="-1"><a class="header-anchor" href="#伪元素-已知父元素宽高-子元素未知" aria-hidden="true">#</a> 伪元素：已知父元素宽高，子元素未知</h2>
<div class="language-jsx line-numbers-mode" data-ext="jsx"><pre v-pre class="language-jsx"><code><span class="token punctuation">.</span>parent <span class="token punctuation">{</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> 300px<span class="token punctuation">;</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> 300px<span class="token punctuation">;</span>
    text<span class="token operator">-</span>align<span class="token operator">:</span> center<span class="token punctuation">;</span>
    <span class="token literal-property property">background</span><span class="token operator">:</span> pink<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

    <span class="token punctuation">.</span>parent<span class="token operator">:</span><span class="token operator">:</span>before <span class="token punctuation">{</span>
      <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">;</span>
      <span class="token literal-property property">display</span><span class="token operator">:</span> inline<span class="token operator">-</span>block<span class="token punctuation">;</span>
      <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
      <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">;</span>
      vertical<span class="token operator">-</span>align<span class="token operator">:</span> middle<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token punctuation">.</span>child <span class="token punctuation">{</span>
      <span class="token literal-property property">display</span><span class="token operator">:</span> inline<span class="token operator">-</span>block<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


