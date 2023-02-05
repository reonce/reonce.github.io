import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="_14-1-4-text类型" tabindex="-1"><a class="header-anchor" href="#_14-1-4-text类型" aria-hidden="true">#</a> 14.1.4 Text类型</h1><h2 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h2><p>Text 节点是由 Text 类型表示，也就是标签之间的文本字符</p><p>暴露了几个方法：</p><ul><li>appendData(text)</li><li>deleteData(offset, count) 在 offset 开始删除 count个字符</li><li>insertData(offset, text) 在 offset 位置插入文本</li><li>replaceData(offset, count, text) 在 用 text 替换从 offset 开始的 count 个字符</li><li>splitText(offset) 在 offset 位置将文本拆分成两个文本节点</li><li>subStringData(offset, count) 提取从位置 offset 到 offset+count 的文本</li></ul><p>只要开始标签和结束标签之间有内容（包括空格） 就会创建一个文本节点</p><h2 id="创建文本节点" tabindex="-1"><a class="header-anchor" href="#创建文本节点" aria-hidden="true">#</a> 创建文本节点</h2><p>Document.createTextNode() 接收一个要插入节点的文本， ownerDocument 会被设置为 document</p><p>一个元素中可以包含多个文本节点</p><h2 id="规范化文本节点" tabindex="-1"><a class="header-anchor" href="#规范化文本节点" aria-hidden="true">#</a> 规范化文本节点</h2><p>在<strong>14.1 node节点</strong> 章节，有提到的方法 <code>normalize（）</code> 可以将同一个标签内的文本节点合并并且去除空的文本节点</p><h2 id="拆分文本节点" tabindex="-1"><a class="header-anchor" href="#拆分文本节点" aria-hidden="true">#</a> 拆分文本节点</h2><p>和 <code>normalize()</code> 方法相反的方法 <code>splitText()</code> 接收一个参数，需要拆分的位置。可以把一个文本节点拆分成两个</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/posts/JavaScipt基础/红宝书/14.1.4 Text类型.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _14_1_4_Text___html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "14.1.4 Text类型.html.vue"]]);
export {
  _14_1_4_Text___html as default
};
