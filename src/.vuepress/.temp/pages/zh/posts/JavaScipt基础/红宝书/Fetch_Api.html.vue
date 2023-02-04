<template><div><h1 id="fetch-api" tabindex="-1"><a class="header-anchor" href="#fetch-api" aria-hidden="true">#</a> Fetch Api</h1>
<p>​	Fetch API能够执行XMLHttpRequest对象的所有任务，但更容易使用，接口也更现代化。</p>
<h2 id="基本用法" tabindex="-1"><a class="header-anchor" href="#基本用法" aria-hidden="true">#</a> 基本用法</h2>
<p><code v-pre>fetch()</code>方法是暴露在全局作用域的。</p>
<h4 id="一-分派请求" tabindex="-1"><a class="header-anchor" href="#一-分派请求" aria-hidden="true">#</a> 一.<strong>分派请求</strong></h4>
<p>​	<code v-pre>fetch()</code>只有一个必须的参数input。多数情况下，这个参数是要获取资源的URL。这个方法返回一个Promise对象：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> r <span class="token operator">=</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">'/bar'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>r<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Promise &lt;pending></span>
r<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">response</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>status<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 200</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>URL的格式与XHR对象的一样。</p>
<p>通常状态码为200就会被认为成功了，其他情况可以被认为未成功。为了区分这种情况，可以在状态码非200~299时检查Response对象的ok属性：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">'/bar'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">response</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>status<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 200</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>ok<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="二-自定义选项" tabindex="-1"><a class="header-anchor" href="#二-自定义选项" aria-hidden="true">#</a> 二.<strong>自定义选项</strong></h4>
<p><strong>body</strong>，请求体内容，必须是Blob、Buffer Source、Form Data、URLSearchParams、ReadableStream或String的实例</p>
<p><strong>cache</strong>，用于控制浏览器与HTTP缓存的交互。请求的redirect属性值必须是“follow”，具有以下几个值：</p>
<ol>
<li>Default 默认的
<ul>
<li>fetch()返回命中的有效缓存。不发送请求</li>
<li>命中无效（stale）缓存会发送条件式请求。如果响应已改变，则更新缓存的值。然后fetch()返回缓存的值。</li>
<li>未命中缓存会发送请求，并缓存响应。然后fetch（）返回响应。</li>
</ul>
</li>
<li>no-store，浏览器忽略缓存
<ul>
<li>浏览器不检查缓存，直接发送请求</li>
<li>不缓存响应，直接通过fetch()返回</li>
</ul>
</li>
<li>reload，浏览器始终正常发送请求，但是会更新缓存
<ul>
<li>浏览器不检查缓存，直接发送请求</li>
<li>缓存响应，再通过fetch()返回</li>
</ul>
</li>
<li>no-cache，存在误导，作用是不论缓存是新鲜还是腐败的，都要请求去校验，再提供响应。
<ul>
<li>无论命中有效/无效缓存都会发条件式请求。如果响应已改变，则更新缓存的值。然后fetch()返回缓存的值。</li>
<li>未命中缓存会发送请求，并缓存响应，然后fetch（）返回响应。</li>
</ul>
</li>
<li>force-cache，暴力缓存，有就用，不管新旧。
<ul>
<li>无论命中缓存是有效/无效的，都通过fetch()返回，不发送请求。</li>
<li>未命中缓存会发送请求，并缓存响应，然后fetch（）返回响应。</li>
</ul>
</li>
</ol>
<p><strong>redirect</strong>, 用于指定如何处理重定向响应（301、302、303、307或308）</p>
<ol>
<li>默认值 follow, 跟踪重定向请求，以最终非重定向URL的响应作为最终响应</li>
<li>error：重定向请求会抛出错误</li>
<li>manual：不跟踪重定向请求，而是返回opaqueredirect类型的响应，同时依然暴露期望的重定向URL。允许手动方式跟踪重定向</li>
</ol>
<p><strong>referrer</strong>，用于指定HTTP的Referer头部的内容，必须时以下字符串值之一：</p>
<ol>
<li>no-referrer: 以no-referrer作为值</li>
<li>client/about:client:以当前URL或no-referrer(取决于来源策略referrerPolicy)作为值</li>
<li>
<URL>:以伪造URL作为值。伪造URL的源必须与执行脚本的源匹配
</li>
</ol>
<h4 id="三、常见的fetch请求模式" tabindex="-1"><a class="header-anchor" href="#三、常见的fetch请求模式" aria-hidden="true">#</a> 三、常见的Fetch请求模式</h4>
<p>与XMLHttpRequest一样，fetch()既可以发送数据也可以接受数据。使用init对象参数，可以配置fetch（）在请求体中发送各种序列化的数据。</p>
<ol>
<li>
<h5 id="发送json数据" tabindex="-1"><a class="header-anchor" href="#发送json数据" aria-hidden="true">#</a> 发送JSON数据</h5>
<p>可以像下面这样发送简单JSON字符串：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> payload <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token string">'bar'</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> jsonHeaders <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Headers</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token string-property property">'Content-Type'</span><span class="token operator">:</span> <span class="token string">'application/json'</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">'send-me-json'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">'POST'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">body</span><span class="token operator">:</span> payload<span class="token punctuation">,</span>
  <span class="token literal-property property">headers</span><span class="token operator">:</span>jsonHeaders
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<h5 id="在请求体中发送参数" tabindex="-1"><a class="header-anchor" href="#在请求体中发送参数" aria-hidden="true">#</a> 在请求体中发送参数</h5>
<p>因为请求体支持任意字符串值，所以可以通过它发送请求参数：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> payload <span class="token operator">=</span> <span class="token string">'foo=bar&amp;baz=qux'</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> paramHeaders <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Headers</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token string-property property">'Content-Type'</span><span class="token operator">:</span> <span class="token string">'application/x-www-form-urlencoded; charset=UTF-8'</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">'send-me-json'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">'POST'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">body</span><span class="token operator">:</span> payload<span class="token punctuation">,</span>
  <span class="token literal-property property">headers</span><span class="token operator">:</span>paramHeaders
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<h5 id="发送文件" tabindex="-1"><a class="header-anchor" href="#发送文件" aria-hidden="true">#</a> 发送文件</h5>
<p>因为请求体支持FormData实现，所以fetch（）也可以序列化并发送文件字段中的文件：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> imageFormData <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FormData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> imageInput <span class="token operator">=</span> docment<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">"input[type='file']"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

