<template><div><h1 id="跨域详解" tabindex="-1"><a class="header-anchor" href="#跨域详解" aria-hidden="true">#</a> 跨域详解</h1>
<p>跨域问题是一道经典的题目了，本文将解读并用代码实现跨域的解决方案。</p>
<h2 id="什么是跨域" tabindex="-1"><a class="header-anchor" href="#什么是跨域" aria-hidden="true">#</a> 什么是跨域</h2>
<p>跨域是浏览器的一种安全策略（同源策略），它要求一个网址的请求必须有相同的域名、端口和协议，否则无法正常请求，形成“跨域”。</p>
<p>一个域名地址的组成：</p>
<ul>
<li>http://  ⇒ 协议</li>
<li>www. ⇒ 子域名</li>
<li><a href="http://abc.com" target="_blank" rel="noopener noreferrer">abc.com<ExternalLinkIcon/></a> ⇒主域名</li>
<li>: 8080 ⇒ 端口号</li>
<li>/script/jquery.js ⇒ 请求资源地址</li>
</ul>
<p>同源策略限制的内容有：</p>
<ul>
<li>Cookie、LocalStorage、IndexedDB等存储性内容</li>
<li>DOM节点</li>
<li>AJAX请求拦截</li>
</ul>
<p>有三个标签不受同源策略影响</p>
<ul>
<li><code v-pre>&lt;img src=”” alt=”” /&gt;</code></li>
<li><code v-pre>&lt;script src=”” /&gt;</code></li>
<li><code v-pre>&lt;link href=”” /&gt;</code></li>
</ul>
<p>其中利用 <code v-pre>script</code> 标签不受影响的漏洞，可以在这个标签里发情跨域请求，这种方式被称为JSONP请求。</p>
<h2 id="常见的跨域解决方案" tabindex="-1"><a class="header-anchor" href="#常见的跨域解决方案" aria-hidden="true">#</a> 常见的跨域解决方案</h2>
<h3 id="_1-jsonp" tabindex="-1"><a class="header-anchor" href="#_1-jsonp" aria-hidden="true">#</a> 1. JSONP</h3>
<p>上面有提到，jsonp是利用 <code v-pre>script</code> 标签不受同源策略影响，因此跨域利用这个漏洞进行请求。</p>
<p>先让我们看一个简单的请求方式：</p>
<div class="language-jsx line-numbers-mode" data-ext="jsx"><pre v-pre class="language-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://localhost:3000/api?text=123<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token script"><span class="token language-javascript">
<span class="token operator">&lt;</span>script<span class="token operator">></span>
	window<span class="token punctuation">.</span><span class="token function-variable function">test</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
		console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>相当的不通用，展现我们的高超技术给他封装成一个方法：</p>
<div class="language-jsx line-numbers-mode" data-ext="jsx"><pre v-pre class="language-jsx"><code><span class="token comment">// index.html</span>
<span class="token keyword">function</span> <span class="token function">jsonp</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> url<span class="token punctuation">,</span> params<span class="token punctuation">,</span> callback <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> script <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'script'</span><span class="token punctuation">)</span>
    window<span class="token punctuation">[</span>callback<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">resolve</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
      document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">removeChild</span><span class="token punctuation">(</span>script<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    params <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token operator">...</span>params<span class="token punctuation">,</span> callback <span class="token punctuation">}</span> <span class="token comment">// wd=b&amp;callback=show</span>
    <span class="token keyword">let</span> arrs <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> key <span class="token keyword">in</span> params<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      arrs<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>key<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>params<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    script<span class="token punctuation">.</span>src <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>url<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">?</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>arrs<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">'&amp;'</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span>
    document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>script<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token function">jsonp</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'http://localhost:3000/say'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">params</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">wd</span><span class="token operator">:</span> <span class="token string">'Iloveyou'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">callback</span><span class="token operator">:</span> <span class="token string">'show'</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">data</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面这段代码相当<code v-pre>http://localhost:3000/saywd=Iloveyou&amp;callback=show</code>
