import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="proxy和object-defineproperty的区别" tabindex="-1"><a class="header-anchor" href="#proxy和object-defineproperty的区别" aria-hidden="true">#</a> Proxy和Object.defineProperty的区别</h1><p><strong>Proxy的优势如下</strong></p><ul><li>Proxy可以直接监听整个对象而非属性。</li><li>Proxy可以直接监听数组的变化。</li><li>Proxy有13中拦截方法，如<code>ownKeys、deleteProperty、has</code> 等是 <code>Object.defineProperty</code> 不具备的。</li><li>Proxy返回的是一个新对象，我们可以只操作新的对象达到目的，而<code>Object.defineProperty</code>只能遍历对象属性直接修改， 性能角度要好;</li><li>Proxy做为新标准将受到浏览器产商重点持续的性能优化,也就是传说中的新标准的性能红利。</li></ul><p><strong>Object.defineProperty 的优势如下</strong></p><ul><li>兼容性好，支持 IE9，而 Proxy 的存在浏览器兼容性问题,而且无法用 polyfill 磨平。</li></ul><p><strong>Object.defineProperty 不足在于</strong>：</p><ul><li><code>Object.defineProperty</code> 只能劫持对象的属性,因此我们需要对每个对象的每个属性进行遍历。</li><li><code>Object.defineProperty</code>不能监听数组。是通过重写数据的那7个可以改变数据的方法来对数组进行监听的。</li><li><code>Object.defineProperty</code> 也不能对 <code>es6</code> 新产生的 <code>Map</code>,<code>Set</code> 这些数据结构做出监听。</li><li><code>Object.defineProperty</code>也不能监听新增和删除操作，通过 <code>Vue.set()</code>和 <code>Vue.delete</code>来实现响应式的。</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/posts/JavaScipt基础/JavaScript方法/Proxy和Object.defineProperty的区别.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Proxy_Object_defineProperty____html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "Proxy和Object.defineProperty的区别.html.vue"]]);
export {
  Proxy_Object_defineProperty____html as default
};
