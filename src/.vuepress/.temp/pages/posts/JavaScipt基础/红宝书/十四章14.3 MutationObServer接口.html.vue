<template><div><h1 id="今天拜读了红宝书-dom的14-2-4、14-3章节" tabindex="-1"><a class="header-anchor" href="#今天拜读了红宝书-dom的14-2-4、14-3章节" aria-hidden="true">#</a> 今天拜读了红宝书 Dom的14.2.4、14.3章节</h1>
<h2 id="_14-2-4-nodelist" tabindex="-1"><a class="header-anchor" href="#_14-2-4-nodelist" aria-hidden="true">#</a> 14.2.4 Nodelist</h2>
<p>本节点提到，理解nodelist对象和相关的NamedNodeMap、HTMLCollection，是理解DOM的关键。我一看这还了得，赶紧打起精神来，结果翻到下一页，就介绍了一页的篇幅...
主要是介绍，nodelist是实时变化的，它始终展示最新的状态。例子：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> divs <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementByTagName</span><span class="token punctuation">(</span><span class="token string">'div'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> divs<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> div <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'div'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>div<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 这段代码会陷入死循环，因为Nodelist是基于DOM文档的实时查询</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如何避免：</p>
<p>推荐用法，通过缓存一个初始变量len</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token operator">...</span>
<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> len <span class="token operator">=</span> divs<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i <span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token operator">...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其他用法， 反向迭代集合。 缺点，只能控制已知循环内添加div数量的情况</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token operator">...</span>
<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> divs<span class="token punctuation">.</span>length <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token operator">...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_14-3-mutationobserver接口" tabindex="-1"><a class="header-anchor" href="#_14-3-mutationobserver接口" aria-hidden="true">#</a> 14.3 MutationObserver接口</h2>
<p>在DOM修改后异步回调，可以观察到DOM修改前后的属性。</p>
<blockquote>
<p>用MutationObserver可以观察整个文档、DOM树的一部分，或某个元素</p>
</blockquote>
<h3 id="基本用法" tabindex="-1"><a class="header-anchor" href="#基本用法" aria-hidden="true">#</a> 基本用法</h3>
<p>基本用法是，创建一个MutationObserver对象，然后在此对象上声明 <code v-pre>observe()</code>方法，这个方法接收两个参数，第一个是要监听的DOM，第二个是需要监听的属性值（属性类型字典【观察范围】，叫做 MutationObserverInit)</p>
<p>创建MutationObserver对象时，需要传递一个函数，函数接收一个传参，叫做mutationRecords，是后续监听到变化的结果记录，通过这个记录的值，可以观测到DOM的变化。</p>
<blockquote>
<p>MutationObserverInit与观察范围是本书的14.3.2章节  P437</p>
</blockquote>
<p>例子：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">//  创建观察对象observer</span>
<span class="token keyword">const</span> observer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MutationObserver</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">mutationRecords</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>mutationRecords<span class="token punctuation">)</span><span class="token punctuation">;</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"监听到了"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">const</span> dom <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">"div"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">// document.body.appendChild(dom);</span>
      <span class="token comment">// dom.innerText = "hello world";</span>
