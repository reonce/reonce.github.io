<template><div><h1 id="react函数组件中使用防抖节流" tabindex="-1"><a class="header-anchor" href="#react函数组件中使用防抖节流" aria-hidden="true">#</a> React函数组件中使用防抖节流</h1>
<h5 id="由于react组件变量变化会导致重复渲染的特性-不能直接的使用loadsh的debouce进行防抖。" tabindex="-1"><a class="header-anchor" href="#由于react组件变量变化会导致重复渲染的特性-不能直接的使用loadsh的debouce进行防抖。" aria-hidden="true">#</a> 由于react组件变量变化会导致重复渲染的特性，不能直接的使用loadsh的debouce进行防抖。</h5>
<h3 id="解决思路-使用usecallback保持防抖函数的唯一性-不重复渲染" tabindex="-1"><a class="header-anchor" href="#解决思路-使用usecallback保持防抖函数的唯一性-不重复渲染" aria-hidden="true">#</a> 解决思路： 使用useCallback保持防抖函数的唯一性，不重复渲染</h3>
<p>例如：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">useDebounce</span><span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> delay</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">useCallback</span><span class="token punctuation">(</span><span class="token function">debounce</span><span class="token punctuation">(</span>fn<span class="token punctuation">,</span> delay<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>counter<span class="token punctuation">,</span> setCounter<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> handleClick <span class="token operator">=</span> <span class="token function">useDebounce</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">setCounter</span><span class="token punctuation">(</span>counter <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token operator">&lt;</span>div style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">padding</span><span class="token operator">:</span> <span class="token number">30</span> <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>Button
      onClick<span class="token operator">=</span><span class="token punctuation">{</span>handleClick<span class="token punctuation">}</span>
    <span class="token operator">></span>click<span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">></span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span><span class="token punctuation">{</span>counter<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>点击按钮会发现counter变成1后不变了。</p>
<p>**原因：**由于我们的<code v-pre>useCallback</code>依赖为空数组，所以组件初始化完成后，<code v-pre>handleClick</code>函数永远为初始化时的函数快照，也就是后续组件重新渲染时不会更新<code v-pre>handleClick</code>，同时，<code v-pre>handleClick</code>持有的<code v-pre>counter</code>也为本次函数创建时的快照，即永远为<code v-pre>0</code>,所以，哪怕防抖函数保持不变，也没法使程序正常运行。</p>
<blockquote>
<p>这个例子中可以通过<code v-pre> setCounter(x =&gt; x + 1)</code>来得到正确的<code v-pre>counter</code>值，但其他的事件场景不适用。</p>
</blockquote>
<h3 id="解决思路-用ref来保持唯一性" tabindex="-1"><a class="header-anchor" href="#解决思路-用ref来保持唯一性" aria-hidden="true">#</a> 解决思路：用Ref来保持唯一性</h3>
<p>在函数组件中，如果你实在难以阻止重复渲染，那么用ref会是个保底的方法(尽量不要滥用)。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">useDebounce</span><span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> delay<span class="token punctuation">,</span> dep <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> current <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useRef</span><span class="token punctuation">(</span><span class="token punctuation">{</span> fn<span class="token punctuation">,</span> <span class="token literal-property property">timer</span><span class="token operator">:</span> <span class="token keyword">null</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    current<span class="token punctuation">.</span>fn <span class="token operator">=</span> fn<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>fn<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token function">useCallback</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>current<span class="token punctuation">.</span>timer<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">clearTimeout</span><span class="token punctuation">(</span>current<span class="token punctuation">.</span>timer<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    current<span class="token punctuation">.</span>timer <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      current<span class="token punctuation">.</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> delay<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> dep<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个方法是可行的，封装成一个公共hooks还是比较实用的。</p>
<p>完</p>
</div></template>


