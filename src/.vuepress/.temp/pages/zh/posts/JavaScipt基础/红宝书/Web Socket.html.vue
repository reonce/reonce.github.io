<template><div><h1 id="web-socket" tabindex="-1"><a class="header-anchor" href="#web-socket" aria-hidden="true">#</a> Web Socket</h1>
<p>​	Web Socket目标是通过一个长时连接实现与服务器全双工、双向的通信。</p>
<p>在JS创建它的时候，一个HTTP请求会发送到服务器以初始化连接。</p>
<h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> socket <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">WebSocket</span><span class="token punctuation">(</span><span class="token string">"ws://www.example.com/server.php"</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>​	注意，必须给WebSocket构造函数传入一个绝对URL，同源策略不适用于Web Socke，因此可以打开到任意站点的连接。至于是否进行页面通信，则完全取决于服务器。</p>
<p>​	浏览器会在初始化WebSocket对象之后立即创建连接。与XHR类似，webSocket也有一个<code v-pre>readyState</code>属性表示当前状态。但是值和XHR值得不一样。</p>
<ul>
<li>
<p>webSocket.OPENING(0): 连接正在建立。以下用“~”代替webSocket。</p>
</li>
<li>
<p>~.OPEN(1)： 连接已经建立。</p>
</li>
<li>
<p>~.CLOSING(2)：连接正在关闭。</p>
</li>
<li>
<p>~.CLOSE(3):连接已经关闭。</p>
<p>它没有readystatechange事件。</p>
<p>readyState都是从0开始的，并且任何时候都可以调用close()方法关闭WebSocket连接：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>socket<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>调用close()之后，readyState立即变为2（连接正在关闭），并会在关闭后变为3（连接已关闭）</p>
</li>
</ul>
<h3 id="发送和接受数据" tabindex="-1"><a class="header-anchor" href="#发送和接受数据" aria-hidden="true">#</a> 发送和接受数据</h3>
<p>​	服务器向客户端发消息时，WebSocket对象上会触发message事件。这个事件和其他消息协议类似，可以通过event.data属性访问到有效载荷：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> socket <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">WebSocket</span><span class="token punctuation">(</span><span class="token string">"ws://www.example.com/server.php"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> stringData <span class="token operator">=</span> <span class="token string">"Hello world!"</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> blobData <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Blob</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'f'</span><span class="token punctuation">,</span> <span class="token string">'o'</span><span class="token punctuation">,</span> <span class="token string">'o'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 发送数据</span>
socket<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>stringData<span class="token punctuation">)</span><span class="token punctuation">;</span>
socket<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>blobData<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 接收</span>
socket<span class="token punctuation">.</span><span class="token function-variable function">onmessage</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> data <span class="token operator">=</span> event<span class="token punctuation">.</span>data<span class="token punctuation">;</span>
  <span class="token comment">// 对数据做某些操作</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​	与通过send()方法发送的数据类似，event.data返回的数据也可能是ArrayBuffer或Blob。这由WebSocket对象的binaryType属性决定，该属性可能是”blob“或”arraybuffer“。</p>
<h2 id="其他事件" tabindex="-1"><a class="header-anchor" href="#其他事件" aria-hidden="true">#</a> 其他事件</h2>
<p>open、error、close，分别在连接成功、发生错误、连接关闭时触发。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> socket <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">WebSocket</span><span class="token punctuation">(</span><span class="token string">"ws://www.example.com/server.php"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
socket<span class="token punctuation">.</span><span class="token function-variable function">onopen</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token operator">...</span>
<span class="token punctuation">}</span>
socket<span class="token punctuation">.</span><span class="token function-variable function">error</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token operator">...</span>
<span class="token punctuation">}</span>
socket<span class="token punctuation">.</span><span class="token function-variable function">close</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token operator">...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


