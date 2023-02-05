<template><div><h1 id="性能优化" tabindex="-1"><a class="header-anchor" href="#性能优化" aria-hidden="true">#</a> 性能优化</h1>
<h2 id="性能优化的目的" tabindex="-1"><a class="header-anchor" href="#性能优化的目的" aria-hidden="true">#</a> 性能优化的目的</h2>
<ol>
<li>首屏时间</li>
<li>首屏可交互时间</li>
<li>首次有意义内容渲染时间</li>
</ol>
<p>性能检测： <code v-pre>https://developers.google.com/speed/pagespeed/insights</code></p>
<p>polyfill: <code v-pre>https://polyfill.io/v3/url-builder</code></p>
<h2 id="优化方法" tabindex="-1"><a class="header-anchor" href="#优化方法" aria-hidden="true">#</a> 优化方法</h2>
<h3 id="只请求当前需要的资源" tabindex="-1"><a class="header-anchor" href="#只请求当前需要的资源" aria-hidden="true">#</a> 只请求当前需要的资源</h3>
<ul>
<li>懒加载</li>
<li>异步加载</li>
<li><a href="https://www.notion.so/polyfill-04d4d93743e94a8aa388c01a71e935da" target="_blank" rel="noopener noreferrer">polyfill<ExternalLinkIcon/></a></li>
</ul>
<h3 id="缩减资源体积" tabindex="-1"><a class="header-anchor" href="#缩减资源体积" aria-hidden="true">#</a> 缩减资源体积</h3>
<ul>
<li>打包压缩，webpack4版本已经内置</li>
<li>gzip，一种压缩算法，一般默认开启</li>
<li>图片格式的优化，压缩 <a href="http://tinypng.com" target="_blank" rel="noopener noreferrer">tinypng.com<ExternalLinkIcon/></a>,根据屏幕分辨率展示不同分辨率的图片，webp(可以使图片在无损的情况下进行压缩，需要判断浏览器是否支持webp）</li>
<li>尽量控制cookie的大小，每一个request header都要携带cookie，同域名请求都会带上所有的cookie，耗费多余的体积。</li>
</ul>
<h3 id="时序优化" tabindex="-1"><a class="header-anchor" href="#时序优化" aria-hidden="true">#</a> 时序优化</h3>
<p>通过一些代码能力影响资源的加载。</p>
<ul>
<li><code v-pre>promise.all</code> 并行执行promise，并发发请求</li>
<li><code v-pre>ssr</code> 把打包放到服务端，好处是可以做缓存，更新更新的地方，并且seo友好</li>
<li><code v-pre>prefetch, prerender, preload</code></li>
</ul>
<div class="language-jsx line-numbers-mode" data-ext="jsx"><pre v-pre class="language-jsx"><code><span class="token comment">// 碰到这行代码后会立即请求dns解析，也就是预解析</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dns-prefetch<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>xxx.com<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token comment">// 预建立网络连接，包括dns解析，TLS协商，TCP握手</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>preconnect<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>xxx.com<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token comment">//预加载</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>preload<span class="token punctuation">"</span></span> <span class="token attr-name">as</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>image<span class="token punctuation">'</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>xxx.com/p.png<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="合理的利用缓存" tabindex="-1"><a class="header-anchor" href="#合理的利用缓存" aria-hidden="true">#</a> 合理的利用缓存</h3>
<p>cdn、cdn预热、cdn刷新。</p>
<p>cnd域名和业务域名通常是不一样的，为了避免cookie影响，增加请求消耗。</p>
<h2 id="如果一段js执行时间非常长-怎么去分析" tabindex="-1"><a class="header-anchor" href="#如果一段js执行时间非常长-怎么去分析" aria-hidden="true">#</a> 如果一段js执行时间非常长，怎么去分析</h2>
<div class="language-tsx line-numbers-mode" data-ext="tsx"><pre v-pre class="language-tsx"><code><span class="token comment">// 封装一个计时的装饰器函数</span>
<span class="token keyword">function</span> <span class="token function">measure</span><span class="token punctuation">(</span>fn<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">time</span><span class="token punctuation">(</span>fn<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> ret <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> arguments<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">timeEnd</span><span class="token punctuation">(</span>fn<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> ret<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token function-variable function">fn</span> <span class="token operator">=</span> <span class="token punctuation">(</span>name<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token builtin">Promise</span></span><span class="token punctuation">(</span><span class="token punctuation">(</span>resolve<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token function">resolve</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token function">measure</span><span class="token punctuation">(</span>fn<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token string">"reonce"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="阿里云oss支持通过链接后面品参数来做图片的格式转换-尝试写一下-把任意图片格式转换为webp-需要注意什么" tabindex="-1"><a class="header-anchor" href="#阿里云oss支持通过链接后面品参数来做图片的格式转换-尝试写一下-把任意图片格式转换为webp-需要注意什么" aria-hidden="true">#</a> 阿里云oss支持通过链接后面品参数来做图片的格式转换，尝试写一下，把任意图片格式转换为webp，需要注意什么</h3>
<p>首先应该判断浏览器是否支持webp。canisuse.com可以看浏览器支持性。</p>
<p>封装一个判断方法：</p>
<div class="language-tsx line-numbers-mode" data-ext="tsx"><pre v-pre class="language-tsx"><code><span class="token keyword">function</span> <span class="token function">checkWebp</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      document
        <span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">"canvas"</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">toDataURL</span><span class="token punctuation">(</span><span class="token string">"image/webp"</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">"data:image/webp"</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token number">0</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// document.createElement("canvas").toDataURL("image/webp")转化如下</span>
<span class="token comment">// 'data:image/webp;base64,UklGRtgCAABXRUJQVlA4WAoAAAAwAAAAKwEAlQAASUNDUBgCAAAAAAIYAAAAAAQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANkFMUEgSAAAAAQcQEREQkCT+/x9F9D/tf0MAVlA4IIAAAABwDQCdASosAZYAPm02mUmkIyKhICgAgA2JaW7hdrEbQAnsA99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfasAAD+/9YAAAAAAAAAAA=='</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过创建一个 <code v-pre>canvas</code> 元素，将它转为base64格式的image/webp，如果浏览器支持，它的开头将带有 <code v-pre>data:image/webp</code> 的字符串。（如代码注释）。如果不存在或者报错，则返回false。</p>
<p>接下来看一下如何经过判断去拼接阿里oss：</p>
<div class="language-tsx line-numbers-mode" data-ext="tsx"><pre v-pre class="language-tsx"><code><span class="token keyword">const</span> supportWebp <span class="token operator">=</span> <span class="token function">checkWebp</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">getWebpImageUrl</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 不存在url，抛出异常</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>url<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">"url不能为空"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 如果url是base64格式，直接返回</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>url<span class="token punctuation">.</span><span class="token function">startsWith</span><span class="token punctuation">(</span><span class="token string">"data:"</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> url<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 如果浏览器不支持，直接返回</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>supportWebp<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> rul<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 拼接阿里oss, 假定为：x-oss-process=image/format,webp</span>
  <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>url<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">?x-oss-process=image/format,webp</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意一个点，以上是默认图片都在oss上的</p>
<h3 id="如果有巨量的图片需要展示-除了懒加载的方式-还有没有其他方法限制一下同时加载的图片数量" tabindex="-1"><a class="header-anchor" href="#如果有巨量的图片需要展示-除了懒加载的方式-还有没有其他方法限制一下同时加载的图片数量" aria-hidden="true">#</a> 如果有巨量的图片需要展示，除了懒加载的方式，还有没有其他方法限制一下同时加载的图片数量</h3>
<p>代码题，实现promise的并发控制，例如要求同时进行3个图片的加载，始终加载3个</p>
<blockquote>
<p>这里不能用for循环+promise.all的原因是，后者是执行完3个再去执行3个，不符。</p>
</blockquote>
<div class="language-tsx line-numbers-mode" data-ext="tsx"><pre v-pre class="language-tsx"><code><span class="token keyword">function</span> <span class="token function">limitLoad</span><span class="token punctuation">(</span>urls<span class="token punctuation">,</span> handler<span class="token punctuation">,</span> limit<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> sequence <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>urls<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> promises <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

  promises <span class="token operator">=</span> sequence<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> limit<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> index<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">handler</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token comment">// 当执行完之后，再填补一个，所有需要知道哪个执行完了</span>
      <span class="token keyword">return</span> index<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 通过竞速选出第一个执行完的</span>
  <span class="token comment">// 补充，出现执行完的之后，其他的还会执行，只是race函数只返回了最快的。</span>
  <span class="token keyword">let</span> p <span class="token operator">=</span> <span class="token builtin">Promise</span><span class="token punctuation">.</span><span class="token function">race</span><span class="token punctuation">(</span>promises<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> sequence<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 最终p会变成 p.then().then().then()... 它是通过链式调用的形式去不断的竞速和填充</span>
    p <span class="token operator">=</span> p<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      promises<span class="token punctuation">[</span>res<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">handler</span><span class="token punctuation">(</span>sequence<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> res<span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> <span class="token builtin">Promise</span><span class="token punctuation">.</span><span class="token function">race</span><span class="token punctuation">(</span>promises<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// 模拟url地址和加载时间</span>
<span class="token keyword">const</span> mockUrls <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    url<span class="token operator">:</span> <span class="token string">"地址1"</span><span class="token punctuation">,</span>
    time<span class="token operator">:</span> <span class="token number">2000</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    url<span class="token operator">:</span> <span class="token string">"地址2"</span><span class="token punctuation">,</span>
    time<span class="token operator">:</span> <span class="token number">2300</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    url<span class="token operator">:</span> <span class="token string">"地址3"</span><span class="token punctuation">,</span>
    time<span class="token operator">:</span> <span class="token number">4000</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    url<span class="token operator">:</span> <span class="token string">"地址4"</span><span class="token punctuation">,</span>
    time<span class="token operator">:</span> <span class="token number">3000</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    url<span class="token operator">:</span> <span class="token string">"地址5"</span><span class="token punctuation">,</span>
    time<span class="token operator">:</span> <span class="token number">2000</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    url<span class="token operator">:</span> <span class="token string">"地址6"</span><span class="token punctuation">,</span>
    time<span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// 设置要执行的任务</span>
<span class="token keyword">function</span> <span class="token function">loadImg</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token builtin">Promise</span></span><span class="token punctuation">(</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span> reject<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"-----"</span> <span class="token operator">+</span> url<span class="token punctuation">.</span>url <span class="token operator">+</span> <span class="token string">"start!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>url<span class="token punctuation">.</span>url <span class="token operator">+</span> <span class="token string">"---OK!!!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> url<span class="token punctuation">.</span>time<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">limitLoad</span><span class="token punctuation">(</span>mockUrls<span class="token punctuation">,</span> loadImg<span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><RouterLink to="/posts/%E6%80%A7%E8%83%BD%E4%BC%98%E5%8C%96/%E6%80%A7%E8%83%BD%E4%BC%98%E5%8C%96%201597fa1624e5461caa4759a288ccf0aa/%E8%AF%B7%E8%AF%B4%E5%87%BA%E4%B8%89%E7%A7%8D%E5%87%8F%E5%B0%91%E9%A1%B5%E9%9D%A2%E5%8A%A0%E8%BD%BD%E6%97%B6%E9%97%B4%E7%9A%84%E6%96%B9%E6%B3%95%E3%80%82%204f65bc03f263461bb0a38a4ef0dd8c48.html">请说出三种减少页面加载时间的方法。</RouterLink></p>
<p><RouterLink to="/posts/%E6%80%A7%E8%83%BD%E4%BC%98%E5%8C%96/%E6%80%A7%E8%83%BD%E4%BC%98%E5%8C%96%201597fa1624e5461caa4759a288ccf0aa/%E4%BD%A0%E5%A6%82%E4%BD%95%E5%AF%B9%E7%BD%91%E7%AB%99%E7%9A%84%E6%96%87%E4%BB%B6%E5%92%8C%E8%B5%84%E6%BA%90%E8%BF%9B%E8%A1%8C%E4%BC%98%E5%8C%96%E7%9A%84%202979065a206a4a3d8c82ff7b672cab0c.html">你如何对网站的文件和资源进行优化的</RouterLink></p>
</div></template>


