import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="一、vite生产环境为什么选择rollup做构建工具。" tabindex="-1"><a class="header-anchor" href="#一、vite生产环境为什么选择rollup做构建工具。" aria-hidden="true">#</a> 一、Vite生产环境为什么选择Rollup做构建工具。</h2><p>Vite是一个由原生ESM驱动的Web开发构建工具。在选择构建工具的时候也最好可以选择基于ESM的工具。</p><p>Rollup是基于ES2015的JavaScript打包工具。它将小文件打包成一个大文件或者更复杂的库和应用，打包既可用于浏览器和Node.js使用。 Rollup最显著的地方就是能让打包文件体积很小。相比其他JavaScript打包工具，Rollup总能打出更小，更快的包。因为Rollup基于ES2015模块，比Webpack和Browserify使用的CommonJS模块机制更高效。</p><h2 id="二、vite为什么不用rollup的热更新" tabindex="-1"><a class="header-anchor" href="#二、vite为什么不用rollup的热更新" aria-hidden="true">#</a> 二、Vite为什么不用Rollup的热更新</h2><p>Vite开发模式单独实现了一套热更新（HMR - Hot Module Replacement），可是从<a href="https://link.zhihu.com/?target=https%3A//github.com/rollup/awesome" target="_blank" rel="noopener noreferrer">Rollup Awesome`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a>中可以发现，Rollup有热更新插件<a href="https://link.zhihu.com/?target=https%3A//github.com/PepsRyuu/nollup" target="_blank" rel="noopener noreferrer">nollup`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a>。为什么Vite不用Rollup的热更新呢？</p><p>从Vite的README，我们可以发现：</p><blockquote><p>Vite was created to tackle native ESM-based HMR. When Vite was first released with working ESM-based HMR, there was no other project actively trying to bring native ESM based HMR to production.</p></blockquote><p>也就是说Vite是第一个发布基于纯ESM的热更新。当时Rollup还没有纯ESM的热更新。</p><h2 id="三、vite为什么不用webpack" tabindex="-1"><a class="header-anchor" href="#三、vite为什么不用webpack" aria-hidden="true">#</a> 三、Vite为什么不用Webpack</h2><p>Webpack和Rollup功能差不多，以前有种说法是应用开发用Webpack，库开发用Rollup。但是现在Webpack也支持Tree shaking，Rollup也有热更新，而且都有强大的插件开发功能。二者的功能差异越来越模糊。</p><p><strong>二者更多的区别是在写法上。</strong></p><p>如下是Rollup的配置文件：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// rollup.config.js</span>
<span class="token keyword">import</span> babel <span class="token keyword">from</span> <span class="token string">&#39;rollup-plugin-babel&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">input</span><span class="token operator">:</span> <span class="token string">&#39;./src/index.js&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">file</span><span class="token operator">:</span> <span class="token string">&#39;./dist/bundle.rollup.js&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">format</span><span class="token operator">:</span> <span class="token string">&#39;cjs&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token function">babel</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">presets</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">[</span>
                    <span class="token string">&#39;es2015&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
                        <span class="token literal-property property">modules</span><span class="token operator">:</span> <span class="token boolean">false</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">]</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面是webpack的配置文件：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// webpack.config.js
const path = require(&#39;path&#39;);
const webpack = require(&#39;webpack&#39;);

module.exports = {
    entry: {
        &#39;index.webpack&#39;: path.resolve(&#39;./src/index.js&#39;)
    },
    output: {
        libraryTarget: &quot;umd&quot;,
        filename: &quot;bundle.webpack.js&quot;,
    },
    module: {
        rules: [
            {
                test: /\\.js$/,
                exclude: /node_modules/,
                loader: &#39;babel-loader&#39;,
                query: {
                    presets: [&#39;es2015&#39;]
                }
            }
        ]
    }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看出：</p><ul><li>Rollup使用新的ESM，而Webpack用的是旧的CommonJS。</li><li>Rollup支持相对路径，webpack需要使用path模块。</li></ul><p>Rollup使用起来更简洁，并且Rollup打出更小体积的文件，所以Rollup更适合Vite。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/posts/前端工程化/Vite生产环境为什么选择Rollup做构建工具.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Vite_________Rollup______html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "Vite生产环境为什么选择Rollup做构建工具.html.vue"]]);
export {
  Vite_________Rollup______html as default
};
