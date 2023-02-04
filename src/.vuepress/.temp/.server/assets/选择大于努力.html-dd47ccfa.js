import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="选择比努力重要" tabindex="-1"><a class="header-anchor" href="#选择比努力重要" aria-hidden="true">#</a> 选择比努力重要</h1><blockquote><p>这是一篇鸡汤文章，由于22年的互联网行情，各大厂都在裁员，令人在准备阶段容易泄气。</p></blockquote><p>方向比选择重要，选择比努力重要。</p><p>想清楚自己想要什么，就必须做出选择。</p><p>有一个事情是肯定的，在这家公司我得不到我想要的东西。</p><p>准备改变，进行改变，改变。</p><p>从结果进行导向，那就是我一定要完成这件事，这样有时候会在泄气的时候说服自己，恢复勇气。</p><p>2022.5.31</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/posts/感悟/选择大于努力.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _______html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "选择大于努力.html.vue"]]);
export {
  _______html as default
};
