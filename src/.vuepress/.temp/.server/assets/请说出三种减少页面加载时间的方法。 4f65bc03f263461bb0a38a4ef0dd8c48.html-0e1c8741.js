import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="请说出三种减少页面加载时间的方法。" tabindex="-1"><a class="header-anchor" href="#请说出三种减少页面加载时间的方法。" aria-hidden="true">#</a> 请说出三种减少页面加载时间的方法。</h1><p>1.减少HTTP请求；</p><p>2.合并压缩Js/css文件；</p><p>3.使用缓存manifest；</p><p>4.服务器端开启gzip；</p><p>5.使用CDN，用户可以就近获取所需要的资源，访问速度有保障，稳定性也有保障</p><p>6.外部JS和CSS放底下</p><p>7.尽可能少的操作DOM，某些需要重复操作的DOM可以放变量里</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/posts/性能优化/请说出三种减少页面加载时间的方法。 4f65bc03f263461bb0a38a4ef0dd8c48.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __________________4f65bc03f263461bb0a38a4ef0dd8c48_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "请说出三种减少页面加载时间的方法。 4f65bc03f263461bb0a38a4ef0dd8c48.html.vue"]]);
export {
  __________________4f65bc03f263461bb0a38a4ef0dd8c48_html as default
};
