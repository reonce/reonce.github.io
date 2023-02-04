import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="有20个异步请求-如何保持同时三个的并发" tabindex="-1"><a class="header-anchor" href="#有20个异步请求-如何保持同时三个的并发" aria-hidden="true">#</a> 有20个异步请求，如何保持同时三个的并发</h1></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/posts/手写算法系列/多异步任务保持3个并发.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _______3____html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "多异步任务保持3个并发.html.vue"]]);
export {
  _______3____html as default
};
