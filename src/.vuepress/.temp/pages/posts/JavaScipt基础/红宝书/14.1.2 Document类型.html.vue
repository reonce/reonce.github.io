<template><div><h1 id="_14-1-2-document类型" tabindex="-1"><a class="header-anchor" href="#_14-1-2-document类型" aria-hidden="true">#</a> 14.1.2 Document类型</h1>
<p>Document类型是JS中表示文档的类型。提供了两种方法获取HTML中的<html>元素，分别是 <code v-pre>document.documentElement</code>和<code v-pre>document.childNodes</code>的唯一玄素。document的body属性指向body，也比较常用。</p>
<p>上一节提到的操作node类型节点的方法，并不能用在document对象上，因为document对象是只读的，并且只存在一个Element类型的子节点，就是<html></p>
<h2 id="文档信息属性" tabindex="-1"><a class="header-anchor" href="#文档信息属性" aria-hidden="true">#</a> 文档信息属性</h2>
<p>document的文档信息属性有 title、URL、domain、referrer</p>
<h3 id="title" tabindex="-1"><a class="header-anchor" href="#title" aria-hidden="true">#</a> title</h3>
<p>这个属性可以读写，表示浏览器窗口的标题栏，修改后标题也会直接改变在浏览器标题处。但是，修改属性并不会改变<title>元素</p>
<h3 id="url" tabindex="-1"><a class="header-anchor" href="#url" aria-hidden="true">#</a> URL</h3>
<p>返回档期那页面的完整URL，只读</p>
<h3 id="domain" tabindex="-1"><a class="header-anchor" href="#domain" aria-hidden="true">#</a> domain</h3>
<p>这个属性返回了URL的域名，可以进行有限制的设置：</p>
<ol>
<li>只能改同域名</li>
<li>放松修改后就不能在收紧了。例如 <a href="http://p2p.wrox.com" target="_blank" rel="noopener noreferrer">p2p.wrox.com<ExternalLinkIcon/></a> 变成  wrox.com后就不能变回去了</li>
</ol>
<h3 id="referrer" tabindex="-1"><a class="header-anchor" href="#referrer" aria-hidden="true">#</a> referrer</h3>
<p>表示页面的来源地址，无则返回空字符串</p>
<h2 id="定位-获取-元素节点" tabindex="-1"><a class="header-anchor" href="#定位-获取-元素节点" aria-hidden="true">#</a> 定位（获取）元素节点</h2>
<h3 id="getelementbyid" tabindex="-1"><a class="header-anchor" href="#getelementbyid" aria-hidden="true">#</a> getElementById()</h3>
<p>接收<strong>id</strong>作为参数，如果有多个承载此<strong>id</strong>的元素，只返回查找到的第一个。</p>
<h3 id="getelementsbytagname" tabindex="-1"><a class="header-anchor" href="#getelementsbytagname" aria-hidden="true">#</a> getElementsByTagName()</h3>
<p>接收标签名作为参数，返回一个nodeList或HTMLCollection的集合，表示所有定位到此标签的元素集合。</p>
<blockquote>
<p>HTMLCollection 和 nodeList特性很像，都是实时，都可以用中括号获取，都有length。前者多一个方法脚 namedItem() 可以通过元素绑定的name获取某一项引用。</p>
</blockquote>
<h3 id="getelementsbyname" tabindex="-1"><a class="header-anchor" href="#getelementsbyname" aria-hidden="true">#</a> getElementsByName()</h3>
<p>返回具有指定name的元素集合</p>
<h3 id="getelementsbyclassname" tabindex="-1"><a class="header-anchor" href="#getelementsbyclassname" aria-hidden="true">#</a> getElementsByClassName()</h3>
<p>返回具有指定类名的元素集合</p>
<h2 id="dom兼容性检测" tabindex="-1"><a class="header-anchor" href="#dom兼容性检测" aria-hidden="true">#</a> DOM兼容性检测</h2>
<p><strong>document.implementtation</strong>属性是一个对象，定义了一个方法叫做<code v-pre>hasFeature()</code>，接收两个传参：特性名称和版本，书中有提供了查询的枚举和方法。不常用，了解即可。P411底部</p>
<h2 id="文档写入" tabindex="-1"><a class="header-anchor" href="#文档写入" aria-hidden="true">#</a> 文档写入</h2>
<p>document支持古老的方法，向文档中写入内容</p>
<h3 id="write-和writein" tabindex="-1"><a class="header-anchor" href="#write-和writein" aria-hidden="true">#</a> write()和writeIn()</h3>
<p>这两个方法的区别是，后者会在写入内容后追加一个换行符，在document上调用这两个方法，会在<strong>页面加载期间向页面动态添加内容</strong></p>
<p>不仅可以添加字符串文本，可以添加 标签包裹起来的元素，会被文档解析成正常标签使用，经常用于加载脚本，但是要注意用法，示例：</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text/javascript<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
	document<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">"&lt;script type="</span>text<span class="token operator">/</span>javascript<span class="token string">" src=\"file.js"</span>\ <span class="token operator">></span> <span class="token operator">+</span> <span class="token operator">&lt;</span>\<span class="token operator">/</span>script<span class="token operator">></span>"<span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意结尾部分多了一个反斜杠，<strong>&lt;/script&gt;</strong>。如果不加这个反斜杠，会被上面的<strong>script</strong> 起始标签认为是结束标签，引发包裹错误</p>
<blockquote>
<p>如果在window.onload之后，页面加载之后再去调用这两个方法，输出的内容会重写整个页面。</p>
</blockquote>
<h3 id="open-和close" tabindex="-1"><a class="header-anchor" href="#open-和close" aria-hidden="true">#</a> open()和close（）</h3>
<p>分别用于打开和关闭网页输出流</p>
</div></template>


