import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="你如何对网站的文件和资源进行优化的" tabindex="-1"><a class="header-anchor" href="#你如何对网站的文件和资源进行优化的" aria-hidden="true">#</a> 你如何对网站的文件和资源进行优化的</h1><p>链接：</p><p><a href="https://www.nowcoder.com/questionTerminal/89089a6c27fb4749bf73b25c347a2051" target="_blank" rel="noopener noreferrer">https://www.nowcoder.com/questionTerminal/89089a6c27fb4749bf73b25c347a2051`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p><ol><li>尽可能减少http请求次数，将css, js, 图片各自合并</li><li>使用CDN，降低通信距离</li><li>添加Expire/Cache-Control头</li><li>启用Gzip压缩文件</li><li>将css放在页面最上面</li><li>将script放在页面最下面</li><li>避免在css中使用表达式</li><li>将css, js都放在外部文件中</li><li>减少DNS查询</li><li>最小化css, js，减小文件体积</li><li>避免重定向</li><li>移除重复脚本</li><li>配置实体标签ETag</li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/posts/性能优化/你如何对网站的文件和资源进行优化的 2979065a206a4a3d8c82ff7b672cab0c.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __________________2979065a206a4a3d8c82ff7b672cab0c_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "你如何对网站的文件和资源进行优化的 2979065a206a4a3d8c82ff7b672cab0c.html.vue"]]);
export {
  __________________2979065a206a4a3d8c82ff7b672cab0c_html as default
};