这个地址请求数据，然后后台返回<code v-pre>show('我爱你')</code>，最后会运行show()这个函数，打印出'我爱你'。</p>
<p>jQuery也对这种方式进行了封装，我们可以了解一下：</p>
<div class="language-jsx line-numbers-mode" data-ext="jsx"><pre v-pre class="language-jsx"><code>$<span class="token punctuation">.</span><span class="token function">ajax</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
<span class="token literal-property property">url</span><span class="token operator">:</span><span class="token string">"http://crossdomain.com/jsonServerResponse"</span><span class="token punctuation">,</span>
<span class="token literal-property property">dataType</span><span class="token operator">:</span><span class="token string">"jsonp"</span><span class="token punctuation">,</span>
<span class="token literal-property property">type</span><span class="token operator">:</span><span class="token string">"get"</span><span class="token punctuation">,</span><span class="token comment">//可以省略</span>
<span class="token literal-property property">jsonpCallback</span><span class="token operator">:</span><span class="token string">"show"</span><span class="token punctuation">,</span><span class="token comment">//->自定义传递给服务器的函数名，而不是使用jQuery自动生成的，可省略</span>
<span class="token literal-property property">jsonp</span><span class="token operator">:</span><span class="token string">"callback"</span><span class="token punctuation">,</span><span class="token comment">//->把传递函数名的那个形参callback，可省略</span>
<span class="token function-variable function">success</span><span class="token operator">:</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>那么我们聊一下为什么现在不推荐使用它了。</p>
<ul>
<li>请求局限性。它只能通过get请求的方式。</li>
<li>安全性。get请求的安全性较差，请求参数都在地址上，可能遭到XSS攻击。</li>
</ul>
<p>当然也有优势，它简单，并且兼容性无敌，IE随便用（笑</p>
<h3 id="_2-cors-跨域资源共享" tabindex="-1"><a class="header-anchor" href="#_2-cors-跨域资源共享" aria-hidden="true">#</a> 2.CORS（跨域资源共享）</h3>
<p>目前业界最通用的跨域解决方案，需要浏览器和后端同时支持。</p>
<p>浏览器只需要设置 <code v-pre>Access-Control-Allow-Origin</code> 就可以开启CORS，这个属性表示哪些域名可以访问资源，如果设置为通配符则表示所有网站都可以访问资源。</p>
<p>通过CORS进行跨域请求时，请求分为<strong>简单请Content-Type</strong></p>
<p><strong>1）简单请求</strong></p>
<ol>
<li>通过 GET/POST/HEAD请求方式的请求</li>
<li>Content-Type的值设置为 text/plain、multipart/form-data、application/x-www-form-urlencoded这三种之一时</li>
</ol>
<p><strong>2）复杂请求</strong></p>
<p>不符合以上条件的请求便是复杂请求。复杂请求的CORS请求之前，会增加一次HTTP查询请求，称为**预检请求，**该请求是option方法的，通过请求来指导服务的是否允许跨域请求。</p>
<p>例如我们用PUT向后台请求时，后台需要如下配置，以node举例：</p>
<div class="language-jsx line-numbers-mode" data-ext="jsx"><pre v-pre class="language-jsx"><code><span class="token comment">// 允许哪个方法访问我</span>
res<span class="token punctuation">.</span><span class="token function">setHeader</span><span class="token punctuation">(</span><span class="token string">'Access-Control-Allow-Methods'</span><span class="token punctuation">,</span> <span class="token string">'PUT'</span><span class="token punctuation">)</span>
<span class="token comment">// 预检的存活时间</span>
res<span class="token punctuation">.</span><span class="token function">setHeader</span><span class="token punctuation">(</span><span class="token string">'Access-Control-Max-Age'</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">)</span>
<span class="token comment">// OPTIONS请求不做任何处理</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>req<span class="token punctuation">.</span>method <span class="token operator">===</span> <span class="token string">'OPTIONS'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  res<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 
<span class="token punctuation">}</span>
<span class="token comment">// 定义后台返回的内容</span>
app<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">'/getData'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>req<span class="token punctuation">.</span>headers<span class="token punctuation">)</span>
  res<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token string">'我不爱你'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>主要是设置 <code v-pre>Access-Control-Allow-Methods</code> 字段，添加方法PUT</p>
