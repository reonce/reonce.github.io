import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="json" tabindex="-1"><a class="header-anchor" href="#json" aria-hidden="true">#</a> JSON</h1><p><code>JSON.stringify(obj, []/fun, number/string)</code>接收三个参数，第一个是要序列化的对象。第二个参数可以是一个包含要序列化对象的键的数组，或者是一个函数，这个函数接收<code>(key, value)</code>两个参数。第三个参数表示缩进。</p><p>对象中可以定义<code>toJSON()</code>方法，序列化json时，将返回对象定义的<code>toJSON()</code>方法的返回值。</p><p><code>JSON.parse()</code>方法也可以接受一个函数作为第二个参数，这个参数被称为<strong>复活函数</strong>。复活函数接受两个参数（key, value），也需要返回值，如果返回undefined，则结果中会删除相应的键。如果返回了其他值，则该值会成为响应键的值从插入到结果中。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/posts/JavaScipt基础/红宝书/JSON.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const JSON_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "JSON.html.vue"]]);
export {
  JSON_html as default
};
