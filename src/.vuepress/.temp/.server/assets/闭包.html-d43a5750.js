import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="闭包" tabindex="-1"><a class="header-anchor" href="#闭包" aria-hidden="true">#</a> 闭包</h1><p><strong>闭包</strong>指的是那些引用了另一个函数作用域中变量的函数，通常是在嵌套函数中实现的。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">compare</span><span class="token punctuation">(</span><span class="token parameter">value1<span class="token punctuation">,</span> value2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span>value1 <span class="token operator">===</span> value2<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> value1 <span class="token operator">&gt;</span> value2 <span class="token operator">?</span> <span class="token number">1</span> <span class="token operator">:</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token function">compare</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第一次调用compare()时，会为它创建一个包含arguments、value1和value2的<strong>活动对象</strong>，这个对象是作用域链上的第一个对象。而全局上下文的变量对象则是compare()作用域链上的第二个对象，其中包含this、result和compare。</p><p>函数执行时，每个执行上文中都会有一个包含其中变量的对象。全局上下文中叫<strong>变量对象</strong>，它会咋代码执行期间始终存在。而函数局部上下文中叫<strong>活动对象</strong>，只在函数执行期间存在。在定义<code>compare()</code>函数时，就会为他创建作用域链，预装载全局变量对象，并保存在内部的**[[Scope]]<strong>中。在调用这个函数的时候，会创建相应的执行上下文，然后通过复制函数的</strong>[[Scope]]**来创建其作用域链。接着会创建爱你函数的活动对象并将其推入作用域链的前端。</p><p>这个例子中，<code>compare()</code>函数执行上下文的作用域链中有两个变量对象：局部变量对象和全局变量对象。<strong>作用域链</strong>其实是一个<strong>包含指针的列表</strong>，每个指针分别指向一个变量对象，但物理上并不会包含相应的对象。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> compare <span class="token operator">=</span> <span class="token function">createComparisonFunction</span><span class="token punctuation">(</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token function">compare</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Nicholas&#39;</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Matt&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>在以上代码中，<code>createComparisonFunction()</code>返回匿名函数后，他的作用域链被初始化微包含<code>createComparisonFunction()</code>的活动对象和全局变量对象。这样匿名函数就可以访问到它能访问的全部变量对象。但是有个有意思的副作用是，<u><code>createComparisonFunction()</code>的活动对象并不能在它执行完毕后销毁</u>，<u>因为匿名函数中仍然保持着对它的引用。</u>直到匿名函数被销毁后才会被销毁；这里可以把<code>compare</code>的值设置为等于null，会接触对函数的引用，从而让垃圾回收程序可以将内存释放掉。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/posts/JavaScipt基础/红宝书/闭包.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ___html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "闭包.html.vue"]]);
export {
  ___html as default
};
