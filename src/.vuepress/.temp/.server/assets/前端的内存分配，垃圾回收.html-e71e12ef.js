import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="前端的内存分配-垃圾回收" tabindex="-1"><a class="header-anchor" href="#前端的内存分配-垃圾回收" aria-hidden="true">#</a> 前端的内存分配，垃圾回收</h1><h2 id="内存的生命周期" tabindex="-1"><a class="header-anchor" href="#内存的生命周期" aria-hidden="true">#</a> 内存的生命周期</h2><ul><li>内存分配： 生命变量，函数，对象的时候，js会自动分配内存</li><li>内存使用： 调用的时候，使用的时候</li><li>内存回收： 下面讲</li></ul><h2 id="js中的垃圾回收机制" tabindex="-1"><a class="header-anchor" href="#js中的垃圾回收机制" aria-hidden="true">#</a> js中的垃圾回收机制</h2><h3 id="引用计数垃圾回收" tabindex="-1"><a class="header-anchor" href="#引用计数垃圾回收" aria-hidden="true">#</a> <strong>引用计数垃圾回收</strong></h3><p>如果a对象对b对象有访问权限，那么称为a引用b对象。</p><p>检查b有没有被引用，如果没有使用了，回收。</p><p>缺陷： <strong>循环引用</strong>，a引用了b，b也引用了a，造成内存泄漏。</p><h3 id="标记清除算法" tabindex="-1"><a class="header-anchor" href="#标记清除算法" aria-hidden="true">#</a> 标记清除算法</h3><p>回收无法达到的对象</p><ol><li>运行的时候给存储在内存的所有变量加上标记</li><li>从根部触发，能触及的对象，把标记清除</li><li>哪些有标记的就被视为即将要删除的变量</li></ol><h2 id="js中有哪些常见的内存泄露" tabindex="-1"><a class="header-anchor" href="#js中有哪些常见的内存泄露" aria-hidden="true">#</a> js中有哪些常见的内存泄露</h2><ol><li>全局变量，不会被回收的。如果不用了，一定要赋值为null</li><li>未被清除的定时器和回调，它会一直存在</li><li>闭包，一个内部函数有权访问包含它的一个函数的一个变量</li><li>dom的引用</li></ol><div class="language-tsx line-numbers-mode" data-ext="tsx"><pre class="language-tsx"><code><span class="token keyword">const</span> ele <span class="token operator">=</span> <span class="token punctuation">{</span>
	image<span class="token operator">:</span> docment<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;image&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 即使这个dom被删了，ele中对它的引用依然存在</span>
document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">removeChild</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;image&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// 解决</span>
ele<span class="token punctuation">.</span>image <span class="token operator">=</span> <span class="token keyword">null</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="如何避免内存泄漏" tabindex="-1"><a class="header-anchor" href="#如何避免内存泄漏" aria-hidden="true">#</a> 如何避免内存泄漏</h2><ol><li>减少不必要的全局变量</li><li>使用完数据后，及时解除引用</li></ol><h2 id="实现sizeof函数-传入一个参数object-计算这个object占用了多少字节的内存" tabindex="-1"><a class="header-anchor" href="#实现sizeof函数-传入一个参数object-计算这个object占用了多少字节的内存" aria-hidden="true">#</a> 实现sizeOf函数，传入一个参数object，计算这个object占用了多少字节的内存</h2><ul><li>number: 64二位存储， 8字节</li><li>string： 每个长度，2字节</li><li>boolean: 4字节</li></ul><p>考察点：</p><ol><li>对于计算机基础，js内存基础的考察</li><li>递归、细节处理</li></ol><div class="language-tsx line-numbers-mode" data-ext="tsx"><pre class="language-tsx"><code><span class="token keyword">const</span> testData <span class="token operator">=</span> <span class="token punctuation">{</span>
  a<span class="token operator">:</span> <span class="token number">111</span><span class="token punctuation">,</span>
  b<span class="token operator">:</span> <span class="token string">&quot;ccc&quot;</span><span class="token punctuation">,</span>
  <span class="token number">222</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 存储已经计算过的对象引用</span>
<span class="token keyword">const</span> seen <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">WeakSet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 对于对象的内存计算</span>
<span class="token keyword">function</span> <span class="token function">sizeOfObject</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>obj <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">let</span> size <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> key <span class="token keyword">in</span> object<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 对象的引用可能被重新计算，因此需要存储进行判断</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> object<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">&quot;object&quot;</span> <span class="token operator">&amp;&amp;</span> <span class="token keyword">typeof</span> object<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>seen<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>object<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">continue</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      seen<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>object<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 对象的键也要占内存</span>
    size <span class="token operator">+=</span> <span class="token function">sizeOf</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
    size <span class="token operator">+=</span> <span class="token function">sizeOf</span><span class="token punctuation">(</span>object<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> size<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">sizeOf</span><span class="token punctuation">(</span>params<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> objectType <span class="token operator">=</span> <span class="token keyword">typeof</span> object<span class="token punctuation">;</span>

  <span class="token keyword">switch</span> <span class="token punctuation">(</span>objectType<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token string">&quot;string&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> object<span class="token punctuation">.</span>length <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">case</span> <span class="token string">&quot;boolean&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token number">4</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">case</span> <span class="token string">&quot;number&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token number">4</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">case</span> <span class="token string">&quot;object&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token builtin">Array</span><span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>object<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 数组的处理</span>
        <span class="token keyword">return</span> object<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>sizeOf<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span>res<span class="token punctuation">,</span> cur<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> res <span class="token operator">+</span> cur<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token comment">// 对象的处理</span>
        <span class="token keyword">return</span> <span class="token function">sizeOfObject</span><span class="token punctuation">(</span>object<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">default</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/posts/浏览器相关知识/前端的内存分配，垃圾回收.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _____________html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "前端的内存分配，垃圾回收.html.vue"]]);
export {
  _____________html as default
};
