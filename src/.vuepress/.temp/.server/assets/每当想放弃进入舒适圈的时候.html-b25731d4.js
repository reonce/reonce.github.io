import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="每当想放弃进入舒适圈的时候" tabindex="-1"><a class="header-anchor" href="#每当想放弃进入舒适圈的时候" aria-hidden="true">#</a> 每当想放弃进入舒适圈的时候</h1><p>7.22 大雨</p><p>今天我终于交付了 “婚姻预测”的H5外包项目。前两天我经常修改bug到晚上12点，上完正常班回家继续写代码改bug的酸爽。</p><p>尽管这个项目对我的提高有帮助，包括css动画、移动端的一些适配等。但是我认为我付出的时间精力已经超过了合计1.3k的报价。再加上甲方对产品的要求以及自己水平原因，使我感到很疲惫。</p><p>今天终于解放了，特别想躺着休息一下。转念一想，我的日常其实也应该保持这个工作的状态，目前对进大厂的准备已经有些拉下了。自己明显已经感觉到准备的不足，感觉自己还没准备好。但是原计划八月初就应该开始投递简历了。没办法，只有逼自己一把继续努力，无论如何，要按照自己的计划去尝试。哪怕今年进不了大厂，也要去尝试一下，纠正自己努力的方向。</p><p>加油，reonce</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/posts/感悟/每当想放弃进入舒适圈的时候.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ______________html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "每当想放弃进入舒适圈的时候.html.vue"]]);
export {
  ______________html as default
};
