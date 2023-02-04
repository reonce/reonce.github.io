import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><hr><h1 id="css文字换行" tabindex="-1"><a class="header-anchor" href="#css文字换行" aria-hidden="true">#</a> CSS文字换行</h1><p><strong>word-wrap: normal; || word-break: normal;</strong></p><p>当word-wrap或者word-break为normal时，也就是浏览器的默认设置时。</p><p>换行规则是这样的：</p><p><em>情景一：</em>　　当一个单词在行尾不能完整容纳时，会自动将这个单词换到下一行，示例如下。</p><figure><img src="https://images2015.cnblogs.com/blog/666306/201508/666306-20150829131640390-213490926.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p><em>情景二：</em>　　当一个长长的单词在行尾不能完整容纳，并且换行后还是不能容纳时，单词就会溢出容器，示例如下。</p><figure><img src="https://images2015.cnblogs.com/blog/666306/201508/666306-20150829131952750-73018671.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><hr><p><strong>word-wrap: break-word;</strong></p><p>当word-wrap设置为break-word时，</p><p>换行规则如下：</p><p><em>情景一：</em>　和normal情况相同。</p><figure><img src="https://images2015.cnblogs.com/blog/666306/201508/666306-20150829133020312-273716609.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p><em>情景二：</em>　这时，单词不会溢出容器，而是单词断开，换到下一行。</p><figure><img src="https://images2015.cnblogs.com/blog/666306/201508/666306-20150829133126484-1462778884.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><hr><p><strong>word-break: break-all;</strong></p><p>当word-break设置为break-all时，</p><p>换行规则如下：</p><p><em>情景一：</em>　这时，发生了变化。单词不会整体换行，而是断开单词，换到下一行。</p><figure><img src="https://images2015.cnblogs.com/blog/666306/201508/666306-20150829133533890-1946999992.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p><em>情景二：</em>　这时，和之前相比，又发生了变化。单词还是不会整体换行，单词会不断的断开，换到下一行。</p><figure><img src="https://images2015.cnblogs.com/blog/666306/201508/666306-20150829133726265-1767961043.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><hr><p><strong>总结：</strong></p><p>normal和break的<strong>区别</strong>在于：<strong>单词是否会断开</strong>。normal不会断开单词，只会把单词整体换行或者溢出容器。而break会选择断开单词换行。</p><p>word-wrap和word-break的<strong>区别</strong>在于：<strong>单词是否会整体换行</strong>。前者会整体换行再断开单词，而后者直接断开单词。</p><hr><p><strong>white-space: nowrap;</strong></p><p>white-space用于处理文字中的空白。会让文字<strong>不自动换行，全部显示在一行内</strong>。</p><p><em>情景一：</em></p><p><em><img src="https://images2015.cnblogs.com/blog/666306/201508/666306-20150829135244609-1697680237.png" alt="img" loading="lazy"></em></p><p>题外： user-select: none; // 文字不可选中</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/posts/CSS/CSS文字换行语法汇总.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const CSS_________html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "CSS文字换行语法汇总.html.vue"]]);
export {
  CSS_________html as default
};
