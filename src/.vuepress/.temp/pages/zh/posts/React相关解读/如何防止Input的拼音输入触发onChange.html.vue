<template><div><h1 id="如何防止input的拼音输入触发onchange" tabindex="-1"><a class="header-anchor" href="#如何防止input的拼音输入触发onchange" aria-hidden="true">#</a> 如何防止Input的拼音输入触发onChange</h1>
<p>需要使用到<Input />的两个厲性 compositionstart 和compositionEnd。下面来看看它们的MDN定义。
compositionstart：输入法编辑器开始新的输入法合成时触发的事件，例如，当用户使用拼音输入法开始输
入汉字时，这个事件就会被触发。
compositionstart：同理可得，这是输入法合成完成后触发的事件，例如，当用户使用拼音输入法输入完拼
音选中汉字时，这个事件就会被触发。
我们可以在输入法合成时设置一个锁 lock=true;在输入法合成结束时解除这个锁 lock=false，在锁生效期
间onChange事件都return掉不触发，在输入法合成结束时再setlnputValue即可。需要注意的是，这么做的话我
们的＜Input /＞组件必须设置为非受控，否则在拼音时，会因为此时锁生效不触发setlnputValue事件导致输入框
一直为空，无任何输入。</p>
<h4 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码" aria-hidden="true">#</a> 示例代码</h4>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">//拼音输入时的锁</span>
<span class="token keyword">const</span> isLock <span class="token operator">=</span> <span class="token function">useRef</span> <span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span> <span class="token punctuation">;</span>

<span class="token keyword">const</span> onCompositionChange <span class="token operator">=</span> <span class="token function">useCallback</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/** 拼音输入时上锁 */</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>e<span class="token punctuation">.</span>type <span class="token operator">===</span> <span class="token string">'compositionstart'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    isLock<span class="token punctuation">.</span>current <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> 
  <span class="token doc-comment comment">/** 拼音输入完成后解锁，且将此时的内容手动设置入inputValue */</span>
  <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>e<span class="token punctuation">.</span>type <span class="token operator">===</span> <span class="token string">'compositionend'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    isLock<span class="token punctuation">.</span>current <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token function">dispatch</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token operator">&lt;</span>Input
  onChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">// 上锁时不改变inputValue</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>isLock<span class="token punctuation">.</span>current<span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token function">setInputValue</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">}</span>
  onCompositionStart<span class="token operator">=</span><span class="token punctuation">{</span>onCompositionChange<span class="token punctuation">}</span>
  onCompositionEnd<span class="token operator">=</span><span class="token punctuation">{</span>onCompositionChange<span class="token punctuation">}</span>
<span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


