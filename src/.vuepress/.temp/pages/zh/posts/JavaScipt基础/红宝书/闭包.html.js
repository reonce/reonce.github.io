export const data = JSON.parse("{\"key\":\"v-d9e98f80\",\"path\":\"/zh/posts/JavaScipt%E5%9F%BA%E7%A1%80/%E7%BA%A2%E5%AE%9D%E4%B9%A6/%E9%97%AD%E5%8C%85.html\",\"title\":\"闭包\",\"lang\":\"zh-CN\",\"frontmatter\":{\"description\":\"闭包 闭包指的是那些引用了另一个函数作用域中变量的函数，通常是在嵌套函数中实现的。 function compare(value1, value2) { if(value1 === value2) return 0; return value1 &gt; value2 ? 1 : -1; } let result = compare(5, 10);\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://mister-hope.github.io/zh/posts/JavaScipt%E5%9F%BA%E7%A1%80/%E7%BA%A2%E5%AE%9D%E4%B9%A6/%E9%97%AD%E5%8C%85.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"饮东的博客\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"闭包\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"闭包 闭包指的是那些引用了另一个函数作用域中变量的函数，通常是在嵌套函数中实现的。 function compare(value1, value2) { if(value1 === value2) return 0; return value1 &gt; value2 ? 1 : -1; } let result = compare(5, 10);\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"闭包\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[]}\"]]},\"headers\":[],\"readingTime\":{\"minutes\":1.9,\"words\":571},\"filePathRelative\":\"zh/posts/JavaScipt基础/红宝书/闭包.md\",\"excerpt\":\"<h1> 闭包</h1>\\n<p><strong>闭包</strong>指的是那些引用了另一个函数作用域中变量的函数，通常是在嵌套函数中实现的。</p>\\n<div class=\\\"language-javascript line-numbers-mode\\\" data-ext=\\\"js\\\"><pre class=\\\"language-javascript\\\"><code><span class=\\\"token keyword\\\">function</span> <span class=\\\"token function\\\">compare</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token parameter\\\">value1<span class=\\\"token punctuation\\\">,</span> value2</span><span class=\\\"token punctuation\\\">)</span> <span class=\\\"token punctuation\\\">{</span>\\n  <span class=\\\"token keyword\\\">if</span><span class=\\\"token punctuation\\\">(</span>value1 <span class=\\\"token operator\\\">===</span> value2<span class=\\\"token punctuation\\\">)</span> <span class=\\\"token keyword\\\">return</span> <span class=\\\"token number\\\">0</span><span class=\\\"token punctuation\\\">;</span>\\n  <span class=\\\"token keyword\\\">return</span> value1 <span class=\\\"token operator\\\">&gt;</span> value2 <span class=\\\"token operator\\\">?</span> <span class=\\\"token number\\\">1</span> <span class=\\\"token operator\\\">:</span> <span class=\\\"token operator\\\">-</span><span class=\\\"token number\\\">1</span><span class=\\\"token punctuation\\\">;</span>\\n<span class=\\\"token punctuation\\\">}</span>\\n\\n<span class=\\\"token keyword\\\">let</span> result <span class=\\\"token operator\\\">=</span> <span class=\\\"token function\\\">compare</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token number\\\">5</span><span class=\\\"token punctuation\\\">,</span> <span class=\\\"token number\\\">10</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\n</code></pre><div class=\\\"line-numbers\\\" aria-hidden=\\\"true\\\"><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div></div></div>\",\"autoDesc\":true}")

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
