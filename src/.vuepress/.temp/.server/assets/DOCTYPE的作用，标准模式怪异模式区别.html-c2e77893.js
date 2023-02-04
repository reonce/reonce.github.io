import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="doctype的作用-标准模式怪异模式区别" tabindex="-1"><a class="header-anchor" href="#doctype的作用-标准模式怪异模式区别" aria-hidden="true">#</a> <strong>DOCTYPE的作用，标准模式怪异模式区别</strong></h1><p><code>&lt;!DCOTYPE html&gt;</code></p><p>doctype对大小写不敏感，用于生命hmtl或者xml的浏览器渲染模式</p><p>声明了<code>&lt;!DCOTYPE html&gt;</code>的，被认为执行浏览器标准模式。</p><h2 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> <strong>概念</strong></h2><p>标准模式页面会按照HTML，CSS的定义渲染，而在怪异模式就是浏览器为了兼容很早之前针对旧版本浏览器设计，并未严格遵循W3C标准而产生的一种页面渲染模式。浏览器基于页面中文件类型描述去渲染，如果存在一个完整的DOCTYPE则浏览器将会采用标准模式，如果缺失就会采用怪异模式</p><h2 id="区别" tabindex="-1"><a class="header-anchor" href="#区别" aria-hidden="true">#</a> <strong>区别</strong></h2><p>标准模式（w3c模式）和怪异模式（IE模式）之间的区别</p><p>1）盒子模型：在IE盒子模型中，height/width是由border+padding+width组成的；在w3c盒子模型下，height/width是指content的height/width</p><p>2）图片元素的对齐方式：对于inline元素和table-cell元素，标准模式下vertical-align属性默认取值为baseline，在怪异模式下，table单元格中的图片的vertical-align属性默认取值为bottom，因此在图片底部会多出几像素的空间</p><p>3）</p><p>元素中的字体：CSS中，对于font的属性都是可以继承的，怪异模式下，对于table元素，字体的某些元素将不会从body等其他封装元素中继承得到，特别是font-size属性 4）内联元素的尺寸：标准模式下， inline元素无法自定义大小，怪异模式下，定义这些元素的width，height属性可以影响这些元素显示的尺寸 5）元素溢出的处理：标准模式下，overflow默认值visible，在怪异模式下，该溢出会被当做扩展box来对待，即元素的大小由其内容决定，溢出不会裁减，元素框自动调整，包含溢出内容声明。</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>!DCOTYPE</span> <span class="token attr-name">html</span><span class="token punctuation">&gt;</span></span>  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>doctype对大小写不敏感，用于生命hmtl或者xml的浏览器渲染模式</p><p>声明了</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/posts/浏览器相关知识/DOCTYPE的作用，标准模式怪异模式区别.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const DOCTYPE_______________html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "DOCTYPE的作用，标准模式怪异模式区别.html.vue"]]);
export {
  DOCTYPE_______________html as default
};
