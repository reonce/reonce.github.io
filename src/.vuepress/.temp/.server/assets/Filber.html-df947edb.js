import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="fiber" tabindex="-1"><a class="header-anchor" href="#fiber" aria-hidden="true">#</a> Fiber</h1><h4 id="回答关键的几个的地方" tabindex="-1"><a class="header-anchor" href="#回答关键的几个的地方" aria-hidden="true">#</a> 回答关键的几个的地方</h4><ol><li><p>递归树改成链表，可中断</p></li><li><p>链表节点有4个关键属性，return父亲，child子节点，sibling兄弟，alternate拷贝</p></li><li><p>DFS，一路到底，再向上遍历兄弟 就这几个就差不多了，基本不会再问了。其他再补充比如react自己实现了reaquestIdleCallback</p></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/posts/React相关解读/Filber.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Filber_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "Filber.html.vue"]]);
export {
  Filber_html as default
};