imageFormData<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">'image'</span><span class="token punctuation">,</span> imageInput<span class="token punctuation">.</span>files<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">'/img-upload'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">'POST'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">body</span><span class="token operator">:</span> imageFormData
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// 这个fetch()实现可以支持多个文件：</span>
<span class="token keyword">let</span> imageFormData <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FormData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> imageInput <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">"input[type='file'][multiple]"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> imageInput<span class="token punctuation">.</span>files<span class="token punctuation">.</span>length<span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  imageFormData<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">'image'</span><span class="token punctuation">,</span> imageInput<span class="token punctuation">.</span>files<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<h5 id="加载blob文件" tabindex="-1"><a class="header-anchor" href="#加载blob文件" aria-hidden="true">#</a> 加载Blob文件</h5>
<p>FetchAPI也能提供Blob类型的响应，而Blob又可以兼容多种浏览器API。一种常见的做法是将突破文件加载到内存，然后将其添加到HTML图片元素。为此，可以使用响应对象上暴露的blob()方法。这个方法返回一个promise对象，解决为一个Blob的实例。然后将这个实例传给URL.createObjectUrl()以生成可以添加给图片元素src属性的值：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> imageElement <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'img'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">'my-image.png'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  res<span class="token punctuation">.</span><span class="token function">blob</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">blob</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  imageElement<span class="token punctuation">.</span>src <span class="token operator">=</span> <span class="token constant">URL</span><span class="token punctuation">.</span><span class="token function">createObjectURL</span><span class="token punctuation">(</span>blob<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<h5 id="发送跨源请求" tabindex="-1"><a class="header-anchor" href="#发送跨源请求" aria-hidden="true">#</a> 发送跨源请求</h5>
<p>从不同的源请求资源，响应要包含CORS头部才能保证浏览器收到响应。没有这些头部，跨源请求会失败并抛出错误。</p>
<p>设置 <code v-pre>access-control-allow-origin</code>允许跨域请求的地址。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 其他的一些</span>
Access<span class="token operator">-</span>Control<span class="token operator">-</span>Allow<span class="token operator">-</span>Methods<span class="token operator">:</span><span class="token constant">POST</span><span class="token punctuation">,</span><span class="token constant">GET</span>
Access<span class="token operator">-</span>Control<span class="token operator">-</span>Allow<span class="token operator">-</span>Credentials<span class="token operator">:</span><span class="token boolean">true</span>
Access<span class="token operator">-</span>Control<span class="token operator">-</span>Allow<span class="token operator">-</span>Headers<span class="token operator">:</span>Origin<span class="token punctuation">,</span>Content<span class="token operator">-</span>Type<span class="token punctuation">,</span>Accept<span class="token punctuation">,</span>token<span class="token punctuation">,</span><span class="token constant">X</span><span class="token operator">-</span>Requested<span class="token operator">-</span>With
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 不加配置</span>
<span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">'//cross-origin.com'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// TypeError: Failed to fetch</span>
<span class="token comment">// No 'Access-Control-Allow-Origin' header is present on the requested resource.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<h5 id="中断请求" tabindex="-1"><a class="header-anchor" href="#中断请求" aria-hidden="true">#</a> 中断请求</h5>
<p>FetchAPi请求通过<code v-pre>AbortController/AbortSignal</code>对中断请求。调用AbortController.abort()会终端所有网络传输。终端进行中的fetch（）请求会导致包含错误的拒绝。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> abortController <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AbortController</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">'wikipedia.zip'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">signal</span><span class="token operator">:</span> abortController<span class="token punctuation">.</span>signal
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'abortes!'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 10毫秒后中断请求</span>
<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  abortController<span class="token punctuation">.</span><span class="token function">abort</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
</div></template>


