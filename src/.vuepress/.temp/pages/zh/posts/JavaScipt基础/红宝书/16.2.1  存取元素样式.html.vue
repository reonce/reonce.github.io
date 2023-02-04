<template><div><h1 id="_16-2-1-存取元素样式" tabindex="-1"><a class="header-anchor" href="#_16-2-1-存取元素样式" aria-hidden="true">#</a> 16.2.1  存取元素样式</h1>
<p>CSS 属性名是使用连字符表示的，例如 <code v-pre>backgroud-color</code>，所以在 JS 中必须转换成驼峰大小写形式， 例如 <code v-pre>backgroundColor</code></p>
<p>大多数都会像上面一样转换过来。但是 <code v-pre>float</code> 不行，它是 JS 的保留关键字，需要用 <code v-pre>cssFloat</code> 来表示</p>
<p>通过 JS 设置样式的时候，使用小驼峰形式的属性名就可以直接设置了，例如：</p>
<div class="language-js' line-numbers-mode" data-ext="js'"><pre v-pre class="language-js'"><code>div.style.backgroundColor = 'red'
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote>
<p>在标准模式下，设置宽高度必须指定为  '20px' 而在混杂模式可以直接设置为 '20'</p>
</blockquote>
<p>Css 的 style 属性也可以用来读，获取相应的值</p>
<h2 id="dom-样式属性和方法" tabindex="-1"><a class="header-anchor" href="#dom-样式属性和方法" aria-hidden="true">#</a> DOM 样式属性和方法</h2>
<p>DOM2 style 规定了一些属性和方法。</p>
<h3 id="csstext" tabindex="-1"><a class="header-anchor" href="#csstext" aria-hidden="true">#</a> cssText</h3>
<p>cssText 属性可以存写样式的 CSS 代码。</p>
<ul>
<li>当用来读时，cssText 返回 style 属性 CSS 代码在浏览器内部的表示</li>
<li>在用来写时，cssText 赋值会重写 整个 style 属性的值，之前的值都会丢失</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>dom<span class="token punctuation">.</span>style<span class="token punctuation">.</span>cssText
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote>
<p>设置 cssText 是一次性修改元素多个样式最快捷的方式，因为所有的变化都会同时生效</p>
</blockquote>
<h3 id="item" tabindex="-1"><a class="header-anchor" href="#item" aria-hidden="true">#</a> item()</h3>
<p>使用中括号或者 item(index) 方法都会返回对应索引位置的 CSS 属性名（是连字符格式的，例如'background-color'）</p>
<h3 id="getproperyvalue" tabindex="-1"><a class="header-anchor" href="#getproperyvalue" aria-hidden="true">#</a> getProperyValue()</h3>
<p>根据连字符格式的 CSS属性名，返回 CSS 属性的值（字符串格式)。 例如：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>dom<span class="token punctuation">.</span>style<span class="token punctuation">.</span><span class="token function">getProperyValue</span><span class="token punctuation">(</span><span class="token string">'background-color'</span><span class="token punctuation">)</span>   <span class="token comment">// 'red'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>获取更详细的信息，可以用 <code v-pre>getCssProperyValue()</code> 方法，用法相同，返回 cssText 和 cssValueType, 前者与 getProperyValue() 值一样，后者表示值的类型（1 原始值， 2 列表， 3 自定义值）</p>
<h3 id="removeproperyvalue" tabindex="-1"><a class="header-anchor" href="#removeproperyvalue" aria-hidden="true">#</a> removeProperyValue()</h3>
<p>移除元素的某个属性值，之后元素会应用它原来的默认值（继承来的）</p>
<h2 id="计算样式-getcomputedstyle" tabindex="-1"><a class="header-anchor" href="#计算样式-getcomputedstyle" aria-hidden="true">#</a> 计算样式 getComputedStyle()</h2>
<p><code v-pre>getComputedStyle()</code> 会返回元素的计算样式（我理解是最终呈现的样式），接收两个参数： 要获取的元素对象和伪元素字符串（&quot;:after&quot;)  如果不需要查询伪元素，第二个参数传 null</p>
<p>例如一个元素既有行内样式，又有样式表中的样式，则会根据 CSS 优先级处理之后，呈现最终的， 这个方法就可以返回最终的属性。</p>
<p>所有浏览器的计算样式都是只读的，不能修改 <code v-pre>getComputedStyle()</code> 返回的对象</p>
</div></template>


