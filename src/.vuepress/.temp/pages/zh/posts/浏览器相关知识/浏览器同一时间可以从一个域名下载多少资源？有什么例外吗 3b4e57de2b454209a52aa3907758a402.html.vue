<template><div><h1 id="浏览器同一时间可以从一个域名下载多少资源-有什么例外吗" tabindex="-1"><a class="header-anchor" href="#浏览器同一时间可以从一个域名下载多少资源-有什么例外吗" aria-hidden="true">#</a> 浏览器同一时间可以从一个域名下载多少资源？有什么例外吗</h1>
<p>浏览器的并发请求数目限制是针对同一域名的。</p>
<p>意即，同一时间针对同一域名下的请求有一定数量限制。超过限制数目的请求会被阻塞，<a href="http://xn--zhimg-dq1hid98bgxl92h77w4icr28s.com" target="_blank" rel="noopener noreferrer">这就是为什么会有zhimg.com<ExternalLinkIcon/></a>, <a href="https://link.zhihu.com/?target=http%3A//twimg.com" target="_blank" rel="noopener noreferrer">http://twimg.com<ExternalLinkIcon/></a> 之类域名的原因</p>
<p>（这是其中一个原因，另一个主要原因是，向 <a href="http://zhihu.com/" target="_blank" rel="noopener noreferrer">http://zhihu.com<ExternalLinkIcon/></a> 请求资源会把 <a href="http://zhihu.com/" target="_blank" rel="noopener noreferrer">http://zhihu.com<ExternalLinkIcon/></a> 下本地的所有 cookie 发送过去，这是请求图片，js等资源不需要的，会造成很大的浪费，详情见<a href="https://link.zhihu.com/?target=http%3A//webmasters.stackexchange.com/questions/26753/why-do-big-sites-host-their-images-css-on-external-domains" target="_blank" rel="noopener noreferrer">http://webmasters.stackexchange.com/questions/26753/why-do-big-sites-host-their-images-css-on-external-domains<ExternalLinkIcon/></a>）</p>
<p>如图，有的请求会持续很长时间，如果把 img, css, js... 都放到 <a href="http://zhihu.com/" target="_blank" rel="noopener noreferrer">http://zhihu.com<ExternalLinkIcon/></a> 一个域名下面，其他请求就迟迟无法完成，浏览者看来就是『卡住了』。而把图片放到 <a href="https://link.zhihu.com/?target=http%3A//zhimg.com" target="_blank" rel="noopener noreferrer">http://zhimg.com<ExternalLinkIcon/></a> 之后，css和图片就可以并发请求了。</p>
<p><RouterLink to="/zh/posts/%E6%B5%8F%E8%A7%88%E5%99%A8%E7%9B%B8%E5%85%B3%E7%9F%A5%E8%AF%86/%E6%B5%8F%E8%A7%88%E5%99%A8%E5%90%8C%E4%B8%80%E6%97%B6%E9%97%B4%E5%8F%AF%E4%BB%A5%E4%BB%8E%E4%B8%80%E4%B8%AA%E5%9F%9F%E5%90%8D%E4%B8%8B%E8%BD%BD%E5%A4%9A%E5%B0%91%E8%B5%84%E6%BA%90%EF%BC%9F%E6%9C%89%E4%BB%80%E4%B9%88%E4%BE%8B%E5%A4%96%E5%90%97%203b4e57de2b454209a52aa3907758a402/HTTP1%20x%E5%92%8CHTTP2%200%2003518ee5d41d426381818caf492b7d93.html">HTTP1.x和HTTP2.0</RouterLink></p>
<p>在<strong>HTTP/1.x</strong>的时候，不同浏览器对最大并发量有不同的限制，通常是2-10个，谷歌浏览器是6个</p>
<p>在<strong>HTTP/2.0</strong>的时代，<strong><strong>解决浏览器限制同源HTTP连接并发个数被解决了</strong></strong></p>
<p>罗列一下http1时代，浏览器这么决定可能有什么考虑</p>
<ol>
<li>由于 TCP 协议的限制，PC 端只有65536个端口可用以向外部发出连接，而操作系统对半开连接数也有限制以保护操作系统的 TCP\IP 协议栈资源不被迅速耗尽，因此浏览器不好发出太多的 TCP 连接，而是采取用完了之后再重复利用 TCP 连接或者干脆重新建立 TCP 连接的方法。</li>
<li>如果采用阻塞的套接字模型来建立连接，同时发出多个连接会导致浏览器不得不多开几个线程，而线程有时候算不得是轻量级资源，毕竟做一次上下文切换开销不小。</li>
<li>这是浏览器作为一个有良知的客户端在保护服务器。就像以太网的冲突检测机制，客户端在使用公共资源的时候必须要自行决定一个等待期。当超过2个客户端要使用公共资源时，强势的那个邪恶的客户端可能会导致弱势的客户端完全无法访问公共资源。从前迅雷被喷就是因为它不是一个有良知的客户端，它作为 HTTP 协议客户端没有考虑到服务器的压力，作为 BT 客户端没有考虑到自己回馈上传量的义务。</li>
</ol>
</div></template>


