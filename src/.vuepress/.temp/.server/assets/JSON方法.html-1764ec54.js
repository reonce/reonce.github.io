import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="json方法" tabindex="-1"><a class="header-anchor" href="#json方法" aria-hidden="true">#</a> JSON方法</h1><p>JSON 是语言无关的纯数据规范，因此一些特定于 JavaScript 的对象属性会被 <code>JSON.stringify</code> 跳过。</p><p>即：</p><ul><li>函数属性（方法）。</li><li>Symbol 类型的属性。</li><li>存储 <code>undefined</code> 的属性。</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> user <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function">sayHi</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 被忽略</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;Hello&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&quot;id&quot;</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token number">123</span><span class="token punctuation">,</span> <span class="token comment">// 被忽略</span>
  <span class="token literal-property property">something</span><span class="token operator">:</span> <span class="token keyword">undefined</span> <span class="token comment">// 被忽略</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token function">alert</span><span class="token punctuation">(</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span> <span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// {}（空对象）</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通常这很好。如果这不是我们想要的方式，那么我们很快就会看到如何自定义转换方式。</p><p>最棒的是支持嵌套对象转换，并且可以自动对其进行转换。</p><p>例如：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> meetup <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;Conference&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">room</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">number</span><span class="token operator">:</span> <span class="token number">23</span><span class="token punctuation">,</span>
    <span class="token literal-property property">participants</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;john&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;ann&quot;</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token function">alert</span><span class="token punctuation">(</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>meetup<span class="token punctuation">)</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">/* 整个解构都被字符串化了
{
  &quot;title&quot;:&quot;Conference&quot;,
  &quot;room&quot;:{&quot;number&quot;:23,&quot;participants&quot;:[&quot;john&quot;,&quot;ann&quot;]},
}
*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>重要的限制：不得有循环引用。</p><p>例如：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> room <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">number</span><span class="token operator">:</span> <span class="token number">23</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> meetup <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;Conference&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">participants</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;john&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;ann&quot;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

meetup<span class="token punctuation">.</span>place <span class="token operator">=</span> room<span class="token punctuation">;</span>       <span class="token comment">// meetup 引用了 room</span>
room<span class="token punctuation">.</span>occupiedBy <span class="token operator">=</span> meetup<span class="token punctuation">;</span> <span class="token comment">// room 引用了 meetup</span>

<span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>meetup<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Error: Converting circular structure to JSON</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这里，转换失败了，因为循环引用：<code>room.occupiedBy</code> 引用了 <code>meetup</code>，<code>meetup.place</code> 引用了 <code>room</code>：</p><h2 id="排除和转换-replacer" tabindex="-1"><a class="header-anchor" href="#排除和转换-replacer" aria-hidden="true">#</a> 排除和转换：replacer</h2><p><code>JSON.stringify</code> 的完整语法是：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> json <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>value<span class="token punctuation">[</span><span class="token punctuation">,</span> replacer<span class="token punctuation">,</span> space<span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><p>value</p><p>要编码的值。</p></li><li><p>replacer</p><p>要编码的属性数组或映射函数 <code>function(key, value)</code>。</p></li><li><p>space</p><p>用于格式化的空格数量</p></li></ul><p>大部分情况，<code>JSON.stringify</code> 仅与第一个参数一起使用。但是，如果我们需要微调替换过程，比如过滤掉循环引用，我们可以使用 <code>JSON.stringify</code> 的第二个参数。</p><p>如果我们传递一个属性数组给它，那么只有这些属性会被编码。</p><p>例如：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> room <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">number</span><span class="token operator">:</span> <span class="token number">23</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> meetup <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;Conference&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">participants</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;John&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;Alice&quot;</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">place</span><span class="token operator">:</span> room <span class="token comment">// meetup 引用了 room</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

room<span class="token punctuation">.</span>occupiedBy <span class="token operator">=</span> meetup<span class="token punctuation">;</span> <span class="token comment">// room 引用了 meetup</span>

<span class="token function">alert</span><span class="token punctuation">(</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>meetup<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;title&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;participants&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// {&quot;title&quot;:&quot;Conference&quot;,&quot;participants&quot;:[{},{}]}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里可能过于严格了。属性列表应用于了整个对象结构。所以 <code>participants</code> 是空的，因为 <code>name</code> 不在列表中。</p><p>让我们包含除了会导致循环引用的 <code>room.occupiedBy</code> 之外的所有属性：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> room <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">number</span><span class="token operator">:</span> <span class="token number">23</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> meetup <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;Conference&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">participants</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;John&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;Alice&quot;</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">place</span><span class="token operator">:</span> room <span class="token comment">// meetup 引用了 room</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

room<span class="token punctuation">.</span>occupiedBy <span class="token operator">=</span> meetup<span class="token punctuation">;</span> <span class="token comment">// room 引用了 meetup</span>

<span class="token function">alert</span><span class="token punctuation">(</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>meetup<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;title&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;participants&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;place&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;name&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;number&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">/*
{
  &quot;title&quot;:&quot;Conference&quot;,
  &quot;participants&quot;:[{&quot;name&quot;:&quot;John&quot;},{&quot;name&quot;:&quot;Alice&quot;}],
  &quot;place&quot;:{&quot;number&quot;:23}
}
*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在，除 <code>occupiedBy</code> 以外的所有内容都被序列化了。但是属性的列表太长了。</p><p>幸运的是，我们可以使用一个函数代替数组作为 <code>replacer</code>。</p><p>该函数会为每个 <code>(key,value)</code> 对调用并返回“已替换”的值，该值将替换原有的值。如果值被跳过了，则为 <code>undefined</code>。</p><p>在我们的例子中，我们可以为 <code>occupiedBy</code> 以外的所有内容按原样返回 <code>value</code>。为了 <code>occupiedBy</code>，下面的代码返回 <code>undefined</code>：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> room <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">number</span><span class="token operator">:</span> <span class="token number">23</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> meetup <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;Conference&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">participants</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;John&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;Alice&quot;</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">place</span><span class="token operator">:</span> room <span class="token comment">// meetup 引用了 room</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

room<span class="token punctuation">.</span>occupiedBy <span class="token operator">=</span> meetup<span class="token punctuation">;</span> <span class="token comment">// room 引用了 meetup</span>

<span class="token function">alert</span><span class="token punctuation">(</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>meetup<span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token function">replacer</span><span class="token punctuation">(</span><span class="token parameter">key<span class="token punctuation">,</span> value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">alert</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>key<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>value<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>key <span class="token operator">==</span> <span class="token string">&#39;occupiedBy&#39;</span><span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token keyword">undefined</span> <span class="token operator">:</span> value<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">/* key:value pairs that come to replacer:
:             [object Object]
title:        Conference
participants: [object Object],[object Object]
0:            [object Object]
name:         John
1:            [object Object]
name:         Alice
place:        [object Object]
number:       23
*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>请注意 <code>replacer</code> 函数会获取每个键/值对，包括嵌套对象和数组项。它被递归地应用。<code>replacer</code> 中的 <code>this</code> 的值是包含当前属性的对象。</p><p>第一个调用很特别。它是使用特殊的“包装对象”制作的：<code>{&quot;&quot;: meetup}</code>。换句话说，第一个 <code>(key, value)</code> 对的键是空的，并且该值是整个目标对象。这就是上面的示例中第一行是 <code>&quot;:[object Object]&quot;</code> 的原因。</p><p>这个理念是为了给 <code>replacer</code> 提供尽可能多的功能：如果有必要，它有机会分析并替换/跳过整个对象。</p><p>摘自 <a href="https://zh.javascript.info/json" target="_blank" rel="noopener noreferrer">javascript现代教程`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/posts/JavaScipt基础/JavaScript方法/JSON方法.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const JSON___html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "JSON方法.html.vue"]]);
export {
  JSON___html as default
};