<h3 id="_3-postmessage" tabindex="-1"><a class="header-anchor" href="#_3-postmessage" aria-hidden="true">#</a> 3.postMessage</h3>
<p>postMessage方法允许来自不同源的脚本采用异步方法进行有限的通信，可以实现跨文本、多窗口、跨域消息传递。</p>
<blockquote>
<p><code v-pre>otherWindow.postMessage(message, targetOrigin, [transfer]);</code></p>
</blockquote>
<p>用法介绍  [MDN] (<a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Window/postMessage" target="_blank" rel="noopener noreferrer">https://developer.mozilla.org/zh-CN/docs/Web/API/Window/postMessage<ExternalLinkIcon/></a>)</p>
<p>接下来我们看个例子： <code v-pre>http://localhost:3000/a.html</code>
页面向<code v-pre>http://localhost:4000/b.html</code>
传递“我爱你”,然后后者传回&quot;我不爱你&quot;。</p>
<div class="language-jsx line-numbers-mode" data-ext="jsx"><pre v-pre class="language-jsx"><code><span class="token comment">// a.html</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>iframe</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://localhost:4000/b.html<span class="token punctuation">"</span></span> <span class="token attr-name">frameborder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>frame<span class="token punctuation">"</span></span> <span class="token special-attr"><span class="token attr-name">onload</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value javascript language-javascript"><span class="token function">load</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>iframe</span><span class="token punctuation">></span></span> <span class="token comment">//等它加载完触发一个事件</span>
  <span class="token comment">//内嵌在http://localhost:3000/a.html</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token plain-text">
      function load() {
        let frame = document.getElementById('frame')
        frame.contentWindow.postMessage('我爱你', 'http://localhost:4000') //发送数据
        window.onmessage = function(e) { //接受返回数据
          console.log(e.data) //我不爱你
        }
      }
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre v-pre class="language-jsx"><code><span class="token comment">// b.html</span>
  window<span class="token punctuation">.</span><span class="token function-variable function">onmessage</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>data<span class="token punctuation">)</span> <span class="token comment">//我爱你</span>
    e<span class="token punctuation">.</span>source<span class="token punctuation">.</span><span class="token function">postMessage</span><span class="token punctuation">(</span><span class="token string">'我不爱你'</span><span class="token punctuation">,</span> e<span class="token punctuation">.</span>origin<span class="token punctuation">)</span>
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-websocket" tabindex="-1"><a class="header-anchor" href="#_4-websocket" aria-hidden="true">#</a> 4.<strong>websocket</strong></h3>
<p>Websocket是HTML5的一个持久化的协议，它实现了浏览器与服务器的全双工通信，同时也是跨域的一种解决方案。WebSocket和HTTP都是应用层协议，都基于 TCP 协议。但是 <strong>WebSocket 是一种双向通信协议，在建立连接之后，WebSocket 的 server 与 client 都能主动向对方发送或接收数据</strong>。同时，WebSocket 在建立连接时需要借助 HTTP 协议，连接建立好了之后 client 与 server 之间的双向通信就与 HTTP 无关了。</p>
<p>原生WebSocket API使用起来不太方便，我们使用<code v-pre>Socket.io</code>，它很好地封装了webSocket接口，提供了更简单、灵活的接口，也对不支持webSocket的浏览器提供了向下兼容。</p>
<p>我们先来看个例子：本地文件socket.html向<code v-pre>localhost:3000</code>发生数据和接受数据</p>
<div class="language-jsx line-numbers-mode" data-ext="jsx"><pre v-pre class="language-jsx"><code><span class="token comment">// socket.html</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token plain-text">
    let socket = new WebSocket('ws://localhost:3000');
    socket.onopen = function () {
      socket.send('我爱你');//向服务器发送数据
    }
    socket.onmessage = function (e) {
      console.log(e.data);//接收服务器返回的数据
    }
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre v-pre class="language-jsx"><code><span class="token comment">// server.js</span>
<span class="token keyword">let</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'express'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> WebSocket <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'ws'</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//记得安装ws</span>
<span class="token keyword">let</span> wss <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">WebSocket<span class="token punctuation">.</span>Server</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">port</span><span class="token operator">:</span><span class="token number">3000</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
wss<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">'connection'</span><span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">ws</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  ws<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">'message'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
    ws<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">'我不爱你'</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-node中间件代理-两次跨域" tabindex="-1"><a class="header-anchor" href="#_5-node中间件代理-两次跨域" aria-hidden="true">#</a> 5.Node中间件代理（两次跨域）</h3>
