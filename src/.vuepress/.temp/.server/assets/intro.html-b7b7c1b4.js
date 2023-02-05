import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="关于" tabindex="-1"><a class="header-anchor" href="#关于" aria-hidden="true">#</a> 关于</h1><h2 id="关于笔者" tabindex="-1"><a class="header-anchor" href="#关于笔者" aria-hidden="true">#</a> 关于笔者</h2><p>你好，我叫饮东，山西临汾人，本科软工专业毕业，爱好阅读、写作和散步 <br> 目前是一名普通的前端程序员，从事 React Web端的开发工作<br></p><p>想了解更多笔者的学习经历，可以访问我的 <a href="https://github.com/reonce/notes-and-essays" target="_blank" rel="noopener noreferrer">日更随笔`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p><h2 id="关于博客" tabindex="-1"><a class="header-anchor" href="#关于博客" aria-hidden="true">#</a> 关于博客</h2><p>由于做过迁移，文章的<strong>写作时间</strong>已经凌乱，所幸这个主题的博客可以通过文件夹形式检索文章<br> 主题名叫做 <code>vuepress-theme-hope</code> （既然免费使用，就免费推广一下~)</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/intro.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const intro_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "intro.html.vue"]]);
export {
  intro_html as default
};
