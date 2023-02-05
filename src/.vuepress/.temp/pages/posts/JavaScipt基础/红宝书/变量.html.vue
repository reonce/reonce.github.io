<template><div><h2 id="声明变量的三个关键字-var、let、const" tabindex="-1"><a class="header-anchor" href="#声明变量的三个关键字-var、let、const" aria-hidden="true">#</a> 声明变量的三个关键字：var、let、const</h2>
<h2 id="var" tabindex="-1"><a class="header-anchor" href="#var" aria-hidden="true">#</a> var</h2>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 函数级作用域</span>
<span class="token keyword">function</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
<span class="token keyword">var</span> msg <span class="token operator">=</span> <span class="token string">'123'</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token number">123</span>
msg
<span class="token comment">// undefined异常</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 作用域提升</span>
<span class="token keyword">function</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span>
<span class="token keyword">var</span> msg <span class="token operator">=</span> <span class="token string">'123'</span>
<span class="token punctuation">}</span>

<span class="token comment">// 相当于</span>

<span class="token keyword">function</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
<span class="token keyword">var</span> msg 
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span>
<span class="token keyword">var</span> msg <span class="token operator">=</span> <span class="token string">'123'</span>
<span class="token punctuation">}</span>

<span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// undefined</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 避免使用不加关键字的声明</span>
<span class="token keyword">function</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  msg <span class="token operator">=</span> <span class="token string">'123'</span>
<span class="token punctuation">}</span>
<span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
msg
<span class="token comment">// 123</span>

<span class="token comment">// 会自动提升到全局作用域，浏览器中会到window对象上  </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 重复声明不报错，后声明的会覆盖之前的，存在隐患。</span>

<span class="token keyword">function</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  msg <span class="token operator">=</span> <span class="token string">'def'</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span>
  <span class="token keyword">var</span> msg<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// def</span>
msg
<span class="token comment">// 抛出未定义异常</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="let" tabindex="-1"><a class="header-anchor" href="#let" aria-hidden="true">#</a> let</h2>
<p>针对var的缺点，es6引入了let和const。</p>
<p>块级作用域，可以粗略的理解，花括号内的作用域。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 块级作用域</span>
<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">let</span> content <span class="token operator">=</span> <span class="token number">123</span>
<span class="token punctuation">}</span>
content 
<span class="token comment">// undefined</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 没有变量提升，有TDZ，临时死区</span>
<span class="token keyword">function</span> <span class="token function">test</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span>
  <span class="token keyword">let</span> msg<span class="token punctuation">;</span>
  msg <span class="token operator">=</span> <span class="token number">456</span>
<span class="token punctuation">}</span>

<span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// 抛出异常  Cannot access 'msg' before initialization。 存在了临时死区 TDZ。不能在声明前使用这个变量。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="不能重复声明会报错。" tabindex="-1"><a class="header-anchor" href="#不能重复声明会报错。" aria-hidden="true">#</a> 不能重复声明会报错。</h5>
<h5 id="混用let和var会报错。" tabindex="-1"><a class="header-anchor" href="#混用let和var会报错。" aria-hidden="true">#</a> 混用let和var会报错。</h5>
<h5 id="全局声明不是window对象的属性" tabindex="-1"><a class="header-anchor" href="#全局声明不是window对象的属性" aria-hidden="true">#</a> 全局声明不是window对象的属性</h5>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> age <span class="token operator">=</span> <span class="token number">123</span>
window<span class="token punctuation">.</span>age <span class="token comment">// undefined</span>
age <span class="token comment">//123</span>
<span class="token comment">// age虽然没有在window对象，但是仍然在页面级存在，可以像访问全局的变量一样访问它</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="const" tabindex="-1"><a class="header-anchor" href="#const" aria-hidden="true">#</a> const</h2>
<h5 id="声明同时必须初始化" tabindex="-1"><a class="header-anchor" href="#声明同时必须初始化" aria-hidden="true">#</a> 声明同时必须初始化</h5>
<h5 id="初始化后不能修改" tabindex="-1"><a class="header-anchor" href="#初始化后不能修改" aria-hidden="true">#</a> 初始化后不能修改</h5>
<h5 id="不能修改仅限于常量的引用" tabindex="-1"><a class="header-anchor" href="#不能修改仅限于常量的引用" aria-hidden="true">#</a> 不能修改仅限于常量的引用</h5>
<h5 id="不能用于声明会自增的迭代变量" tabindex="-1"><a class="header-anchor" href="#不能用于声明会自增的迭代变量" aria-hidden="true">#</a> 不能用于声明会自增的迭代变量</h5>
<blockquote>
<p>在for...of 和for...in中是可以的</p>
<p>虽然看上去是在外面，实际上执行的时候在花括号里面，每次迭代的时候都会声明一个新的变量。</p>
</blockquote>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> i <span class="token keyword">in</span> <span class="token punctuation">{</span><span class="token literal-property property">a</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">b</span><span class="token operator">:</span><span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">// 'a'</span>
<span class="token comment">// 'b'</span>

<span class="token comment">// for...of 必须用于可迭代的变量。</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> i <span class="token keyword">of</span> <span class="token string">'ab'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">// 'a'</span>
<span class="token comment">// 'b'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


