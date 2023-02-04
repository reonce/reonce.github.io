<template><div><h1 id="查缺补漏" tabindex="-1"><a class="header-anchor" href="#查缺补漏" aria-hidden="true">#</a> 查缺补漏</h1>
<h2 id="跨域" tabindex="-1"><a class="header-anchor" href="#跨域" aria-hidden="true">#</a> 跨域</h2>
<ul>
<li>
<p><strong>Jsonp</strong> 在<script>标签的src属性跟上请求的参数，只能get请求，不安全。</p>
</li>
<li>
<p><strong><a href="http://window.name" target="_blank" rel="noopener noreferrer">window.name<ExternalLinkIcon/></a> + iframe</strong>   <a href="http://xn--window-9m7igl23b30qs4igh403a4k2d643bgxem64lj9uajve.name" target="_blank" rel="noopener noreferrer">在页面的生命周期里共享一个window.name<ExternalLinkIcon/></a>。 不安全,当前页面的可修改、最大为2M、只能传递字符串类型</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 3b<span class="token punctuation">.</span>html <span class="token operator">--</span><span class="token operator">></span>
<span class="token operator">&lt;</span>script<span class="token operator">></span>
window<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">'3a.html想要的3b.html里面的数据'</span><span class="token punctuation">;</span> <span class="token comment">//这是就是我们需要通信的数据</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
　　
<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 3a<span class="token punctuation">.</span>html <span class="token operator">--</span><span class="token operator">></span>
<span class="token operator">&lt;</span>html<span class="token operator">></span>
<span class="token operator">&lt;</span>head<span class="token operator">></span>
<span class="token operator">&lt;</span>script<span class="token operator">></span>
    <span class="token keyword">function</span> <span class="token function">getData</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">var</span> iframe <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'iframe'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        iframe<span class="token punctuation">.</span>src <span class="token operator">=</span> <span class="token string">'bbb.com/3b.html'</span><span class="token punctuation">;</span> <span class="token comment">// 这里让iframe与父页面同源</span>
         
        iframe<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">var</span> data <span class="token operator">=</span> iframe<span class="token punctuation">.</span>contentWindow<span class="token punctuation">.</span>name<span class="token punctuation">;</span> <span class="token comment">//在这里我们得到了跨域页面中传来的数据</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>head<span class="token operator">></span>
<span class="token operator">&lt;</span>body<span class="token operator">></span><span class="token operator">&lt;</span>br<span class="token operator">></span><span class="token operator">&lt;</span>iframe id<span class="token operator">=</span><span class="token string">"iframe"</span>  src <span class="token operator">=</span> <span class="token string">'bbb.com/3b.html'</span> <span class="token function">onload</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=</span><span class="token string">"getData ()"</span><span class="token operator">></span>
<span class="token number">1</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>iframe<span class="token operator">></span>
<span class="token number">1</span>
<span class="token operator">&lt;</span>br<span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">></span> <span class="token operator">&lt;</span><span class="token operator">/</span>html<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>document.domain + iframe</strong> 仅限主域相同，子域不同的场景。</p>
<p>原理： 两个页面通过js强制设置document.domain为基础主域，实现同域</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token number">1.</span><span class="token function">）父窗口：</span><span class="token punctuation">(</span>http<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>www<span class="token punctuation">.</span>domain<span class="token punctuation">.</span>com<span class="token operator">/</span>a<span class="token punctuation">.</span>html<span class="token punctuation">)</span>

<span class="token operator">&lt;</span>iframe id<span class="token operator">=</span><span class="token string">"iframe"</span> src<span class="token operator">=</span><span class="token string">"http://child.domain.com/b.html"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>iframe<span class="token operator">></span>
<span class="token operator">&lt;</span>script<span class="token operator">></span>
    document<span class="token punctuation">.</span>domain <span class="token operator">=</span> <span class="token string">'domain.com'</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> user <span class="token operator">=</span> <span class="token string">'admin'</span><span class="token punctuation">;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
<span class="token number">2.</span><span class="token function">）子窗口：</span><span class="token punctuation">(</span>http<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>child<span class="token punctuation">.</span>domain<span class="token punctuation">.</span>com<span class="token operator">/</span>b<span class="token punctuation">.</span>html<span class="token punctuation">)</span>

<span class="token operator">&lt;</span>script<span class="token operator">></span>
    document<span class="token punctuation">.</span>domain <span class="token operator">=</span> <span class="token string">'domain.com'</span><span class="token punctuation">;</span>
    <span class="token comment">// 获取父窗口中变量</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'get js data from parent ---> '</span> <span class="token operator">+</span> window<span class="token punctuation">.</span>parent<span class="token punctuation">.</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>window.postMessage</strong> html5新特性，可以使用它来向其他window对象发送消息，无论这个window对象同不同源。</p>
