import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="script-元素" tabindex="-1"><a class="header-anchor" href="#script-元素" aria-hidden="true">#</a> <code>&lt;Script&gt;</code>元素</h2><h3 id="crossorigin" tabindex="-1"><a class="header-anchor" href="#crossorigin" aria-hidden="true">#</a> crossorigin</h3><blockquote><p>涉及到的元素 1.script 2.link 3.img 4.audio 5.video</p></blockquote><p>当浏览器请求这些标签的时候，可以配置跨源</p><p><strong>跨源</strong> origin由三部分组成</p><p>源指的是 协议、域名、端口。 即1.protocol 2.domain 3.port</p><p>可以通过设置“凭据模式”：</p><ol><li><code>ananymous</code> 表示不包含凭据，就是不设置cookie，跨源的时候不在请求中附加值，保持匿名请求</li><li><code>use-credentials</code>表示在请求中包含凭据，cookie、tls证书、http认证（用户身份）</li><li>不设置这个属性，或者值是&quot;&quot;，相当于<code>ananymous</code></li></ol><h4 id="intergrity" tabindex="-1"><a class="header-anchor" href="#intergrity" aria-hidden="true">#</a> intergrity</h4><p>完整性。涉及子资源完整性，子资源指通过html页面引用的外部资源。</p><p>为了防止外部攻击篡改子资源。</p><h2 id="可以跟上一个散列值算法和base64编码的散列值等-浏览器拿到这个值之后-用第三方服务器返回回来的它自己计算的散列值和intergrity上的匹配-如果相等就显示-否则返回网络错误。" tabindex="-1"><a class="header-anchor" href="#可以跟上一个散列值算法和base64编码的散列值等-浏览器拿到这个值之后-用第三方服务器返回回来的它自己计算的散列值和intergrity上的匹配-如果相等就显示-否则返回网络错误。" aria-hidden="true">#</a> 可以跟上一个散列值算法和base64编码的散列值等，浏览器拿到这个值之后，用第三方服务器返回回来的它自己计算的散列值和intergrity上的匹配，如果相等就显示，否则返回网络错误。</h2><p>这个值能确保我们使用第三方值，没有被篡改过。</p><h4 id="async和defer" tabindex="-1"><a class="header-anchor" href="#async和defer" aria-hidden="true">#</a> async和defer</h4><ol><li>Parser 表示html引擎的解析，解析html文档的解析器。</li><li>Fetch 表示获取脚本资源。</li><li>Execution 执行脚本依赖等。</li></ol><p><code>defer</code>属性会异步加载脚本，但是执行脚本是同步的</p><p><code>async</code>属性是异步加载和异步执行，加载完成脚本之后就执行</p><p><code>type=module</code>默认是使用<code>defer</code>的，从入口文件开始，碰到依赖后，加载依赖，加载完依赖之后，再回到入口文件。 如果不依赖html文档文件的话，可以在加上<code>async</code>标签，加载完文件之后就可以执行execution。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/posts/JavaScipt基础/红宝书/script标签-脚本加载.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const script________html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "script标签-脚本加载.html.vue"]]);
export {
  script________html as default
};
