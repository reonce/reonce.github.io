import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h1><p>BOM是浏览器对象模型，核心是window对象，表示浏览器的实例。</p><h2 id="global作用域" tabindex="-1"><a class="header-anchor" href="#global作用域" aria-hidden="true">#</a> Global作用域</h2><p>用var声明的变量和方法会自动声明到全局作用域，let和const不行</p><h2 id="窗口关系和位置" tabindex="-1"><a class="header-anchor" href="#窗口关系和位置" aria-hidden="true">#</a> 窗口关系和位置</h2><p><code>top</code>始终指向最上层的窗口，即浏览器窗口本身。而<code>parent</code>对象始终指向当前窗口的父窗口，如果当前窗口是最上层窗口，则parent等于top（等于window)。 <code>self</code>对象是终极window对象，它是为了和top、parent保持一致。 <code>moveTo</code>和<code>moveBy</code>可以移动窗口位置。它们都接受两个参数，表示移动的x和y，单位都是px。前者是移动到新位置的坐标，后者是相对于当前坐标移动多少。</p><h3 id="像素比" tabindex="-1"><a class="header-anchor" href="#像素比" aria-hidden="true">#</a> 像素比</h3><p>window。devicePixelRatio属性提供了分辨率缩放的倍数功能。例如在物理分辨率1920<em>1080的屏幕下展示逻辑分辨率为640</em>320，它的值就是3。</p><h2 id="窗口大小" tabindex="-1"><a class="header-anchor" href="#窗口大小" aria-hidden="true">#</a> 窗口大小</h2><p>现代浏览器都支持4个属性：innerWidth、innerHediht、outerWidth、outerHeight</p><p>前两个表示当前浏览器窗口的视口大小，后两个表示浏览器自身的窗口大小</p><p>document.documentElement.clientWidth和document.documentElement.clientHeight会返回当前页面视口的宽度和高度</p><p>获取页面视口大小的方法：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> pageWidth <span class="token operator">=</span> window<span class="token punctuation">.</span>innerWidth<span class="token punctuation">,</span> pageHeight <span class="token operator">=</span> window<span class="token punctuation">.</span>innerHeight<span class="token punctuation">;</span>
<span class="token comment">// 如果没获取到视口大小的值</span>
<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> pageWidth <span class="token operator">!==</span> <span class="token string">&#39;number&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// CSS1Compat表示标准模式，BackCompat表示怪异模式</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span>compatMode <span class="token operator">===</span> <span class="token string">&#39;CSS1Compat&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    pageWidth <span class="token operator">=</span> document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>clientWidth<span class="token punctuation">;</span>
    pageHeight <span class="token operator">=</span> document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>clientheight<span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    pageWidth <span class="token operator">=</span> document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>clientWidth<span class="token punctuation">;</span>
    pageHeight <span class="token operator">=</span> document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>clientheight<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>resiezeTo</code>和<code>resizeBy</code>方法可以调整窗口大小，这两个方法都接收两个参数。前者接收要调整到的尺寸宽度和高度，后者接收相对现在尺寸要缩放多少（可以是负值）</p><p>和移动窗口的方法一样，调整窗口大小的方法可能被浏览器禁用。</p><h2 id="documnet和window的区别" tabindex="-1"><a class="header-anchor" href="#documnet和window的区别" aria-hidden="true">#</a> documnet和window的区别</h2><p><code>documnet</code> 是 <code>window</code>的一部分，属于被包含关系。</p><p>document 指窗体，表示页面文档创建的一个对象，它是一个只读属性</p><p>window 指窗体，表示的是浏览器的实例</p><p>用户不能改变 document.location(因为这是当前显示文档的位置)。但是可以改变 window.location (用其它文档取代当前文档)window.location 本身也是一个对象, 而 document.location 不是对象。</p><h2 id="window-open-导航和打开新窗口" tabindex="-1"><a class="header-anchor" href="#window-open-导航和打开新窗口" aria-hidden="true">#</a> window.open 导航和打开新窗口</h2><p><code>window.open</code>可接收四个参数：要加载的URL、目标窗口、特性字符串和表示新窗口在浏览器历史记录中是否替代当前加载页（boolean）</p><p>特性字符串选项有很多都被禁用了，可配置的包括窗口大小、窗口高度、是否显示地址栏/菜单栏等，书中在P365</p><p>可以用一个值接收它，并进行操作（同样很多操作都被浏览器禁止了）</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> wroWin <span class="token operator">=</span> window<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">&#39;http://xxxx&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;trowWindow&#39;</span><span class="token punctuation">,</span><span class="token string">&quot;...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 缩放</span>
wroWin<span class="token punctuation">.</span><span class="token function">resizeTo</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span>
<span class="token comment">// 关闭窗口，需要经过用户确认</span>
wroWin<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>worWin<span class="token punctuation">.</span>closed<span class="token punctuation">)</span> <span class="token comment">// true</span>
<span class="token comment">// 指向window的指针</span>
wroWin<span class="token punctuation">.</span>opener <span class="token operator">===</span> window   <span class="token comment">//true</span>
<span class="token comment">// 切断与原始页面的联系,独立占用进程</span>
wroWin<span class="token punctuation">.</span>opener <span class="token operator">=</span> <span class="token keyword">null</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/posts/JavaScipt基础/红宝书/第十二章BOM12.1.1-6.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ____BOM12_1_16_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "第十二章BOM12.1.1-6.html.vue"]]);
export {
  ____BOM12_1_16_html as default
};