<p>postMessage是HTML5 XMLHttpRequest Level 2中的API，且是为数不多可以跨域操作的window属性之一，它可用于解决以下方面的问题：
a.） 页面和其打开的新窗口的数据传递
b.） 多窗口之间消息传递
c.） 页面与嵌套的iframe消息传递
d.） 上面三个场景的跨域数据传递</p>
<p>用法：postMessage(data,origin)方法接受两个参数
data： html5规范支持任意基本类型或可复制的对象，但部分浏览器只支持字符串，所以传参时最好用JSON.stringify()序列化。
origin： 协议+主机+端口号，也可以设置为&quot;*&quot;，表示可以传递给任意窗口，如果要指定和当前窗口同源的话设置为&quot;/&quot;。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token number">1.</span>）a<span class="token punctuation">.</span><span class="token function">html：</span><span class="token punctuation">(</span>http<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>www<span class="token punctuation">.</span>domain1<span class="token punctuation">.</span>com<span class="token operator">/</span>a<span class="token punctuation">.</span>html<span class="token punctuation">)</span>

<span class="token operator">&lt;</span>iframe id<span class="token operator">=</span><span class="token string">"iframe"</span> src<span class="token operator">=</span><span class="token string">"http://www.domain2.com/b.html"</span> style<span class="token operator">=</span><span class="token string">"display:none;"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>iframe<span class="token operator">></span>
<span class="token operator">&lt;</span>script<span class="token operator">></span>       
    <span class="token keyword">var</span> iframe <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'iframe'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    iframe<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">var</span> data <span class="token operator">=</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'aym'</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token comment">// 向domain2传送跨域数据</span>
        iframe<span class="token punctuation">.</span>contentWindow<span class="token punctuation">.</span><span class="token function">postMessage</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">'http://www.domain2.com'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token comment">// 接受domain2返回数据</span>
    window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'message'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'data from domain2 ---> '</span> <span class="token operator">+</span> e<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
<span class="token number">2.</span>）b<span class="token punctuation">.</span><span class="token function">html：</span><span class="token punctuation">(</span>http<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>www<span class="token punctuation">.</span>domain2<span class="token punctuation">.</span>com<span class="token operator">/</span>b<span class="token punctuation">.</span>html<span class="token punctuation">)</span>

<span class="token operator">&lt;</span>script<span class="token operator">></span>
    <span class="token comment">// 接收domain1的数据</span>
    window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'message'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'data from domain1 ---> '</span> <span class="token operator">+</span> e<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">var</span> data <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>data<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            data<span class="token punctuation">.</span>number <span class="token operator">=</span> <span class="token number">16</span><span class="token punctuation">;</span>

            <span class="token comment">// 处理后再发回domain1</span>
            window<span class="token punctuation">.</span>parent<span class="token punctuation">.</span><span class="token function">postMessage</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">'http://www.domain1.com'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>跨域资源共享（CORS）</p>
<p>普通跨域请求：只服务端设置Access-Control-Allow-Origin即可，前端无须设置，若要带cookie请求：前后端都需要设置。</p>
<p>需注意的是：由于同源策略的限制，所读取的cookie为跨域请求接口所在域的cookie，而非当前页。如果想实现当前页cookie的写入，可参考下文：七、nginx反向代理中设置proxy_cookie_domain 和 八、NodeJs中间件代理中cookieDomainRewrite参数的设置。</p>
<p>目前，所有浏览器都支持该功能(IE8+：IE8/9需要使用XDomainRequest对象来支持CORS）)，CORS也已经成为主流的跨域解决方案。</p>
<p>axios设置：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>axios<span class="token punctuation">.</span>defaults<span class="token punctuation">.</span>withCredentials <span class="token operator">=</span> <span class="token boolean">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>  Nodejs后台示例：
</code></pre>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> http <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'http'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> server <span class="token operator">=</span> http<span class="token punctuation">.</span><span class="token function">createServer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> qs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'querystring'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

