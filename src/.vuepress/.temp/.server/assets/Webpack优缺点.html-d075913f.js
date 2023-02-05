import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="webpack优缺点" tabindex="-1"><a class="header-anchor" href="#webpack优缺点" aria-hidden="true">#</a> Webpack优缺点</h1><p>现在前端主流的打包工具主要以 Webpack 为代表，但随着项目规模的发展，构建方面的痛点越来越突出，最大的感受就是<strong>太慢了</strong>，一方面项目冷启动时必须递归打包整个项目的依赖树，另一方面 JavaScript 语言本身(解释执行、单线程执行)的限制，导致构建性能遇到瓶颈。</p><p>在这样的背景下，一些被称为 Bundleless (或者 Unbundled) 的构建工具应运而生，诸如 Snowpack、Vite，其中 Vite 最近在社区的呼声越来越高，GitHub 上的 star 30k+，甚至已经超过 vue3 仓库的 star 数(目前 24.1k)，可见其影响力之大。</p><p><a href="https://juejin.cn/post/7005731645911203877" target="_blank" rel="noopener noreferrer">https://juejin.cn/post/7005731645911203877`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/posts/前端工程化/Webpack优缺点.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Webpack____html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "Webpack优缺点.html.vue"]]);
export {
  Webpack____html as default
};