<p>原理：<strong>同源策略是浏览器需要遵循的标准，而如果是服务器向服务器请求就无需遵循同源策略</strong></p>
<p>代理服务器，需要做以下几个步骤：</p>
<ul>
<li>接受客户端请求 。</li>
<li>将请求 转发给服务器。</li>
<li>拿到服务器 响应 数据。</li>
<li>将 响应 转发给客户端。</li>
</ul>
<p>我们先来看个例子：本地文件index.html文件，通过代理服务器<code v-pre>http://localhost:3000</code>
向目标服务器<code v-pre>http://localhost:4000</code>
请求数据。</p>
<div class="language-jsx line-numbers-mode" data-ext="jsx"><pre v-pre class="language-jsx"><code><span class="token comment">// index.html(http://127.0.0.1:5500)</span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token plain-text">
      $.ajax({
        url: 'http://localhost:3000',
        type: 'post',
        data: { name: 'xiamen', password: '123456' },
        contentType: 'application/json;charset=utf-8',
        success: function(result) {
          console.log(result) // {"title":"fontend","password":"123456"}
        },
        error: function(msg) {
          console.log(msg)
        }
      })
     </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre v-pre class="language-jsx"><code><span class="token comment">// server1.js 代理服务器(http://localhost:3000)</span>
<span class="token keyword">const</span> http <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'http'</span><span class="token punctuation">)</span>
<span class="token comment">// 第一步：接受客户端请求</span>
<span class="token keyword">const</span> server <span class="token operator">=</span> http<span class="token punctuation">.</span><span class="token function">createServer</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">request<span class="token punctuation">,</span> response</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">// 代理服务器，直接和浏览器直接交互，需要设置CORS 的首部字段</span>
  response<span class="token punctuation">.</span><span class="token function">writeHead</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token string-property property">'Access-Control-Allow-Origin'</span><span class="token operator">:</span> <span class="token string">'*'</span><span class="token punctuation">,</span>
    <span class="token string-property property">'Access-Control-Allow-Methods'</span><span class="token operator">:</span> <span class="token string">'*'</span><span class="token punctuation">,</span>
    <span class="token string-property property">'Access-Control-Allow-Headers'</span><span class="token operator">:</span> <span class="token string">'Content-Type'</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token comment">// 第二步：将请求转发给服务器</span>
  <span class="token keyword">const</span> proxyRequest <span class="token operator">=</span> http
    <span class="token punctuation">.</span><span class="token function">request</span><span class="token punctuation">(</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">host</span><span class="token operator">:</span> <span class="token string">'127.0.0.1'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token number">4000</span><span class="token punctuation">,</span>
        <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'/'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">method</span><span class="token operator">:</span> request<span class="token punctuation">.</span>method<span class="token punctuation">,</span>
        <span class="token literal-property property">headers</span><span class="token operator">:</span> request<span class="token punctuation">.</span>headers
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token parameter">serverResponse</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token comment">// 第三步：收到服务器的响应</span>
        <span class="token keyword">var</span> body <span class="token operator">=</span> <span class="token string">''</span>
        serverResponse<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">'data'</span><span class="token punctuation">,</span> <span class="token parameter">chunk</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
          body <span class="token operator">+=</span> chunk
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
        serverResponse<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">'end'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
          console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'The data is '</span> <span class="token operator">+</span> body<span class="token punctuation">)</span>
          <span class="token comment">// 第四步：将响应结果转发给浏览器</span>
          response<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span>body<span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
