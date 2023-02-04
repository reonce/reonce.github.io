import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="浅读正则表达式" tabindex="-1"><a class="header-anchor" href="#浅读正则表达式" aria-hidden="true">#</a> 浅读正则表达式</h1><h2 id="导读" tabindex="-1"><a class="header-anchor" href="#导读" aria-hidden="true">#</a> 导读</h2><p>长期以来我对正则表达式的理解是：</p><ol><li>可以百度查到，随用随查</li><li>印象中不难，但是看不懂</li><li>比起其他的知识，它的优先级不高</li></ol><p>但是要系统的学习JS基础，正则我认为是不可少的一环</p><p>本文目的在于能够使用简单的，看懂正常的正则表达式</p><h2 id="创建正则表达式" tabindex="-1"><a class="header-anchor" href="#创建正则表达式" aria-hidden="true">#</a> 创建正则表达式</h2><p>ECNAScript 通过RegExp类型支持正则表达式，它在JS中有两种创建方式：</p><ol><li>通过字面量定义，类似于Perl的简洁语法创建</li><li>通过RegExp构建函数创建</li></ol><h3 id="通过字面量定义的语法创建" tabindex="-1"><a class="header-anchor" href="#通过字面量定义的语法创建" aria-hidden="true">#</a> 通过字面量定义的语法创建</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> expression <span class="token operator">=</span> <span class="token operator">/</span>pattern<span class="token operator">/</span>flags<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面这个正则表达式的<code>pattern</code>表示任何简单或者复杂的正则表达式，包括字符类、限定符、分组、向前查找和向后引用。后面的<code>flags</code>表示控制正则表达式筛选的条件，也就是一种规则。下面列举出了表示匹配模式的标记(<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions" target="_blank" rel="noopener noreferrer">MDN`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a>)</p><table><thead><tr><th style="${ssrRenderStyle({ "text-align": "center" })}">标志</th><th style="${ssrRenderStyle({ "text-align": "left" })}">描述</th></tr></thead><tbody><tr><td style="${ssrRenderStyle({ "text-align": "center" })}"><code>g</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}">全局搜索。</td></tr><tr><td style="${ssrRenderStyle({ "text-align": "center" })}"><code>i</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}">不区分大小写搜索。</td></tr><tr><td style="${ssrRenderStyle({ "text-align": "center" })}"><code>m</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}">多行搜索。</td></tr><tr><td style="${ssrRenderStyle({ "text-align": "center" })}"><code>s</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}">允许 <code>.</code> 匹配换行符。</td></tr><tr><td style="${ssrRenderStyle({ "text-align": "center" })}"><code>u</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}">使用unicode码的模式进行匹配。</td></tr><tr><td style="${ssrRenderStyle({ "text-align": "center" })}"><code>y</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}">执行“粘性(<code>sticky</code>)”搜索,匹配从目标字符串的当前位置开始。</td></tr></tbody></table><p>使用不同的模式和标记就可以创建出各种正则表达式，比如：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 匹配字符串中所有的&quot;at&quot;</span>
<span class="token keyword">let</span> pattern1 <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">at</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">;</span>
<span class="token comment">// 匹配第一个&quot;bat&quot;或&quot;cat&quot;,忽略大小写</span>
<span class="token keyword">let</span> pattern2 <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">[bc]at</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">;</span>
<span class="token comment">// 匹配所有以&quot;at&quot;结尾的三字符组合,忽略大小写</span>
<span class="token keyword">let</span> pattern3 <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">.at</span><span class="token regex-delimiter">/</span><span class="token regex-flags">gi</span></span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>与其他语言的正则表达式类似，所有<em>元字符</em>都需要进行转义</p><blockquote><p>元字符包括 ( [ { \\ ^ $ | ) ] } ? * + .</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 匹配第一个&quot;[bc]at&quot;,忽略大小写</span>
<span class="token keyword">let</span> pattern4 <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\[bc]\\]at</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">;</span>
<span class="token comment">// 匹配所有&quot;.at&quot;,忽略大小写</span>
<span class="token keyword">let</span> parrern5 <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.at</span><span class="token regex-delimiter">/</span><span class="token regex-flags">gi</span></span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="通过regexp构建函数创建" tabindex="-1"><a class="header-anchor" href="#通过regexp构建函数创建" aria-hidden="true">#</a> 通过RegExp构建函数创建</h3><p>正则表达式也可以通过RegExp构造函数创建，它接受两个参数，模式字符串和（可选的）标记字符串。任何使用字面量定义的正则表达式也可以通过构造函数进行创建，比如：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 匹配第一个&quot;bat&quot;或&quot;cat&quot;,忽略大小写</span>
<span class="token keyword">let</span> pattern6 <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">[bc]at</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>也可以通过构造函数创建</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 和pattern6一样，不过是通过构造函数创建</span>
<span class="token keyword">let</span> pattern7 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RegExp</span><span class="token punctuation">(</span><span class="token string">&quot;[bc]at&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;i&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>通过构造函数使用元字符时，需要进行二次转义（例如<code>&quot;\\&quot;</code>在字面量转义的时候需要表示为<code>&quot;\\\\&quot;</code>,而在构造函数中需要表示为<code>&quot;\\\\\\\\&quot;</code>）</p><table><thead><tr><th style="${ssrRenderStyle({ "text-align": "center" })}">字面量模式</th><th style="${ssrRenderStyle({ "text-align": "center" })}">对应的字符串</th></tr></thead><tbody><tr><td style="${ssrRenderStyle({ "text-align": "center" })}"><code>/\\[bc\\]at/</code></td><td style="${ssrRenderStyle({ "text-align": "center" })}"><code>&quot;\\\\[bc\\\\]at&quot;</code></td></tr><tr><td style="${ssrRenderStyle({ "text-align": "center" })}"><code>/\\.at/</code></td><td style="${ssrRenderStyle({ "text-align": "center" })}"><code>&quot;\\\\.at&quot;</code></td></tr><tr><td style="${ssrRenderStyle({ "text-align": "center" })}"><code>/\\d.\\d{1,2}/</code></td><td style="${ssrRenderStyle({ "text-align": "center" })}"><code>&quot;\\\\d.\\\\d{1,2}&quot;</code></td></tr><tr><td style="${ssrRenderStyle({ "text-align": "center" })}"><code>/\\w\\\\hello\\\\123/</code></td><td style="${ssrRenderStyle({ "text-align": "center" })}"><code>&quot;\\\\w\\\\\\\\hello\\\\\\\\123&quot;</code></td></tr></tbody></table><p>此外，使用RegExp也可以基于已有的正则表达式实例，并可以选择性的修改它们的标记</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> rel <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">cat</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>rel<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// &quot;/cat/g&quot;</span>

<span class="token keyword">const</span> rel2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RegExp</span><span class="token punctuation">(</span>rel<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>rel2<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// &quot;/cat/g&quot;</span>

<span class="token keyword">const</span> rel3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RegExp</span><span class="token punctuation">(</span>rel<span class="token punctuation">,</span> <span class="token string">&quot;i&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>rel3<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// &quot;/cat/i&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>关于RegExp构造函数，本文只简单讲述了创建，实际上它包含很多实例属性、实例方法以及构造函数属性。</p></blockquote><p>以上就是本文的全部内容了，完</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/posts/Chore/浅读正则表达式.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ________html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "浅读正则表达式.html.vue"]]);
export {
  ________html as default
};
