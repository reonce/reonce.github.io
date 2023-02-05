import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>前两节提到的特性检测和用户代理检测是两种常用的识别浏览器方式。而navigator和screen对象也提供了对页面所在软件环境的信息。</p><h2 id="navigator" tabindex="-1"><a class="header-anchor" href="#navigator" aria-hidden="true">#</a> navigator</h2><h3 id="navigator-oscpu" tabindex="-1"><a class="header-anchor" href="#navigator-oscpu" aria-hidden="true">#</a> navigator.oscpu</h3><p>这个字段返回了操作系统、系统架构相关信息</p><h3 id="navigator-vendor" tabindex="-1"><a class="header-anchor" href="#navigator-vendor" aria-hidden="true">#</a> navigator.vendor</h3><p>返回浏览器的开发商信息</p><h3 id="navigator-platform" tabindex="-1"><a class="header-anchor" href="#navigator-platform" aria-hidden="true">#</a> navigator.platform</h3><p>返回一个表示浏览器所在操作系统的字符串</p><h2 id="screen" tabindex="-1"><a class="header-anchor" href="#screen" aria-hidden="true">#</a> screen</h2><p>属性不常用，可以获取显示器每像素颜色位深、屏幕角度等</p><h2 id="浏览器元数据" tabindex="-1"><a class="header-anchor" href="#浏览器元数据" aria-hidden="true">#</a> 浏览器元数据</h2><h3 id="geolocation-api-获取地理位置" tabindex="-1"><a class="header-anchor" href="#geolocation-api-获取地理位置" aria-hidden="true">#</a> Geolocation API 获取地理位置</h3><p>navigator.geolocation属性暴露了<strong>Geolocation API</strong>，可以通过它获取当前设备所在的地理位置。 要获取当前的位置，可以通过调用<code>getCurrentPosition</code>来使用，如下：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 返回两个回调函数，第一个是当前位置，第二个是获取失败时的提示信息,第三个可以传入配置（精度等）</span>
navigator<span class="token punctuation">.</span>geolocation<span class="token punctuation">.</span><span class="token function">getCurrentPosition</span><span class="token punctuation">(</span>
<span class="token punctuation">(</span><span class="token parameter">position</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span><span class="token punctuation">{</span>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>position<span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">(</span><span class="token parameter">positionError</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>positionError<span class="token punctuation">)</span><span class="token punctuation">}</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>注意，当它获取不到时，通常软件上会使用你当前的wifi和蜂窝信号，拿到这些信息后，通过查找数据库对比编号格式相同的wifi来确定你的所在位置。</p></blockquote><h2 id="connection-state和networkinformation-api-确定网络状态" tabindex="-1"><a class="header-anchor" href="#connection-state和networkinformation-api-确定网络状态" aria-hidden="true">#</a> Connection State和NetworkInformation Api 确定网络状态</h2><p>navigator.onLine属性返回一个布尔值，表示网络是否连接 此外，navigator还暴露了NetworkInformation Api，通过navigator.connection属性，可以确定当前设备的带宽、最大下行带宽、连接速度和质量</p><h2 id="battery-status-api-查看设备电池及充电状态信息" tabindex="-1"><a class="header-anchor" href="#battery-status-api-查看设备电池及充电状态信息" aria-hidden="true">#</a> Battery Status API 查看设备电池及充电状态信息</h2><h2 id="硬件" tabindex="-1"><a class="header-anchor" href="#硬件" aria-hidden="true">#</a> 硬件</h2><p>可以通过navigator的属性查看硬件设备的 处理器核心数、设备内存大小、最大触电数</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/posts/JavaScipt基础/红宝书/第十三章 客户端检测 13.3 软件与硬件检测（本章完）.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ___________13_3______________html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "第十三章 客户端检测 13.3 软件与硬件检测（本章完）.html.vue"]]);
export {
  ___________13_3______________html as default
};