<span class="token comment">// 使用监听方法， attributes: true表示监听属性值变化</span>
      observer<span class="token punctuation">.</span><span class="token function">observe</span><span class="token punctuation">(</span>dom<span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">attributes</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token comment">// characterData: true,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      dom<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">"foo"</span><span class="token punctuation">,</span> <span class="token string">"far"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">// dom.innerText = "hello dom";</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述例子中，observe()方法第二个参数对象包含 <code v-pre>characterData: true</code>  表示监听文本。但是我实测没有监听成功，不知道是不是浏览器协议属性有变化，MDN上说这个属性的默认值已经是true了，如果声明了 <code v-pre>characterDataOldValue</code>，默认值才是 <code v-pre>false</code>  考虑到我也用不上，本着了解的原则，先放着吧。</p>
<h3 id="清除监听" tabindex="-1"><a class="header-anchor" href="#清除监听" aria-hidden="true">#</a> 清除监听</h3>
<p>除非被监听的DOM被垃圾回收掉，在不清楚的情况下，MutationObserver的监听会一直生效</p>
<p><code v-pre> disconnect</code> 方法用来清除监听， 续上面的例子代码，取消掉监听就是：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>observer<span class="token punctuation">.</span><span class="token function">disconnect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这个方法会一次性清除掉所有的监听方法。清除后重新调用<code v-pre> observe()</code>方法会重新监听。</p>
<h3 id="在mutationobserver对象外部接收记录值" tabindex="-1"><a class="header-anchor" href="#在mutationobserver对象外部接收记录值" aria-hidden="true">#</a> 在MutationObserver对象外部接收记录值</h3>
<blockquote>
<p><strong><code v-pre>takeRecords()</code></strong> 方法返回已检测到但尚未由观察者的回调函数处理的所有匹配 DOM 更改的列表，使变更队列保持为空。此方法最常见的使用场景是在断开观察者之前立即获取所有未处理的更改记录，以便在停止观察者时可以处理任何未处理的更改。</p>
</blockquote>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> targetNode <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">"#someElement"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> observerOptions <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">childList</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">attributes</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> observer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MutationObserver</span><span class="token punctuation">(</span>callback<span class="token punctuation">)</span><span class="token punctuation">;</span>
observer<span class="token punctuation">.</span><span class="token function">observe</span><span class="token punctuation">(</span>targetNode<span class="token punctuation">,</span> observerOptions<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">/* ...later, when it's time to stop observing... */</span>

<span class="token comment">/* handle any still-pending mutations */</span>

<span class="token keyword">var</span> mutations <span class="token operator">=</span> observer<span class="token punctuation">.</span><span class="token function">takeRecords</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span>mutations<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">callback</span><span class="token punctuation">(</span>mutations<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

observer<span class="token punctuation">.</span><span class="token function">disconnect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>代码中第 12-17 行抓取了所有未处理的变更记录，然后调用回调，并将变更记录列表传递给回调，以保证所有变更记录都被处理。这是在调用 <a href="https://developer.mozilla.org/zh-CN/docs/Web/API/MutationObserver/disconnect" target="_blank" rel="noopener noreferrer"><code v-pre>disconnect()</code><ExternalLinkIcon/></a> 之前完成的，以便停止观察 DOM。</p>
<p>大白话是 在你监听记录之后，需要清除监听，但是在函数内部你是无法清除的，因此多了个方法接受记录值。注意在变化一次的场景下，仅在第一次调用这个方法会接收到，第二次就是空数组了。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token operator">...</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>observer<span class="token punctuation">.</span><span class="token function">takeRecords</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>observer<span class="token punctuation">.</span><span class="token function">takeRecords</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token operator">...</span>
<span class="token comment">// [record1, record2, ...]</span>
<span class="token comment">// [] 第二次调用打印，记录不见了</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="性能、内存与垃圾回收" tabindex="-1"><a class="header-anchor" href="#性能、内存与垃圾回收" aria-hidden="true">#</a> 性能、内存与垃圾回收</h3>
<blockquote>
<p>DOM Level2 规范中描述的MutationEvent定义了一组会在DOM变化出发的事件，但是由于浏览器事件的实现机制，这个接口性能问题严重。因此在 DOM Level3中废弃了这些事件，并出现了MutationObserver接口替代它</p>
<p><strong>MutationObserver接口将变化委托给微任务</strong>来执行可以保证事件同步出发，同时避免它带来的混乱</p>
<p>无论如何， <code v-pre>MutationObserver</code>仍然不是没有代价的。因此理解何时避免出现这种情况很重要</p>
</blockquote>
<h4 id="_1-mutationobserver的引用" tabindex="-1"><a class="header-anchor" href="#_1-mutationobserver的引用" aria-hidden="true">#</a> 1. MutationObserver的引用</h4>
<p>MutationObserver实例与目标节点之间的引用，非对称的。</p>
<p>MutationObserver实例对目标节点之间的引用是<strong>弱引用</strong>，所以不会阻碍垃圾回收。</p>
<p>目标节点对MutationObserver实例是**强引用 **， 因此DOM节点被回收后，对应关联的MutationObserver也会被回收。</p>
<p>Ps: 精妙的设计</p>
<h4 id="_2-mutationrecord的引用" tabindex="-1"><a class="header-anchor" href="#_2-mutationrecord的引用" aria-hidden="true">#</a> 2. MutationRecord的引用</h4>
<p>记录队列中每个 <code v-pre>MutationRecord</code> 实例至少包含对已有DOM节点的一个引用，如果是 childList 类型，则会包含多个节点的引用。记录队列和回调处理的默认行为会消耗这个队列，<strong>处理每个MutationRecord并让他们超出作用于被垃圾回收</strong>。</p>
<p>当需要保存某个观察者的完整变化记录时，因为保存这些实例也会保存它们引用的节点，会妨碍这些节点被垃圾回收。如果需要尽快的释放内存，建议把每个 <code v-pre>MutationRecord</code>中需要的信息抽取出来，保存到一个新对象里，最后抛弃 <code v-pre>MutationRecord</code></p>
</div></template>


