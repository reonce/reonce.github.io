import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="预估业务错误引发的思考" tabindex="-1"><a class="header-anchor" href="#预估业务错误引发的思考" aria-hidden="true">#</a> 预估业务错误引发的思考</h1><h2 id="需求背景" tabindex="-1"><a class="header-anchor" href="#需求背景" aria-hidden="true">#</a> 需求背景</h2><p>一个树形多选组件，当子节点全部选中的时候，只传父节点的值，否则传子节点</p><h2 id="错误判断" tabindex="-1"><a class="header-anchor" href="#错误判断" aria-hidden="true">#</a> 错误判断</h2><p>因为在ng-zorro中，这个逻辑是默认的，于是我很爽快的答应了后端这样做。但是在antd react版本中，子节点全选中会把所有子节点和父节点都传出，和需求商讨的方案是不同的，于是我需要自己实现。</p><h2 id="技术实现分析" tabindex="-1"><a class="header-anchor" href="#技术实现分析" aria-hidden="true">#</a> 技术实现分析</h2><p>在选中或取消某个节点时，可以拿到当前节点的树结构和对应关系。</p><ol><li><p>当节点作为父节点时，很容易去判断去掉它的子节点。</p></li><li><p>当节点作为子节点时，<strong>难点</strong>来了，需要判断它的兄弟节点及它兄弟节点的全部子节点是否全部选中，然后如果全中，在用当前节点的父节点走作为父节点的逻辑还要再走作为子节点的逻辑</p></li></ol><h2 id="思考" tabindex="-1"><a class="header-anchor" href="#思考" aria-hidden="true">#</a> 思考</h2><p>在充分调研技术之前，不要马虎的答应，那样不够沉稳，并且容易给自己带来麻烦。</p><p>当陷入预估错误带来的后果时，有两种解决方案：</p><ol><li>自己解决。拼脑力体力解决掉问题，为”吹出去的牛逼“付出代价</li><li>重新商讨，求后端改方案。需要好声好气的去找后端同学在商讨方案</li></ol><p>两种方案都是被动的局面，十分窘迫。</p><p><strong>其实这些”坏结果”完全是可避免的，如果我认真查看了antd的树组件逻辑，开始就和后端商量好，后端来做数据逻辑处理，就可以避免这个窘境了。</strong></p><p>2022.7.25</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/posts/感悟/预估业务错误引发的思考.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ____________html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "预估业务错误引发的思考.html.vue"]]);
export {
  ____________html as default
};
