import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="git-cz的配置命令" tabindex="-1"><a class="header-anchor" href="#git-cz的配置命令" aria-hidden="true">#</a> git cz的配置命令</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm install -g commitizen；

npm install -g conventional-changelog-cli；

npm install -g cz-conventional-changelog；

echo &#39;{ &quot;path&quot;: &quot;cz-conventional-changelog&quot; }&#39; &gt; ~/.czrc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>tip: win在powerShell上运行</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/posts/前端工程化/git cz的配置命令.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const git_cz______html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "git cz的配置命令.html.vue"]]);
export {
  git_cz______html as default
};
