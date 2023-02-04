import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="es5实现let与const" tabindex="-1"><a class="header-anchor" href="#es5实现let与const" aria-hidden="true">#</a> ES5实现let与const</h1><p>在es5中，没有块级作用域的概念，只有 <code>函数作用域</code> 的概念。</p><p>webpack进行模块化打包的时候，也需要把不同的函数隔离开，使得各个模块的代码互不影响，它的实现原理也是 <code>IIFE</code></p><h2 id="实现let" tabindex="-1"><a class="header-anchor" href="#实现let" aria-hidden="true">#</a> 实现let</h2><p>使用 <code>IIFE</code> 可以很方便的创建一个块级作用域，在这个块级作用域之外的地方访问其中的变量都会报错。做到了 <code>let</code> 声明中<strong>隔离作用域</strong>和<strong>防止变量声明提升</strong>的概念。</p><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code><span class="token keyword">try</span> <span class="token punctuation">{</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;变量声明提升a&#39;</span><span class="token punctuation">,</span> a<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token keyword">catch</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">{</span>
	console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&#39;变量未被定义&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;内部可以正常使用a&#39;</span><span class="token punctuation">,</span> a<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">try</span> <span class="token punctuation">{</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;外部a&#39;</span><span class="token punctuation">,</span> a<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token keyword">catch</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">{</span>
	console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&#39;变量未被定义&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="实现const" tabindex="-1"><a class="header-anchor" href="#实现const" aria-hidden="true">#</a> 实现const</h2><p>const相比较let要复杂一些，除了制造块级作用域，const 需要额外处理它<strong>值不可变</strong>的特性。</p><p>基于数据类型区分，const声明对于基本类型的数据，不变的就是它的值。而对于引用类型数据，不变的是它的引用的地址，内存地址中的数据是可变的。看一个简单的例子：</p><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
a<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">23</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// {id:1, age:23}</span>

<span class="token comment">/**但是直接进行修改会抛异常*/</span>
a <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token comment">// Assignment to constant variable.</span>
<span class="token comment">// 数组同理</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个例子也就验证了，修改的是内存地址上的数据，而不是引用的“地址”（类似C语言中的指针）</p><p>了解这个概念后，我们也很容易读懂下面这段示例</p><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code><span class="token keyword">const</span> obj1 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">123</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> obj2 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">123</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// 指向不同的内存空间</span>
obj1 <span class="token operator">===</span> obj2 <span class="token comment">// false   </span>

<span class="token keyword">const</span> obj3 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">123</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> obj4 <span class="token operator">=</span> obj3<span class="token punctuation">;</span>
<span class="token comment">// 指向相同的内存空间</span>
obj3 <span class="token operator">===</span> obj4 <span class="token comment">// true</span>
obj3<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">23</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj4<span class="token punctuation">)</span> <span class="token comment">// {id:123, age: 23}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接下来我们利用这个概念看一下具体实现：</p><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code><span class="token keyword">try</span> <span class="token punctuation">{</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;变量声明提升a&#39;</span><span class="token punctuation">,</span> a<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token keyword">catch</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">{</span>
	console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&#39;变量未被定义&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span><span class="token number">123</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span><span class="token number">23</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
	<span class="token keyword">const</span> type <span class="token operator">=</span> <span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token comment">// 引用类型数据</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span>type <span class="token operator">===</span> <span class="token punctuation">[</span>Object<span class="token punctuation">,</span> Object<span class="token punctuation">]</span> <span class="token operator">||</span> type <span class="token operator">===</span> <span class="token punctuation">[</span>Object<span class="token punctuation">,</span> Array<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">var</span> b <span class="token operator">=</span> a<span class="token punctuation">;</span>
		a<span class="token punctuation">.</span>sex <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span><span class="token punctuation">(</span>a <span class="token operator">!==</span>b<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&#39;Assignment to constant variable.&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			a <span class="token operator">=</span> b<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
		 <span class="token comment">// 基本类型</span>
			<span class="token keyword">var</span> pre <span class="token operator">=</span> a<span class="token punctuation">;</span>
			<span class="token keyword">if</span><span class="token punctuation">(</span>a <span class="token operator">!==</span> pre<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&#39;Assignment to constant variable.&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
				a <span class="token operator">=</span> pre<span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
		console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;这是作用域中的a&#39;</span><span class="token punctuation">,</span> a<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">try</span> <span class="token punctuation">{</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;外部a&#39;</span><span class="token punctuation">,</span> a<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token keyword">catch</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">{</span>
	console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&#39;变量未被定义&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（小黄书上 p63）补充： 试用 try..catch的组合更加通用。IIFE作为函数，可能会影响this、return、break、continue。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/posts/手写算法系列/ES5实现let与const 3f9f5daaef2448dca1a3e7e8e8474461.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ES5__let_const_3f9f5daaef2448dca1a3e7e8e8474461_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "ES5实现let与const 3f9f5daaef2448dca1a3e7e8e8474461.html.vue"]]);
export {
  ES5__let_const_3f9f5daaef2448dca1a3e7e8e8474461_html as default
};
