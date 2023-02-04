export const data = JSON.parse("{\"key\":\"v-013cdc74\",\"path\":\"/zh/posts/JavaScipt%E5%9F%BA%E7%A1%80/%E7%BA%A2%E5%AE%9D%E4%B9%A6/%E4%BB%A3%E7%90%86%E4%B8%8E%E5%8F%8D%E5%B0%84.html\",\"title\":\"代理与反射\",\"lang\":\"zh-CN\",\"frontmatter\":{\"description\":\"代理与反射 ES6新增的代理和反射为开发者提供了拦截并向基本操作嵌入额外行为的能力。 在ES6之前，ECMAScript中并没有类似代理的特性。由于代理是一种新的基础性语言能力，很多转译程序都不能把代理行为装换为之前的ECMAScript代码。因此，代理和反射只能在百分百支持它们的平台上使用 const target = { id: 'target' }; const handler = {}; const proxy = new Proxy(target, handler); //id属性会访问同一个值,修改目标值 会反映在na'ge console.log(target.id); // target console.log(proxy.id); // target\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://mister-hope.github.io/zh/posts/JavaScipt%E5%9F%BA%E7%A1%80/%E7%BA%A2%E5%AE%9D%E4%B9%A6/%E4%BB%A3%E7%90%86%E4%B8%8E%E5%8F%8D%E5%B0%84.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"饮东的博客\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"代理与反射\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"代理与反射 ES6新增的代理和反射为开发者提供了拦截并向基本操作嵌入额外行为的能力。 在ES6之前，ECMAScript中并没有类似代理的特性。由于代理是一种新的基础性语言能力，很多转译程序都不能把代理行为装换为之前的ECMAScript代码。因此，代理和反射只能在百分百支持它们的平台上使用 const target = { id: 'target' }; const handler = {}; const proxy = new Proxy(target, handler); //id属性会访问同一个值,修改目标值 会反映在na'ge console.log(target.id); // target console.log(proxy.id); // target\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"代理与反射\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[]}\"]]},\"headers\":[{\"level\":3,\"title\":\"定义捕获器\",\"slug\":\"定义捕获器\",\"link\":\"#定义捕获器\",\"children\":[]},{\"level\":3,\"title\":\"捕获器参数\",\"slug\":\"捕获器参数\",\"link\":\"#捕获器参数\",\"children\":[]}],\"readingTime\":{\"minutes\":3.58,\"words\":1074},\"filePathRelative\":\"zh/posts/JavaScipt基础/红宝书/代理与反射.md\",\"excerpt\":\"<h1> 代理与反射</h1>\\n<p>ES6新增的代理和反射为开发者提供了拦截并向基本操作嵌入额外行为的能力。</p>\\n<blockquote>\\n<p>在ES6之前，ECMAScript中并没有类似代理的特性。由于代理是一种新的基础性语言能力，很多转译程序都不能把代理行为装换为之前的ECMAScript代码。<u>因此，代理和反射只能在百分百支持它们的平台上使用</u></p>\\n</blockquote>\\n<div class=\\\"language-javascript line-numbers-mode\\\" data-ext=\\\"js\\\"><pre class=\\\"language-javascript\\\"><code><span class=\\\"token keyword\\\">const</span> target <span class=\\\"token operator\\\">=</span> <span class=\\\"token punctuation\\\">{</span>\\n  <span class=\\\"token literal-property property\\\">id</span><span class=\\\"token operator\\\">:</span> <span class=\\\"token string\\\">'target'</span>\\n<span class=\\\"token punctuation\\\">}</span><span class=\\\"token punctuation\\\">;</span>\\n<span class=\\\"token keyword\\\">const</span> handler <span class=\\\"token operator\\\">=</span> <span class=\\\"token punctuation\\\">{</span><span class=\\\"token punctuation\\\">}</span><span class=\\\"token punctuation\\\">;</span>\\n\\n<span class=\\\"token keyword\\\">const</span> proxy <span class=\\\"token operator\\\">=</span> <span class=\\\"token keyword\\\">new</span> <span class=\\\"token class-name\\\">Proxy</span><span class=\\\"token punctuation\\\">(</span>target<span class=\\\"token punctuation\\\">,</span> handler<span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\n\\n<span class=\\\"token comment\\\">//id属性会访问同一个值,修改目标值 会反映在na'ge</span>\\nconsole<span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">log</span><span class=\\\"token punctuation\\\">(</span>target<span class=\\\"token punctuation\\\">.</span>id<span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span> <span class=\\\"token comment\\\">// target</span>\\nconsole<span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">log</span><span class=\\\"token punctuation\\\">(</span>proxy<span class=\\\"token punctuation\\\">.</span>id<span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span> <span class=\\\"token comment\\\">// target</span>\\n</code></pre><div class=\\\"line-numbers\\\" aria-hidden=\\\"true\\\"><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div></div></div>\",\"autoDesc\":true}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
