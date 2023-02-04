import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="系统字体导致的css错位问题总结" tabindex="-1"><a class="header-anchor" href="#系统字体导致的css错位问题总结" aria-hidden="true">#</a> 系统字体导致的CSS错位问题总结</h1><p>开发业务中，实现了一个顶部的字体，设置了和设计图一样的宽度和字体：</p><p>但是拿给设计看之后，他的电脑上是这个样子的：</p><p>纳尼！！？ 经典的我电脑上没问题。 用附近同事的电脑看，都和我的呈现效果一致。</p><p>在核查了屏幕设置，分辨率等都没问题之后，没有头绪，于是跑上楼看测试的电脑，检查，初步怀疑是浏览器版本问题，但是用另外一个浏览器也发现同样的问题。这时候有个细节，设计的电脑上字体和我们的不一样，设计电脑上展示的是<code>PingFang SC</code>字体。原来是字体原因导致的吗，为啥会出现字体不一样的情况呢？</p><blockquote><p>解决方案： 增加了盒子的宽度并且设置了文字不换行解决了这个问题。</p></blockquote><p>解决倒是很简单，但是这种电脑上效果差异不同的原因在哪呢？</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">--font-family</span><span class="token punctuation">:</span> DINPro Medium<span class="token punctuation">,</span> -apple-system<span class="token punctuation">,</span> BlinkMacSystemFont<span class="token punctuation">,</span> <span class="token string">&#39;PingFang SC&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;Segoe UI&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Hiragino Sans GB&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Microsoft YaHei&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Helvetica Neue&#39;</span><span class="token punctuation">,</span>
    Helvetica<span class="token punctuation">,</span> Arial<span class="token punctuation">,</span> sans-serif<span class="token punctuation">,</span> <span class="token string">&#39;Apple Color Emoji&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Segoe UI Emoji&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;Segoe UI Symbol&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们系统的字体配置如上，经过查阅得知，font-family的字体是哪个先命中就展示哪个，登陆系统后，我们会自动下载并使用<code>DINPro Medium</code>字体，那么为什么设计的电脑展示的是<code>&#39;PingFang SC&#39;</code>这个字体呢？</p><p>原因是<code>DINPro Medium</code>字体主要是数字和符号相关的，因此可能出现一段文字命中两次的现象。效果如下：</p><p>在来看我们的系统配置，<code>-apple-system, BlinkMacSystemFont,</code>两种苹果字体，没有命中，于是到了<code>&#39;PingFang SC&#39;</code>字体，设计的同事当然下载了许多奇奇怪怪的字体，他的电脑上命中的就是这个字体。</p><blockquote><p>苹果字体PingFang sc。有些UI同学觉得页面上的微软雅黑不好看，看着苹果官网的字体不错。但是苹果官网的字体是苹果的官方字体，不得商用，然后就有了PingFang sc。</p></blockquote><p>这个字体比普通的微软雅黑要大一些，所以撑开到了第二行，因此在开发的时候，要稍微注意字体的留白，留给其他奇奇怪怪的字体一些空间。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/posts/CSS/系统字体导致的CSS错位问题总结.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _______CSS_______html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "系统字体导致的CSS错位问题总结.html.vue"]]);
export {
  _______CSS_______html as default
};
