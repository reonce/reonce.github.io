<template><div><h1 id="第十四章-14-1-5-14-1-9-续接前面本章完" tabindex="-1"><a class="header-anchor" href="#第十四章-14-1-5-14-1-9-续接前面本章完" aria-hidden="true">#</a> 第十四章 14.1.5-14.1.9(续接前面本章完)</h1>
<h2 id="_14-1-5-comment-类型" tabindex="-1"><a class="header-anchor" href="#_14-1-5-comment-类型" aria-hidden="true">#</a> 14.1.5 Comment 类型</h2>
<p>注释类型节点，一般不主动创建。和文本类型一样继承自 CharacterData 基类，除了 splitText() 之外拥有其他所有 Text节点的方法。</p>
<p>注释的实际内容可以通过 nodeValue 或 data 获得</p>
<p>document.createComment() 可以创建注释节点</p>
<h2 id="_1-4-1-6-cdatasection-类型" tabindex="-1"><a class="header-anchor" href="#_1-4-1-6-cdatasection-类型" aria-hidden="true">#</a> 1.4.1.6 CDATASection 类型</h2>
<p>XML 中特有的 CDATA 区块</p>
<p>可以用 createCDataSection() 创建并传入节点内容创建</p>
<h2 id="_14-1-7-documenttype-类型" tabindex="-1"><a class="header-anchor" href="#_14-1-7-documenttype-类型" aria-hidden="true">#</a> 14.1.7 DocumentType 类型</h2>
<p>就是 HTML 最上面声明的那一行 <!DOCYPE html>  主要使用 name 属性，就是紧跟着 <code v-pre>DOCYPE</code> 后的内容，前面的代码中 <code v-pre>name</code> 就是 html 。 只有 name 是有用的。</p>
<h2 id="_14-1-8-documentfragment-类型" tabindex="-1"><a class="header-anchor" href="#_14-1-8-documentfragment-类型" aria-hidden="true">#</a> 14.1.8 DocumentFragment 类型</h2>
<p>文档片段类型。和 React 的 Fragement 节点很像，它本身并不会添加到文档树当中，而是起到一个辅助作用。如果把它通过 appendChild 添加到一个父节点中， 实际上会把它包含的子节点添加到父节点中。</p>
<p>可以用来减少渲染次数，例如用它包裹着 3 个 <ul> 标签，页面会一次性把它们三个添加进去，一次渲染。</p>
<h2 id="_14-1-9-attr-类型" tabindex="-1"><a class="header-anchor" href="#_14-1-9-attr-类型" aria-hidden="true">#</a> 14.1.9 Attr 类型</h2>
<p>元素数据在 DOM 中通过 <strong>Attr</strong> 类型表示。属性是存在于元素 <strong>attributes</strong> 属性中的节点</p>
<p>属性节点尽管是节点，但它<strong>不被认为是 DOM 文档树的一部分</strong>。Attr 节点很少直接被引用，更推荐使用 getAttribute()、removeAttribute()和setAttribute()方法操作属性。</p>
<p>使用 document.createAttrbute() 可以创还能一个 Attr 节点，参数是属性名，可以直接引用赋值，例如：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> attr <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createAttrbute</span><span class="token punctuation">(</span><span class="token string">'align'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
attr<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token string">'left'</span><span class="token punctuation">;</span>
element<span class="token punctuation">.</span><span class="token function">setAttributeNode</span><span class="token punctuation">(</span>attr<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以这样做，但是不常用。更推荐上面说的三个方法。</p>
</div></template>


