<template><div><h1 id="typescript-索引签名导致的报错问题" tabindex="-1"><a class="header-anchor" href="#typescript-索引签名导致的报错问题" aria-hidden="true">#</a> TypeScript 索引签名导致的报错问题</h1>
<p>可以用字符串访问 JavaScript 中的对象（TypeScript 中也一样），用来保存对其他对象的引用。</p>
<p>例如：</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">let</span> foo<span class="token operator">:</span> <span class="token builtin">any</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
foo<span class="token punctuation">[</span><span class="token string">'Hello'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">'World'</span><span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>foo<span class="token punctuation">[</span><span class="token string">'Hello'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// World</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们在键 <code v-pre>Hello</code> 下保存了一个字符串 <code v-pre>World</code>，除字符串外，它也可以保存任意的 JavaScript 对象，例如一个类的实例。</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Foo</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token keyword">public</span> message<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> foo<span class="token operator">:</span> <span class="token builtin">any</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
foo<span class="token punctuation">[</span><span class="token string">'Hello'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Foo</span><span class="token punctuation">(</span><span class="token string">'World'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
foo<span class="token punctuation">[</span><span class="token string">'Hello'</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// World</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当你传入一个其他对象至索引签名时，JavaScript 会在得到结果之前会先调用 <code v-pre>.toString</code> 方法：</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'toString called'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token string">'Hello'</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> foo<span class="token operator">:</span> <span class="token builtin">any</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
foo<span class="token punctuation">[</span>obj<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">'World'</span><span class="token punctuation">;</span> <span class="token comment">// toString called</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>foo<span class="token punctuation">[</span>obj<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// toString called, World</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>foo<span class="token punctuation">[</span><span class="token string">'Hello'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// World</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>TIP</p>
<p>只要索引位置使用了 <code v-pre>obj</code>，<code v-pre>toString</code> 方法都将会被调用。</p>
<p>数组有点稍微不同，对于一个 <code v-pre>number</code> 类型的索引签名，JavaScript 引擎将会尝试去优化（这取决于它是否是一个真的数组、存储的项目结构是否匹配等）。因此，<code v-pre>number</code> 应该被考虑作为一个有效的对象访问器（这与 <code v-pre>string</code> 不同），如下例子：</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">let</span> foo <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'World'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>foo<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// World</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>因此，这就是 JavaScript。现在让我们看看 TypeScript 对这些概念更优雅的处理。</p>
<h2 id="typescript-索引签名" tabindex="-1"><a class="header-anchor" href="#typescript-索引签名" aria-hidden="true">#</a> TypeScript 索引签名</h2>
<p>JavaScript 在一个对象类型的索引签名上会隐式调用 <code v-pre>toString</code> 方法，而在 TypeScript 中，为防止初学者砸伤自己的脚（我总是看到 stackoverflow 上有很多 JavaScript 使用者都会这样。），它将会抛出一个错误。</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">'Hello'</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> foo<span class="token operator">:</span> <span class="token builtin">any</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// ERROR: 索引签名必须为 string, number....</span>
foo<span class="token punctuation">[</span>obj<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">'World'</span><span class="token punctuation">;</span>

<span class="token comment">// FIX: TypeScript 强制你必须明确这么做：</span>
foo<span class="token punctuation">[</span>obj<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">'World'</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>强制用户必须明确的写出 <code v-pre>toString()</code> 的原因是：在对象上默认执行的 <code v-pre>toString</code> 方法是有害的。例如 v8 引擎上总是会返回 <code v-pre>[object Object]</code></p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span> message<span class="token operator">:</span> <span class="token string">'Hello'</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> foo<span class="token operator">:</span> <span class="token builtin">any</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// ERROR: 索引签名必须为 string, number....</span>
foo<span class="token punctuation">[</span>obj<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">'World'</span><span class="token punctuation">;</span>

<span class="token comment">// 这里实际上就是你存储的地方</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>foo<span class="token punctuation">[</span><span class="token string">'[object Object]'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// World</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当然，数字类型是被允许的，这是因为：</p>
<ul>
<li>需要对数组 / 元组完美的支持；</li>
<li>即使你在上例中使用 <code v-pre>number</code> 类型的值来替代 <code v-pre>obj</code>，<code v-pre>number</code> 类型默认的 <code v-pre>toString</code> 方法实现的很友好（不是 <code v-pre>[object Object]</code>）。</li>
</ul>
<p>如下所示：</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 1</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>因此，我们有以下结论：</p>
<p>TIP</p>
<p>TypeScript 的索引签名必须是 <code v-pre>string</code> 或者 <code v-pre>number</code>。</p>
<p><code v-pre>symbols</code> 也是有效的，TypeScript 支持它。在接下来我们将会讲解它。</p>
<h2 id="声明一个索引签名" tabindex="-1"><a class="header-anchor" href="#声明一个索引签名" aria-hidden="true">#</a> 声明一个索引签名</h2>
<p>在上文中，我们通过使用 <code v-pre>any</code> 来让 TypeScript 允许我们可以做任意我们想做的事情。实际上，我们可以明确的指定索引签名。例如：假设你想确认存储在对象中任何内容都符合 <code v-pre>{ message: string }</code> 的结构，你可以通过 <code v-pre>[index: string]: { message: string }</code> 来实现。</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">const</span> foo<span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token punctuation">[</span>index<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token punctuation">{</span> message<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 储存的东西必须符合结构</span>
<span class="token comment">// ok</span>
foo<span class="token punctuation">[</span><span class="token string">'a'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span> message<span class="token operator">:</span> <span class="token string">'some message'</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// Error, 必须包含 `message`</span>
foo<span class="token punctuation">[</span><span class="token string">'a'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span> messages<span class="token operator">:</span> <span class="token string">'some message'</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 读取时，也会有类型检查</span>
<span class="token comment">// ok</span>
foo<span class="token punctuation">[</span><span class="token string">'a'</span><span class="token punctuation">]</span><span class="token punctuation">.</span>message<span class="token punctuation">;</span>

<span class="token comment">// Error: messages 不存在</span>
foo<span class="token punctuation">[</span><span class="token string">'a'</span><span class="token punctuation">]</span><span class="token punctuation">.</span>messages<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>TIP</p>
<p>索引签名的名称（如：<code v-pre>{ [index: string]: { message: string } }</code> 里的 <code v-pre>index</code> ）除了可读性外，并没有任何意义。例如：如果有一个用户名，你可以使用 <code v-pre>{ username: string}: { message: string }</code>，这有利于下一个开发者理解你的代码。</p>
<p><code v-pre>number</code> 类型的索引也支持：<code v-pre>{ [count: number]: 'SomeOtherTypeYouWantToStoreEgRebate' }</code>。</p>
<h2 id="所有成员都必须符合字符串的索引签名" tabindex="-1"><a class="header-anchor" href="#所有成员都必须符合字符串的索引签名" aria-hidden="true">#</a> 所有成员都必须符合字符串的索引签名</h2>
<p>当你声明一个索引签名时，所有明确的成员都必须符合索引签名：</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token comment">// ok</span>
<span class="token keyword">interface</span> <span class="token class-name">Foo</span> <span class="token punctuation">{</span>
  <span class="token punctuation">[</span>key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// Error</span>
<span class="token keyword">interface</span> <span class="token class-name">Bar</span> <span class="token punctuation">{</span>
  <span class="token punctuation">[</span>key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  y<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span> <span class="token comment">// Error: y 属性必须为 number 类型</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这可以给你提供安全性，任何以字符串的访问都能得到相同结果。</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Foo</span> <span class="token punctuation">{</span>
  <span class="token punctuation">[</span>key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> foo<span class="token operator">:</span> Foo <span class="token operator">=</span> <span class="token punctuation">{</span>
  x<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  y<span class="token operator">:</span> <span class="token number">2</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 直接</span>
foo<span class="token punctuation">[</span><span class="token string">'x'</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// number</span>

<span class="token comment">// 间接</span>
<span class="token keyword">const</span> x <span class="token operator">=</span> <span class="token string">'x'</span><span class="token punctuation">;</span>
foo<span class="token punctuation">[</span>x<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// number</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用一组有限的字符串字面量" tabindex="-1"><a class="header-anchor" href="#使用一组有限的字符串字面量" aria-hidden="true">#</a> 使用一组有限的字符串字面量</h2>
<p>一个索引签名可以通过映射类型来使索引字符串为联合类型中的一员，如下所示：</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Index</span> <span class="token operator">=</span> <span class="token string">'a'</span> <span class="token operator">|</span> <span class="token string">'b'</span> <span class="token operator">|</span> <span class="token string">'c'</span><span class="token punctuation">;</span>
<span class="token keyword">type</span> <span class="token class-name">FromIndex</span> <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token punctuation">[</span>k <span class="token keyword">in</span> Index<span class="token punctuation">]</span><span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> good<span class="token operator">:</span> FromIndex <span class="token operator">=</span> <span class="token punctuation">{</span> b<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> c<span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// Error:</span>
<span class="token comment">// `{ b: 1, c: 2, d: 3 }` 不能分配给 'FromIndex'</span>
<span class="token comment">// 对象字面量只能指定已知类型，'d' 不存在 'FromIndex' 类型上</span>
<span class="token keyword">const</span> bad<span class="token operator">:</span> FromIndex <span class="token operator">=</span> <span class="token punctuation">{</span> b<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> c<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> d<span class="token operator">:</span> <span class="token number">3</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这通常与 <code v-pre>keyof/typeof</code> 一起使用，来获取变量的类型，在下一章节中，我们将解释它。</p>
<p>变量的规则一般可以延迟被推断：</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">FromSomeIndex<span class="token operator">&lt;</span><span class="token constant">K</span> <span class="token keyword">extends</span> <span class="token builtin">string</span><span class="token operator">></span></span> <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token punctuation">[</span>key <span class="token keyword">in</span> <span class="token constant">K</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="同时拥有-string-和-number-类型的索引签名" tabindex="-1"><a class="header-anchor" href="#同时拥有-string-和-number-类型的索引签名" aria-hidden="true">#</a> 同时拥有 <code v-pre>string</code> 和 <code v-pre>number</code> 类型的索引签名</h2>
<p>这并不是一个常见的用例，但是 TypeScript 支持它。</p>
<p><code v-pre>string</code> 类型的索引签名比 <code v-pre>number</code> 类型的索引签名更严格。这是故意设计，它允许你有如下类型：</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">ArrStr</span> <span class="token punctuation">{</span>
  <span class="token punctuation">[</span>key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span><span class="token punctuation">;</span> <span class="token comment">// 必须包括所用成员类型</span>
  <span class="token punctuation">[</span>index<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span> <span class="token comment">// 字符串索引类型的子级</span>

  <span class="token comment">// example</span>
  length<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="设计模式-索引签名的嵌套" tabindex="-1"><a class="header-anchor" href="#设计模式-索引签名的嵌套" aria-hidden="true">#</a> 设计模式：索引签名的嵌套</h2>
<p>TIP</p>
<p>添加索引签名时，需要考虑的 API。</p>
<p>在 JavaScript 社区你将会见到很多滥用索引签名的 API。如 JavaScript 库中使用 CSS 的常见模式：</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">NestedCSS</span> <span class="token punctuation">{</span>
  color<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span> <span class="token comment">// strictNullChecks=false 时索引签名可为 undefined</span>
  <span class="token punctuation">[</span>selector<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> NestedCSS<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> example<span class="token operator">:</span> NestedCSS <span class="token operator">=</span> <span class="token punctuation">{</span>
  color<span class="token operator">:</span> <span class="token string">'red'</span><span class="token punctuation">,</span>
  <span class="token string-property property">'.subclass'</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    color<span class="token operator">:</span> <span class="token string">'blue'</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>尽量不要使用这种把字符串索引签名与有效变量混合使用。如果属性名称中有拼写错误，这个错误不会被捕获到：</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">const</span> failsSilently<span class="token operator">:</span> NestedCSS <span class="token operator">=</span> <span class="token punctuation">{</span>
  colour<span class="token operator">:</span> <span class="token string">'red'</span> <span class="token comment">// 'colour' 不会被捕捉到错误</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>取而代之，我们把索引签名分离到自己的属性里，如命名为 <code v-pre>nest</code>（或者 <code v-pre>children</code>、<code v-pre>subnodes</code> 等）：</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">NestedCSS</span> <span class="token punctuation">{</span>
  color<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  nest<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token punctuation">[</span>selector<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> NestedCSS<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> example<span class="token operator">:</span> NestedCSS <span class="token operator">=</span> <span class="token punctuation">{</span>
  color<span class="token operator">:</span> <span class="token string">'red'</span><span class="token punctuation">,</span>
  nest<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">'.subclass'</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      color<span class="token operator">:</span> <span class="token string">'blue'</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> failsSliently<span class="token operator">:</span> NestedCSS <span class="token operator">=</span> <span class="token punctuation">{</span>
  colour<span class="token operator">:</span> <span class="token string">'red'</span>  <span class="token comment">// TS Error: 未知属性 'colour'</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="索引签名中排除某些属性" tabindex="-1"><a class="header-anchor" href="#索引签名中排除某些属性" aria-hidden="true">#</a> 索引签名中排除某些属性</h2>
<p>有时，你需要把属性合并至索引签名（虽然我们并不建议这么做，你应该使用上文中提到的嵌套索引签名的形式），如下例子：</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">FieldState</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  value<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">type</span> <span class="token class-name">FromState</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  isValid<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span> <span class="token comment">// Error: 不符合索引签名</span>
  <span class="token punctuation">[</span>filedName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> FieldState<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>TypeScript 会报错，因为添加的索引签名，并不兼容它原有的类型，使用交叉类型可以解决上述问题：</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">FieldState</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  value<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">type</span> <span class="token class-name">FormState</span> <span class="token operator">=</span> <span class="token punctuation">{</span> isValid<span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token punctuation">}</span> <span class="token operator">&amp;</span> <span class="token punctuation">{</span> <span class="token punctuation">[</span>fieldName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> FieldState <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>请注意尽管你可以声明它至一个已存在的 TypeScript 类型上，但是你不能创建如下的对象：</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">FieldState</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  value<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">type</span> <span class="token class-name">FormState</span> <span class="token operator">=</span> <span class="token punctuation">{</span> isValid<span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token punctuation">}</span> <span class="token operator">&amp;</span> <span class="token punctuation">{</span> <span class="token punctuation">[</span>fieldName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> FieldState <span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 将它用于从某些地方获取的 JavaScript 对象</span>
<span class="token keyword">declare</span> <span class="token keyword">const</span> foo<span class="token operator">:</span> FormState<span class="token punctuation">;</span>

<span class="token keyword">const</span> isValidBool <span class="token operator">=</span> foo<span class="token punctuation">.</span>isValid<span class="token punctuation">;</span>
<span class="token keyword">const</span> somethingFieldState <span class="token operator">=</span> foo<span class="token punctuation">[</span><span class="token string">'something'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// 使用它来创建一个对象时，将不会工作</span>
<span class="token keyword">const</span> bar<span class="token operator">:</span> FormState <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// 'isValid' 不能赋值给 'FieldState'</span>
  isValid<span class="token operator">:</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>原文转自<a href="https://jkchao.github.io/typescript-book-chinese/typings/indexSignatures.html#%E7%B4%A2%E5%BC%95%E7%AD%BE%E5%90%8D%E4%B8%AD%E6%8E%92%E9%99%A4%E6%9F%90%E4%BA%9B%E5%B1%9E%E6%80%A7" target="_blank" rel="noopener noreferrer">深入理解TypeScript<ExternalLinkIcon/></a></p>
</div></template>


