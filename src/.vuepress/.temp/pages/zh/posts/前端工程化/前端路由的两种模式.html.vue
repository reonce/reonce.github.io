<template><div><h1 id="前端路由的两种模式-hash-模式和-history-模式" tabindex="-1"><a class="header-anchor" href="#前端路由的两种模式-hash-模式和-history-模式" aria-hidden="true">#</a> 前端路由的两种模式： hash 模式和 history 模式</h1>
<p>对于前端来说，hash路由和history路由都可以实现不刷新页面跳转的功能，也就是说都可以用于前后端分离的项目。</p>
<h2 id="hash模式" tabindex="-1"><a class="header-anchor" href="#hash模式" aria-hidden="true">#</a> hash模式</h2>
<p>这里的 hash 就是指 url 尾巴后的 # 号以及后面的字符。这里的 # 和 css 里的 # 是一个意思。hash 也 称作 锚点，本身是用来做页面定位的，她可以使对应 id 的元素显示在可视区域内。</p>
<p>由于 hash 值变化不会导致浏览器向服务器发出请求，而且 hash 改变会触发 hashchange 事件，浏览器的进后退也能对其进行控制，所以人们在 html5 的 history 出现前，基本都是使用 hash 来实现前端路由的。</p>
<h3 id="hash的特点" tabindex="-1"><a class="header-anchor" href="#hash的特点" aria-hidden="true">#</a> hash的特点</h3>
<p>hash变化会触发网页跳转，即浏览器的前进和后退。</p>
<p>hash 可以改变 url ，但是不会触发页面重新加载（hash的改变是记录在 window.history 中），即不会刷新页面。也就是说，所有页面的跳转都是在客户端进行操作。因此，这并不算是一次 http 请求，所以这种模式不利于 SEO 优化。hash 只能修改 # 后面的部分，所以只能跳转到与当前 url 同文档的 url 。</p>
<p>hash 通过 window.onhashchange 的方式，来监听 hash 的改变，借此实现无刷新跳转的功能。</p>
<p>hash 永远不会提交到 server 端（可以理解为只在前端自生自灭）。</p>
<p>使用到的api：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>window<span class="token punctuation">.</span>location<span class="token punctuation">.</span>hash <span class="token operator">=</span> <span class="token string">'qq'</span> <span class="token comment">// 设置 url 的 hash，会在当前url后加上 '#qq'</span>

<span class="token keyword">var</span> hash <span class="token operator">=</span> window<span class="token punctuation">.</span>location<span class="token punctuation">.</span>hash <span class="token comment">// '#qq'  </span>

window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'hashchange'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span> 
    <span class="token comment">// 监听hash变化，点击浏览器的前进后退会触发</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="history模式" tabindex="-1"><a class="header-anchor" href="#history模式" aria-hidden="true">#</a> history模式</h2>
<p>history API 是 H5 提供的新特性，允许开发者直接更改前端路由，即更新浏览器 URL 地址而不重新发起请求。</p>
<p>已经有 hash 模式了，而且 hash 能兼容到IE8， history 只能兼容到 IE10，为什么还要搞个 history 呢？
首先，hash 本来是拿来做页面定位的，如果拿来做路由的话，原来的锚点功能就不能用了。其次，hash 的传参是基于 url 的，如果要传递复杂的数据，会有体积的限制，而 history 模式不仅可以在url里放参数，还可以将数据存放在一个特定的对象中。</p>
<p>相关API：</p>
<h3 id="带来哪些新的问题" tabindex="-1"><a class="header-anchor" href="#带来哪些新的问题" aria-hidden="true">#</a> 带来哪些新的问题</h3>
<p>对于 history 来说，确实解决了不少 hash 存在的问题，但是也带来了新的问题。具体如下：</p>
<p>使用 history 模式时，在对当前的页面进行刷新时，此时浏览器会重新发起请求。如果 nginx 没有匹配得到当前的 url ，就会出现 404 的页面。
而对于 hash 模式来说，它虽然看着是改变了 url ，但不会被包括在 http 请求中。所以，它算是被用来指导浏览器的动作，并不影响服务器端。因此，改变 hash 并没有真正地改变 url ，所以页面路径还是之前的路径， nginx 也就不会拦截。
因此，在使用 history 模式时，需要通过服务端来允许地址可访问，如果没有设置，就很容易导致出现 404 的局面。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>window<span class="token punctuation">.</span>history<span class="token punctuation">.</span><span class="token function">pushState</span><span class="token punctuation">(</span>state<span class="token punctuation">,</span> title<span class="token punctuation">,</span> url<span class="token punctuation">)</span> 
<span class="token comment">// state：需要保存的数据，这个数据在触发popstate事件时，可以在event.state里获取</span>
<span class="token comment">// title：标题，基本没用，一般传 null</span>
<span class="token comment">// url：设定新的历史记录的 url。新的 url 与当前 url 的 origin 必须是一樣的，否则会抛出错误。url可以是绝对路径，也可以是相对路径。</span>
<span class="token comment">//如 当前url是 https://www.baidu.com/a/,执行history.pushState(null, null, './qq/')，则变成 https://www.baidu.com/a/qq/，</span>
<span class="token comment">//执行history.pushState(null, null, '/qq/')，则变成 https://www.baidu.com/qq/</span>

window<span class="token punctuation">.</span>history<span class="token punctuation">.</span><span class="token function">replaceState</span><span class="token punctuation">(</span>state<span class="token punctuation">,</span> title<span class="token punctuation">,</span> url<span class="token punctuation">)</span>
<span class="token comment">// 与 pushState 基本相同，但她是修改当前历史记录，而 pushState 是创建新的历史记录</span>

window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">"popstate"</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 监听浏览器前进后退事件，pushState 与 replaceState 方法不会触发				</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

window<span class="token punctuation">.</span>history<span class="token punctuation">.</span><span class="token function">back</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 后退</span>
window<span class="token punctuation">.</span>history<span class="token punctuation">.</span><span class="token function">forward</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 前进</span>
window<span class="token punctuation">.</span>history<span class="token punctuation">.</span><span class="token function">go</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">// 前进一步，-2为后退两步，window.history.lengthk可以查看当前历史堆栈中页面的数量</span>
<span class="token constant">JAVASCRIPT</span> 复制 全屏
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>history 模式改变 url 的方式会导致浏览器向服务器发送请求，这不是我们想看到的，我们需要在服务器端做处理：如果匹配不到任何静态资源，则应该始终返回同一个 html 页面</p>
</div></template>


