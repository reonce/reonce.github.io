export const data = JSON.parse("{\"key\":\"v-9a4a82e2\",\"path\":\"/zh/posts/JavaScipt%E5%9F%BA%E7%A1%80/JavaScript%E6%96%B9%E6%B3%95/JSON%E6%96%B9%E6%B3%95.html\",\"title\":\"JSON方法\",\"lang\":\"zh-CN\",\"frontmatter\":{\"description\":\"JSON方法 JSON 是语言无关的纯数据规范，因此一些特定于 JavaScript 的对象属性会被 JSON.stringify 跳过。 即： 函数属性（方法）。 Symbol 类型的属性。 存储 undefined 的属性。 let user = { sayHi() { // 被忽略 alert(\\\"Hello\\\"); }, [Symbol(\\\"id\\\")]: 123, // 被忽略 something: undefined // 被忽略 }; alert( JSON.stringify(user) ); // {}（空对象）\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://mister-hope.github.io/zh/posts/JavaScipt%E5%9F%BA%E7%A1%80/JavaScript%E6%96%B9%E6%B3%95/JSON%E6%96%B9%E6%B3%95.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"饮东的博客\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"JSON方法\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"JSON方法 JSON 是语言无关的纯数据规范，因此一些特定于 JavaScript 的对象属性会被 JSON.stringify 跳过。 即： 函数属性（方法）。 Symbol 类型的属性。 存储 undefined 的属性。 let user = { sayHi() { // 被忽略 alert(\\\"Hello\\\"); }, [Symbol(\\\"id\\\")]: 123, // 被忽略 something: undefined // 被忽略 }; alert( JSON.stringify(user) ); // {}（空对象）\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"JSON方法\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[]}\"]]},\"headers\":[{\"level\":2,\"title\":\"排除和转换：replacer\",\"slug\":\"排除和转换-replacer\",\"link\":\"#排除和转换-replacer\",\"children\":[]}],\"readingTime\":{\"minutes\":3.03,\"words\":910},\"filePathRelative\":\"zh/posts/JavaScipt基础/JavaScript方法/JSON方法.md\",\"excerpt\":\"<h1> JSON方法</h1>\\n<p>JSON 是语言无关的纯数据规范，因此一些特定于 JavaScript 的对象属性会被 <code>JSON.stringify</code> 跳过。</p>\\n<p>即：</p>\\n<ul>\\n<li>函数属性（方法）。</li>\\n<li>Symbol 类型的属性。</li>\\n<li>存储 <code>undefined</code> 的属性。</li>\\n</ul>\\n<div class=\\\"language-javascript line-numbers-mode\\\" data-ext=\\\"js\\\"><pre class=\\\"language-javascript\\\"><code><span class=\\\"token keyword\\\">let</span> user <span class=\\\"token operator\\\">=</span> <span class=\\\"token punctuation\\\">{</span>\\n  <span class=\\\"token function\\\">sayHi</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token punctuation\\\">)</span> <span class=\\\"token punctuation\\\">{</span> <span class=\\\"token comment\\\">// 被忽略</span>\\n    <span class=\\\"token function\\\">alert</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token string\\\">\\\"Hello\\\"</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\n  <span class=\\\"token punctuation\\\">}</span><span class=\\\"token punctuation\\\">,</span>\\n  <span class=\\\"token punctuation\\\">[</span><span class=\\\"token function\\\">Symbol</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token string\\\">\\\"id\\\"</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">]</span><span class=\\\"token operator\\\">:</span> <span class=\\\"token number\\\">123</span><span class=\\\"token punctuation\\\">,</span> <span class=\\\"token comment\\\">// 被忽略</span>\\n  <span class=\\\"token literal-property property\\\">something</span><span class=\\\"token operator\\\">:</span> <span class=\\\"token keyword\\\">undefined</span> <span class=\\\"token comment\\\">// 被忽略</span>\\n<span class=\\\"token punctuation\\\">}</span><span class=\\\"token punctuation\\\">;</span>\\n\\n<span class=\\\"token function\\\">alert</span><span class=\\\"token punctuation\\\">(</span> <span class=\\\"token constant\\\">JSON</span><span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">stringify</span><span class=\\\"token punctuation\\\">(</span>user<span class=\\\"token punctuation\\\">)</span> <span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span> <span class=\\\"token comment\\\">// {}（空对象）</span>\\n</code></pre><div class=\\\"line-numbers\\\" aria-hidden=\\\"true\\\"><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div></div></div>\",\"autoDesc\":true}")

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
