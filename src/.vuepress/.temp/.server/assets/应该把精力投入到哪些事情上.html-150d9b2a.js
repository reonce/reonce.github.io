import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="应该把精力投入到哪些事情上" tabindex="-1"><a class="header-anchor" href="#应该把精力投入到哪些事情上" aria-hidden="true">#</a> 应该把精力投入到哪些事情上</h1><p>尽管我的个人理念是偏享受型的，基本认同人生苦短，及时行乐。但是很多时候为了短期的行乐影响到未来更加长久的行乐，这是不健康的。</p><p>同级的同学已经通过接私活+炒股的方式买房了，甚至在尝试创业开公司。</p><p>而我在为买一台macbook纠结许久。不知不觉中人与人的差距就拉开了，我一直不擅与人交往，在实习的公司也没有留下比较好的印象，以至于那家公司现在有外包项目或是维护项目都是找其他人。接熟人私活这条途径基本上走不通。炒股基金我也一窍不通，并且买了就想一直看，没有一个成熟的心态去观察。那么我安慰自己在准备知识进大厂，实际上准备进度很迟缓，看上去是学到了很多，但是随意对比一个面经就能感受到自己离大厂的距离。</p><p>结论： 暂时的痛苦是为了未来质量更高的行乐，必须将精力投入到对自己发展更有利的事情上，为此必须目光深远，从未来(自己幻想的希望成为的自己)的角度看现在的自己。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/posts/感悟/应该把精力投入到哪些事情上.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ______________html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "应该把精力投入到哪些事情上.html.vue"]]);
export {
  ______________html as default
};
