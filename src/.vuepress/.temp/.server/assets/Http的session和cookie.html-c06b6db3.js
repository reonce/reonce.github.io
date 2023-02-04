import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>cookie算是session的一种实现方式。由于http无状态的特性，服务端想要知道是哪个用户请求的接口，就必须有一个标识来确认，服务端通过某种机制获取用户信息，就是一个典型的<strong>session</strong>场景。现在主流的方案是cookie里携带一个session的id标识，服务端拿到这个id后，查询得知是哪个用户调的接口。</p><blockquote><p>服务端保存Session的方法很多，内存、数据库、文件都有。集群的时候也要考虑Session的转移，在大型的网站，一般会有专门的Session服务器集群，用来保存用户会话，这个时候 Session 信息都是放在内存的，使用一些缓存服务比如Memcached之类的来放 Session。</p></blockquote><p>cookie除了实现session之外，还可以用于一些方便用户的场景。例如保存用户的登录信息，在下次登录的时候，可以自动帮用户填了。cookie名字的由来就是给用户一点甜头</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/posts/浏览器相关知识/Http的session和cookie.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Http_session_cookie_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "Http的session和cookie.html.vue"]]);
export {
  Http_session_cookie_html as default
};