server<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">'request'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> postData <span class="token operator">=</span> <span class="token string">''</span><span class="token punctuation">;</span>

    <span class="token comment">// 数据块接收中</span>
    req<span class="token punctuation">.</span><span class="token function">addListener</span><span class="token punctuation">(</span><span class="token string">'data'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">chunk</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        postData <span class="token operator">+=</span> chunk<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 数据接收完毕</span>
    req<span class="token punctuation">.</span><span class="token function">addListener</span><span class="token punctuation">(</span><span class="token string">'end'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        postData <span class="token operator">=</span> qs<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>postData<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 跨域后台设置</span>
        res<span class="token punctuation">.</span><span class="token function">writeHead</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token string-property property">'Access-Control-Allow-Credentials'</span><span class="token operator">:</span> <span class="token string">'true'</span><span class="token punctuation">,</span>     <span class="token comment">// 后端允许发送Cookie</span>
            <span class="token string-property property">'Access-Control-Allow-Origin'</span><span class="token operator">:</span> <span class="token string">'http://www.domain1.com'</span><span class="token punctuation">,</span>    <span class="token comment">// 允许访问的域（协议+域名+端口）</span>
            <span class="token comment">/* 
             * 此处设置的cookie还是domain2的而非domain1，因为后端也不能跨域写cookie(nginx反向代理可以实现)，
             * 但只要domain2中写入一次cookie认证，后面的跨域接口都能从domain2中获取cookie，从而实现所有的接口都能跨域访问
             */</span>
            <span class="token string-property property">'Set-Cookie'</span><span class="token operator">:</span> <span class="token string">'l=a123456;Path=/;Domain=www.domain2.com;HttpOnly'</span>  <span class="token comment">// HttpOnly的作用是让js无法读取cookie</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        res<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>postData<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        res<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

server<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token string">'8080'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Server is running at port 8080...'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="css权重" tabindex="-1"><a class="header-anchor" href="#css权重" aria-hidden="true">#</a> css权重</h2>
<p>权值等级划分， 一般来说是划分4个等级：</p>
<p>第一等级：代表 内联样式，如 style=&quot;&quot;，权值为 1,0,0,0；</p>
<p>第二等级：代表 ID选择器，如 #id=&quot;&quot;, 权值为 0,1,0,0；</p>
<p>第三等级：代表 calss | 伪类 | 属性 选择器，如 .class | :hover,:link,:target | [type], 权值 0,0,1,0；</p>
<p>第四等级：代表 标签 | 伪元素 选择器，如 p | ::after, ::before, ::fist-inline, ::selection, 权值 0,0,0,1；</p>
<p>此外，通用选择器（*），子选择器（&gt;）， 相邻同胞选择器（+）等选择器不在4等级之内，所以它们的权值都为 0,0,0,0；</p>
<p>注： !important 权重无穷大</p>
<h2 id="css" tabindex="-1"><a class="header-anchor" href="#css" aria-hidden="true">#</a> css +~</h2>
<h5 id="_1、群组选择器" tabindex="-1"><a class="header-anchor" href="#_1、群组选择器" aria-hidden="true">#</a> 1、群组选择器（','）</h5>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>/* 表示既h1，又h2 */h1, h2 {  color: red;}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="_2、后代选择器-空格" tabindex="-1"><a class="header-anchor" href="#_2、后代选择器-空格" aria-hidden="true">#</a> 2、后代选择器（空格）</h5>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>/* 表示 h1 下面的所有 span 元素，不管是否以 h1 为直接父元素 */h1 span {}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="_3、子元素选择器" tabindex="-1"><a class="header-anchor" href="#_3、子元素选择器" aria-hidden="true">#</a> 3、子元素选择器（'&gt;'）</h5>
<p>选择直接子元素</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>/* 表示 h1 下面的所有以 h1 为直接父元素的 span 元素，注意必须以 h1 为直接父元素 */h1 > span { }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>示例：下面第一个h1的两个strong元素是红色，第二个h1的strong元素将不变色</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>&lt;h1>This is &lt;strong>very&lt;/strong> &lt;strong>very&lt;/strong> important.&lt;/h1>&lt;h1>This is &lt;em>really &lt;strong>very&lt;/strong>&lt;/em> important.&lt;/h1>
h1 > strong {color:red;}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_4、相邻兄弟选择器" tabindex="-1"><a class="header-anchor" href="#_4、相邻兄弟选择器" aria-hidden="true">#</a> 4、相邻兄弟选择器（'+'）</h5>
<p>选择紧接在另一个元素后的元素，而且二者有相同的父元素。</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code> &lt;ul>    &lt;li>List item 1&lt;/li>    &lt;li>List item 2&lt;/li>    &lt;li>List item 3&lt;/li>  &lt;/ul>  &lt;ol>    &lt;li>List item 1&lt;/li>    &lt;li>List item 2&lt;/li>    &lt;li>List item 3&lt;/li>  &lt;/ol>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://img2018.cnblogs.com/blog/1424359/201909/1424359-20190902221705614-429719645.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<h5 id="_5、兄弟选择器" tabindex="-1"><a class="header-anchor" href="#_5、兄弟选择器" aria-hidden="true">#</a> 5、兄弟选择器（'~'）</h5>
<p>选择在某元素之后的所有兄弟元素，不一定要紧跟在后面，但必须得是相同父元素，即必须是同一级元素。</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>/* A之后的所有B元素，不一定要紧跟在A后面、相同父元素 */A ~ B{    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="伪类和伪元素的区别" tabindex="-1"><a class="header-anchor" href="#伪类和伪元素的区别" aria-hidden="true">#</a> 伪类和伪元素的区别</h2>
<p>伪类与伪元素的特性及其区别：</p>
<ol>
<li>伪类本质上是为了弥补常规CSS选择器的不足，以便获取到更多信息；</li>
<li>伪元素本质上是创建了一个有内容的虚拟容器；</li>
<li>CSS3中伪类和伪元素的语法不同；</li>
<li>可以同时使用多个伪类，而只能同时使用一个伪元素；</li>
</ol>
<h2 id="长宽比2-1" tabindex="-1"><a class="header-anchor" href="#长宽比2-1" aria-hidden="true">#</a> 长宽比<code v-pre>2:1</code></h2>
<ol>
<li>Padding-bottom(200%)</li>
<li>aspect-ratio</li>
</ol>
<h2 id="禁止复制粘贴" tabindex="-1"><a class="header-anchor" href="#禁止复制粘贴" aria-hidden="true">#</a> 禁止复制粘贴</h2>
<h2 id="取消请求" tabindex="-1"><a class="header-anchor" href="#取消请求" aria-hidden="true">#</a> 取消请求</h2>
<ul>
<li>AbortController</li>
</ul>
<h2 id="cjs-esm" tabindex="-1"><a class="header-anchor" href="#cjs-esm" aria-hidden="true">#</a> cjs/esm</h2>
<h2 id="package-json" tabindex="-1"><a class="header-anchor" href="#package-json" aria-hidden="true">#</a> Package.json</h2>
<ul>
<li>
<p>main</p>
</li>
<li>
<p>exports</p>
</li>
<li>
<p>version</p>
</li>
<li>
<p>^1.2.3  第一个主版本不变，后面俩保持最新</p>
</li>
<li>
<p>~1.2.3  前两个版本不变，最后那个保持最新</p>
</li>
</ul>
<p>+devDep</p>
<p>+peerDep</p>
<p>+vue3</p>
<h2 id="webpack" tabindex="-1"><a class="header-anchor" href="#webpack" aria-hidden="true">#</a> webpack</h2>
<ul>
<li>
<p>提升构建速度</p>
<ul>
<li>
<p>cache</p>
</li>
<li>
<p>thread提高线程</p>
</li>
<li>
<p>swc-loader</p>
</li>
</ul>
</li>
<li>
<p>优化体积</p>
<ul>
<li>Webpack-bundle-analyzer</li>
<li>terser  -&gt;代码压缩，css，丑化</li>
<li>Gzip/brotli -&gt; not webpack</li>
</ul>
</li>
</ul>
<h2 id="js-压缩代码" tabindex="-1"><a class="header-anchor" href="#js-压缩代码" aria-hidden="true">#</a> js 压缩代码</h2>
<ul>
<li>
<p>terser</p>
</li>
<li>
<p>空格</p>
</li>
<li>
<p>变量名缩短</p>
</li>
<li>
<p>预计算</p>
</li>
</ul>
<h2 id="tree-shaking" tabindex="-1"><a class="header-anchor" href="#tree-shaking" aria-hidden="true">#</a> tree shaking</h2>
<ul>
<li>基于ESM的静态分析</li>
<li>commonjs -&gt; esm</li>
</ul>
<h2 id="http状态码" tabindex="-1"><a class="header-anchor" href="#http状态码" aria-hidden="true">#</a> http状态码</h2>
<ul>
<li>304</li>
<li>206</li>
<li>204</li>
<li>201</li>
<li>401</li>
<li>405</li>
<li>429  -&gt; Rate Limit</li>
</ul>
<h2 id="http2" tabindex="-1"><a class="header-anchor" href="#http2" aria-hidden="true">#</a> Http2</h2>
<ul>
<li>header, http1头部没有进行压缩</li>
<li>多路复用</li>
<li>Frame/Stream/Message</li>
<li>Server Push
<ul>
<li>和 websorket的区别</li>
</ul>
</li>
</ul>
<h2 id="vue3" tabindex="-1"><a class="header-anchor" href="#vue3" aria-hidden="true">#</a> vue3</h2>
<ul>
<li>Proxy/define</li>
</ul>
<h2 id="es6-proxy" tabindex="-1"><a class="header-anchor" href="#es6-proxy" aria-hidden="true">#</a> Es6 Proxy</h2>
<ul>
<li>代理</li>
<li>不可变数据 -&gt; immer.js</li>
</ul>
</div></template>


