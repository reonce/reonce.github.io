import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="事件" tabindex="-1"><a class="header-anchor" href="#事件" aria-hidden="true">#</a> 事件</h1><p>JS与HTML的交互是通过<strong>事件</strong>实现的，事件代表文档或浏览器窗口中某个有意义的时刻。</p><p>可以使用仅在事件发生时执行的<strong>监听器</strong>（也叫处理程序）订阅事件。在传统软件工程领域，这个模型叫“观察者模式”。</p><h2 id="事件流" tabindex="-1"><a class="header-anchor" href="#事件流" aria-hidden="true">#</a> 事件流</h2><p>事件流描述了页面接受时间的顺序。IE支持事件冒泡流，而Netscape Communicator支持事件捕获流。</p><h2 id="事件属性和方法" tabindex="-1"><a class="header-anchor" href="#事件属性和方法" aria-hidden="true">#</a> 事件属性和方法</h2><p><code>preventDefault()</code> 用于取消事件的默认行为，只有<code>cancelabel</code>为true才可以调用这个方法。</p><p><code>stopPropagation()</code>用于取消所有后续事件捕获或事件冒泡。只有<code>bubbles</code>为true才可以调用。</p><p><code>stopImmediatePropagation()</code>用于取消所有后续事件捕获或事件冒泡，并阻止调用任何后续事件处理程序。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/posts/JavaScipt基础/红宝书/事件.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ___html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "事件.html.vue"]]);
export {
  ___html as default
};
