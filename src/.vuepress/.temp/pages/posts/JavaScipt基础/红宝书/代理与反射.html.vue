<template><div><h1 id="代理与反射" tabindex="-1"><a class="header-anchor" href="#代理与反射" aria-hidden="true">#</a> 代理与反射</h1>
<p>ES6新增的代理和反射为开发者提供了拦截并向基本操作嵌入额外行为的能力。</p>
<blockquote>
<p>在ES6之前，ECMAScript中并没有类似代理的特性。由于代理是一种新的基础性语言能力，很多转译程序都不能把代理行为装换为之前的ECMAScript代码。<u>因此，代理和反射只能在百分百支持它们的平台上使用</u></p>
</blockquote>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> target <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">'target'</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> handler <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> proxy <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> handler<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//id属性会访问同一个值,修改目标值 会反映在na'ge</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>target<span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// target</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>proxy<span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// target</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Proxy.prototype是undefined,因此不能使用instanceof操作符</p>
<h3 id="定义捕获器" tabindex="-1"><a class="header-anchor" href="#定义捕获器" aria-hidden="true">#</a> 定义捕获器</h3>
<p>使用代理的主要目的是可以定义<strong>捕获器</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> target <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">'bar'</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> handler <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">'handler oberride'</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> proxy <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> handler<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样，当通过代理对象执行get（）操作的时候，就会触发定义的get（）捕获器。当然，这里的get（）不是JS对象可以调用的方法。这个操作是在JS代码中通过多种形式触发并被get（）捕获器拦截到。如下代码，proxy[property]、proxy.property或Object.create(proxy)[property]等操作都会触发基本的get（）操作以获取属性。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>proxy<span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// handler oberride</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>proxy<span class="token punctuation">[</span><span class="token string">'id'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// handler oberride</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>proxy<span class="token punctuation">)</span><span class="token punctuation">[</span>id<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// handler oberride</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="捕获器参数" tabindex="-1"><a class="header-anchor" href="#捕获器参数" aria-hidden="true">#</a> 捕获器参数</h3>
<p>捕获器会接受到<strong>目标对象、要查询的属性和代理对象</strong>三个参数。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> target <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token string">'bar'</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> handler <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function">get</span><span class="token punctuation">(</span>trapTarget<span class="token punctuation">,</span> property<span class="token punctuation">,</span> receiber<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>trapTarget <span class="token operator">===</span> target<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 目标对象</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>property<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 要查询的属性</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>receiber <span class="token operator">===</span> proxy<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 代理对象</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> proxy <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> handler<span class="token punctuation">)</span><span class="token punctuation">;</span>

proxy<span class="token punctuation">.</span>foo<span class="token punctuation">;</span>
<span class="token comment">// true</span>
<span class="token comment">// foo</span>
<span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>所有捕获器都可以基于自己的参数重建原始操作，但是并被所有捕获器行为都像get()那么简单。因此手动编写代码如法炮制的想法是不现实的。因此全局封装了<strong>Reflect</strong>对象。</p>
<h4 id="反射api-reflect对象" tabindex="-1"><a class="header-anchor" href="#反射api-reflect对象" aria-hidden="true">#</a> 反射API(Reflect对象)</h4>
<p>apply调用函数用的，construct是通过new操作符初始化实例用的。</p>
<p>其他的十一个都是和对象相关的。例如定义属性、删除属性、访问属性、设置属性等等。</p>
<p>因此，如果我们想创建一个可以捕获所有方法，然后将每个方法转发给对应反射API的空代理，那么甚至不需要定义处理程序对象：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> proxy <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> Reflect<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 等同于下方</span>
<span class="token keyword">const</span> proxy <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="实用反射api" tabindex="-1"><a class="header-anchor" href="#实用反射api" aria-hidden="true">#</a> 实用反射API</h4>
<p>在这些情况下应该优先实用反射<strong>API</strong>，这是有一些理由的。</p>
<ol>
<li>
<p>反射API与对象API</p>
<ol>
<li>
<p>反射API并不限于捕获处理程序</p>
</li>
<li>
<p>大多数反射API方法在Object类型上有对应的方法。通常Object适用于通用程序，而反射方法适用于颗粒度的对象控制与操作。</p>
<p>例如：<code v-pre>Object.keys()</code>只能枚举可枚举属性，<code v-pre>Reflect.ownKeys()</code>可以枚举全部属性。可以对应<code v-pre>Object.getOwnPropertyNames()</code>作用一样。</p>
</li>
</ol>
</li>
<li>
<p>状态标记</p>
<p>Object.deineProperty会返回创建的对象，这个对象实际上没什么用。</p>
<p>Reflect.deineProperty会返回创建与否的布尔值，状态标记。</p>
</li>
<li>
<p>用一等函数代替操作符</p>
</li>
</ol>
<h4 id="捕获器不变式" tabindex="-1"><a class="header-anchor" href="#捕获器不变式" aria-hidden="true">#</a> 捕获器不变式</h4>
<p>当一个对象的属性<strong>不可配置且不可写</strong>时，不能通过捕获器返回一个和该属性不同的的值，会抛出TypeError；</p>
<h4 id="可撤销代理" tabindex="-1"><a class="header-anchor" href="#可撤销代理" aria-hidden="true">#</a> 可撤销代理</h4>
<p>有时候需要终端代理对象和目标对象之间的联系。</p>
<p>Proxy暴露了<code v-pre>rebocable()</code>方法，这个方法支持撤销代理对象与目标对象的关联。撤销代理的操作是不可逆的。撤销函数<code v-pre>revoke()</code>是幂等的，调用几次结果都一样。撤销代理之后再调用代理会抛出异常。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> target <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token string">'bar'</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> handle <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">'intercepted'</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span> proxy<span class="token punctuation">,</span> revoke <span class="token punctuation">}</span> <span class="token operator">=</span> Proxy<span class="token punctuation">.</span><span class="token function">revocable</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> handle<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>proxy<span class="token punctuation">.</span>foo  <span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//'intercepted'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="代理捕获器与反射方法-见书p274" tabindex="-1"><a class="header-anchor" href="#代理捕获器与反射方法-见书p274" aria-hidden="true">#</a> 代理捕获器与反射方法，见书P274</h5>
<h4 id="代理应用一个有趣的例子" tabindex="-1"><a class="header-anchor" href="#代理应用一个有趣的例子" aria-hidden="true">#</a> 代理应用一个有趣的例子</h4>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> Reflect<span class="token punctuation">.</span><span class="token function">ownKeys</span><span class="token punctuation">(</span>Reflect<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">handlers<span class="token punctuation">,</span> key</span><span class="token punctuation">)</span><span class="token operator">=></span> <span class="token punctuation">{</span>
  handlers<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> <span class="token operator">...</span>args<span class="token punctuation">)</span>
    <span class="token keyword">return</span> Reflect<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> handlers
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过反射API监听数组的变化，例如push一个元素，会打印出全过程</p>
<blockquote>
<p>数组的length属性是可修改的，对象的不可以</p>
</blockquote>
</div></template>


