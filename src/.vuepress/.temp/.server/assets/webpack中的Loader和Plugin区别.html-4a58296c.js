import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="webpack中的loader和plugin区别" tabindex="-1"><a class="header-anchor" href="#webpack中的loader和plugin区别" aria-hidden="true">#</a> webpack中的Loader和Plugin区别</h1><h2 id="loader" tabindex="-1"><a class="header-anchor" href="#loader" aria-hidden="true">#</a> Loader</h2><p>Loader：直译为&quot;加载器&quot;，主要是解析一些非js文件的，例如：<code>babel-loader</code>、 <code>less-loader</code>、<code>file-loader</code>等 Webpack将一切文件视为模块，但是webpack原生是只能解析js文件，如果想将其他文件也打包的话，就会用到<code>loader</code>。 所以Loader的作用是让webpack拥有了加载和解析非JavaScript文件的能力。</p><h2 id="plugin" tabindex="-1"><a class="header-anchor" href="#plugin" aria-hidden="true">#</a> Plugin</h2><p>Plugin:直译为&quot;插件&quot;，可以扩展webpack的功能，让webpack具有更多的灵活性。 在 Webpack 运行的生命周期中会广播出许多事件，Plugin 可以监听这些事件，在合适的时机通过 Webpack 提供的 API 改变输出结果。例如<code>html-webpack-plugin</code>、<code>eslint-webpack-plugin</code>等等。简易实战：在代码中加入版权所属、写作日期，都可以用Plugin实现.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/posts/前端工程化/webpack中的Loader和Plugin区别.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const webpack__Loader_Plugin___html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "webpack中的Loader和Plugin区别.html.vue"]]);
export {
  webpack__Loader_Plugin___html as default
};
