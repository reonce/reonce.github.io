<template><div><h1 id="_14-1-3-element-类型" tabindex="-1"><a class="header-anchor" href="#_14-1-3-element-类型" aria-hidden="true">#</a> 14.1.3 Element 类型</h1>
<h2 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h2>
<p>ELement 类型表示元素类型，暴露了访问元素标签名、子节点和属性的能力。</p>
<p>可以直接访问 nodeName 和 tagName 属性来获得元素标签名，这两个元素返回相同的值</p>
<p>div.tagName 实际返回的是大写的 “DIV” 所有进行比较的时候，最好都转换成小写去比较</p>
<h2 id="html-元素" tabindex="-1"><a class="header-anchor" href="#html-元素" aria-hidden="true">#</a> HTML 元素</h2>
<p>HTML 元素都通过 HTMLELEMENT 类型表示，包括直接实例和间接实例，并且继承了 ELement 并增加了一些属性。这些属性可以直接获取访问对应的值。详见 P415表格字典</p>
<h2 id="获取属性" tabindex="-1"><a class="header-anchor" href="#获取属性" aria-hidden="true">#</a> 获取属性</h2>
<h3 id="getattribute" tabindex="-1"><a class="header-anchor" href="#getattribute" aria-hidden="true">#</a> getAttribute()</h3>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>div<span class="token punctuation">.</span><span class="token function">getAttribute</span><span class="token punctuation">(</span><span class="token string">'id'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>接收一个传参，表示要属性的属性名（需要传标签上实际带的，例如calss），如果给定属性不存在，会返回 null 。</p>
<ul>
<li>
<p>这个方法可以访问到元素中的自定义属性，自定义属性建议前缀加 <code v-pre>data-</code>  表示这是自定义字段</p>
</li>
<li>
<p>传参不区分大小写</p>
</li>
</ul>
<p>通常直接访问和用此方法会返回相同的值。但是有两种类型的值例外：</p>
<ol>
<li>class属性。通过 <code v-pre>getAttribute()</code>  方法访问获取的是一个字符串（也就是类名)， 而直接访问元素的属性会返回一个 <code v-pre>CSSStyleDeclaration</code> 对象。</li>
<li>事件处理程序，例如 <code v-pre>onclick</code>   <code v-pre>getAttribute()</code> 方法获取到的是一个字符串形式的源代码，直接访问则是一个JS函数</li>
</ol>
<p>不难理解，其实 <code v-pre>getAttribute()</code> 相当于就是读元素标签里的属性，而直接访问通常会访问到实际执行的代码。</p>
<p>考虑到这两种差异，开发者通常会直接使用对象属性，这个方法一般用于获取自定义值</p>
<h3 id="setattribute" tabindex="-1"><a class="header-anchor" href="#setattribute" aria-hidden="true">#</a> setAttribute()</h3>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>div<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">'name'</span><span class="token punctuation">,</span> <span class="token string">'我是div'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>为元素设置一个属性，接收两个传参： 要设置的属性和要设置的值。</p>
<p>它可以设置自定义值，而在 Element 上直接设置自定义属性是无效的。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 无效</span>
div<span class="token punctuation">.</span>data<span class="token operator">-</span>name <span class="token operator">=</span> <span class="token string">'123'</span>
<span class="token comment">// 有效</span>
div<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">'data-name'</span><span class="token punctuation">,</span> <span class="token string">'123'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="removeattrubute" tabindex="-1"><a class="header-anchor" href="#removeattrubute" aria-hidden="true">#</a> removeAttrubute()</h3>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>div<span class="token punctuation">.</span><span class="token function">removeAttrubute</span><span class="token punctuation">(</span><span class="token string">'name'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>移除一个元素的属性，接收需要移除的属性， 会彻底移除属性，而不是仅仅删除值</p>
<h2 id="attributes属性-遍历元素的所有属性" tabindex="-1"><a class="header-anchor" href="#attributes属性-遍历元素的所有属性" aria-hidden="true">#</a> attributes属性-遍历元素的所有属性</h2>
<p>Element 属性是唯一拥有 attributes属性的 DOM 节点类型。</p>
<p>attributes 属性包含了一个叫做 <strong>NamedNodeMap</strong> 的”实时“集合，主要有下面四种方法：</p>
<ol>
<li>getNamedItem(name)</li>
<li>removeNamedItem(name)</li>
<li>setNamedItem(node)</li>
<li>item(pos)。 返回索引位置pos处的节点</li>
</ol>
<p>这个属性用的不多，比较实用的是<strong>遍历元素的所有属性</strong>的方法</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">outputAttributes</span> <span class="token punctuation">(</span><span class="token parameter">element</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> paris <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> len <span class="token operator">=</span> element<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> attribute <span class="token operator">=</span> element<span class="token punctuation">.</span>attributes<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
    paris<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>attribute<span class="token punctuation">.</span>nodeName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>attribute<span class="token punctuation">.</span>nodeValue<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> paris
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="创建元素" tabindex="-1"><a class="header-anchor" href="#创建元素" aria-hidden="true">#</a> 创建元素</h2>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'div'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>接收一个参数: 要创建元素的标签名，不区分大小写。会自动把 ownerDocument 设置为 document</p>
<h2 id="元素后代" tabindex="-1"><a class="header-anchor" href="#元素后代" aria-hidden="true">#</a> 元素后代</h2>
<p><code v-pre>childNodes</code> 属性包含元素所有子节点。如果要遍历某个元素的某种特定子节点，可以加一个 nodeType 的判断。</p>
<p>element 上使用 getElementByid 和在文档中是一样的，不过范围限制在了此元素中。</p>
</div></template>