server<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">3000</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'The proxyServer is running at http://localhost:3000'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre v-pre class="language-jsx"><code><span class="token comment">// server2.js(http://localhost:4000)</span>
<span class="token keyword">const</span> http <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'http'</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'fontend'</span><span class="token punctuation">,</span> <span class="token literal-property property">password</span><span class="token operator">:</span> <span class="token string">'123456'</span> <span class="token punctuation">}</span>
<span class="token keyword">const</span> server <span class="token operator">=</span> http<span class="token punctuation">.</span><span class="token function">createServer</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">request<span class="token punctuation">,</span> response</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>request<span class="token punctuation">.</span>url <span class="token operator">===</span> <span class="token string">'/'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    response<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
server<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">4000</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'The server is running at http://localhost:4000'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述代码经过两次跨域，值得注意的是浏览器向代理服务器发送请求，也遵循同源策略，最后在index.html文件打印出<code v-pre>{&quot;title&quot;:&quot;fontend&quot;,&quot;password&quot;:&quot;123456&quot;}</code></p>
<h3 id="_6-nginx反向代理" tabindex="-1"><a class="header-anchor" href="#_6-nginx反向代理" aria-hidden="true">#</a> 6.nginx反向代理</h3>
<p>原理类似与Node中间件代理，需要搭建一个中转nginx服务器，用来转发请求。</p>
<p>使用nginx反向代理实现跨域，是最简单的跨域方式。只需要修改nginx的配置即可解决跨域问题，支持所有浏览器，支持session，不需要修改任何代码，并且不会影响服务器性能。</p>
<p>实现思路：通过nginx配置一个代理服务器（域名与domain1相同，端口不同）做跳板机，反向代理访问domain2接口，并且可以顺便修改cookie中domain信息，方便当前域cookie写入，实现跨域登录。</p>
<p>先下载nginx，然后将nginx目录下的nginx.conf修改如下</p>
<div class="language-jsx line-numbers-mode" data-ext="jsx"><pre v-pre class="language-jsx"><code><span class="token comment">// proxy服务器</span>
server <span class="token punctuation">{</span>
    listen       <span class="token number">81</span><span class="token punctuation">;</span>
    server_name  www<span class="token punctuation">.</span>domain1<span class="token punctuation">.</span>com<span class="token punctuation">;</span>
    location <span class="token operator">/</span> <span class="token punctuation">{</span>
        proxy_pass   http<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>www<span class="token punctuation">.</span>domain2<span class="token punctuation">.</span>com<span class="token operator">:</span><span class="token number">8080</span><span class="token punctuation">;</span>  #反向代理
        proxy_cookie_domain www<span class="token punctuation">.</span>domain2<span class="token punctuation">.</span>com www<span class="token punctuation">.</span>domain1<span class="token punctuation">.</span>com<span class="token punctuation">;</span> #修改cookie里域名
        index  index<span class="token punctuation">.</span>html index<span class="token punctuation">.</span>htm<span class="token punctuation">;</span>

        # 当用webpack<span class="token operator">-</span>dev<span class="token operator">-</span>server等中间件代理接口访问nignx时，此时无浏览器参与，故没有同源限制，下面的跨域配置可不启用
        add_header Access<span class="token operator">-</span>Control<span class="token operator">-</span>Allow<span class="token operator">-</span>Origin http<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>www<span class="token punctuation">.</span>domain1<span class="token punctuation">.</span>com<span class="token punctuation">;</span>  #当前端只跨域不带cookie时，可为<span class="token operator">*</span>
        add_header Access<span class="token operator">-</span>Control<span class="token operator">-</span>Allow<span class="token operator">-</span>Credentials <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最后通过命令行<code v-pre>nginx -s reload</code>启动nginx</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>// index.html
var xhr = new XMLHttpRequest();
// 前端开关：浏览器是否读写cookie
xhr.withCredentials = true;
// 访问nginx中的代理服务器
xhr.open('get', 'http://www.domain1.com:81/?user=admin', true);
xhr.send();
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>// server.js
var http = require('http');
var server = http.createServer();
var qs = require('querystring');
server.on('request', function(req, res) {
    var params = qs.parse(req.url.substring(2));
    // 向前台写cookie
    res.writeHead(200, {
        'Set-Cookie': 'l=a123456;Path=/;Domain=www.domain2.com;HttpOnly'   // HttpOnly:脚本无法读取
    });
    res.write(JSON.stringify(params));
    res.end();
});
server.listen('8080');
console.log('Server is running at port 8080...');
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-window-name-iframe" tabindex="-1"><a class="header-anchor" href="#_7-window-name-iframe" aria-hidden="true">#</a> 7.window.name+iframe</h3>
<p>window.name属性的独特之处：name值在不同的页面（甚至不同域名）加载后依旧存在，并且可以支持非常长的 name 值（2MB）。</p>
<p>其中a.html和b.html是同域的，都是<code v-pre>http://localhost:3000</code>;而c.html是<code v-pre>http://localhost:4000</code></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code> // a.html(http://localhost:3000/b.html)
  &lt;iframe src="http://localhost:4000/c.html" frameborder="0" onload="load()" id="iframe">&lt;/iframe>
  &lt;script>
    let first = true
    // onload事件会触发2次，第1次加载跨域页，并留存数据于window.name
    function load() {
      if(first){
      // 第1次onload(跨域页)成功后，切换到同域代理页面
        let iframe = document.getElementById('iframe');
        iframe.src = 'http://localhost:3000/b.html';
        first = false;
      }else{
      // 第2次onload(同域b.html页)成功后，读取同域window.name中数据
        console.log(iframe.contentWindow.name);
      }
    }
  &lt;/script>
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>b.html为中间代理页，与a.html同域，内容为空。</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code> // c.html(http://localhost:4000/c.html)
  &lt;script>
    window.name = '我不爱你'
  &lt;/script>
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>总结：通过iframe的src属性由外域转向本地域，跨域数据即由iframe的window.name从外域传递到本地域。这个就巧妙地绕过了浏览器的跨域访问限制，但同时它又是安全操作。</p>
</div></template>


