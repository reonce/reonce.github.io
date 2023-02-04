export const data = JSON.parse("{\"key\":\"v-9d51b702\",\"path\":\"/posts/JavaScipt%E5%9F%BA%E7%A1%80/async%E7%9A%84%E4%BA%A7%E7%94%9F%EF%BC%8C%E7%94%9F%E6%88%90%E5%99%A8%E7%9B%B8%E5%85%B3%E8%A7%A3%E8%AF%BB.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{\"description\":\"async的产生，生成器相关 ES2017 标准引入了 async 函数，使得异步操作变得更加方便。 async 函数是什么？一句话，它就是 Generator 函数的语法糖。 关于 Generator 函数，依次读取两个文件。 const fs = require('fs'); const readFile = function (fileName) { return new Promise(function (resolve, reject) { fs.readFile(fileName, function(error, data) { if (error) return reject(error); resolve(data); }); }); }; const gen = function* () { const f1 = yield readFile('/etc/fstab'); const f2 = yield readFile('/etc/shells'); console.log(f1.toString()); console.log(f2.toString()); };\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://mister-hope.github.io/posts/JavaScipt%E5%9F%BA%E7%A1%80/async%E7%9A%84%E4%BA%A7%E7%94%9F%EF%BC%8C%E7%94%9F%E6%88%90%E5%99%A8%E7%9B%B8%E5%85%B3%E8%A7%A3%E8%AF%BB.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"饮东的博客\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"async的产生，生成器相关 ES2017 标准引入了 async 函数，使得异步操作变得更加方便。 async 函数是什么？一句话，它就是 Generator 函数的语法糖。 关于 Generator 函数，依次读取两个文件。 const fs = require('fs'); const readFile = function (fileName) { return new Promise(function (resolve, reject) { fs.readFile(fileName, function(error, data) { if (error) return reject(error); resolve(data); }); }); }; const gen = function* () { const f1 = yield readFile('/etc/fstab'); const f2 = yield readFile('/etc/shells'); console.log(f1.toString()); console.log(f2.toString()); };\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[]}\"]]},\"headers\":[{\"level\":3,\"title\":\"async的产生，生成器相关\",\"slug\":\"async的产生-生成器相关\",\"link\":\"#async的产生-生成器相关\",\"children\":[]}],\"readingTime\":{\"minutes\":1.78,\"words\":535},\"filePathRelative\":\"posts/JavaScipt基础/async的产生，生成器相关解读.md\",\"excerpt\":\"<h3> async的产生，生成器相关</h3>\\n<p>ES2017 标准引入了 async 函数，使得异步操作变得更加方便。</p>\\n<p>async 函数是什么？一句话，它就是 Generator 函数的语法糖。</p>\\n<p>关于 Generator 函数，依次读取两个文件。</p>\\n<div class=\\\"language-javascript line-numbers-mode\\\" data-ext=\\\"js\\\"><pre class=\\\"language-javascript\\\"><code><span class=\\\"token keyword\\\">const</span> fs <span class=\\\"token operator\\\">=</span> <span class=\\\"token function\\\">require</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token string\\\">'fs'</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\n\\n<span class=\\\"token keyword\\\">const</span> <span class=\\\"token function-variable function\\\">readFile</span> <span class=\\\"token operator\\\">=</span> <span class=\\\"token keyword\\\">function</span> <span class=\\\"token punctuation\\\">(</span><span class=\\\"token parameter\\\">fileName</span><span class=\\\"token punctuation\\\">)</span> <span class=\\\"token punctuation\\\">{</span>\\n  <span class=\\\"token keyword\\\">return</span> <span class=\\\"token keyword\\\">new</span> <span class=\\\"token class-name\\\">Promise</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token keyword\\\">function</span> <span class=\\\"token punctuation\\\">(</span><span class=\\\"token parameter\\\">resolve<span class=\\\"token punctuation\\\">,</span> reject</span><span class=\\\"token punctuation\\\">)</span> <span class=\\\"token punctuation\\\">{</span>\\n    fs<span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">readFile</span><span class=\\\"token punctuation\\\">(</span>fileName<span class=\\\"token punctuation\\\">,</span> <span class=\\\"token keyword\\\">function</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token parameter\\\">error<span class=\\\"token punctuation\\\">,</span> data</span><span class=\\\"token punctuation\\\">)</span> <span class=\\\"token punctuation\\\">{</span>\\n      <span class=\\\"token keyword\\\">if</span> <span class=\\\"token punctuation\\\">(</span>error<span class=\\\"token punctuation\\\">)</span> <span class=\\\"token keyword\\\">return</span> <span class=\\\"token function\\\">reject</span><span class=\\\"token punctuation\\\">(</span>error<span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\n      <span class=\\\"token function\\\">resolve</span><span class=\\\"token punctuation\\\">(</span>data<span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\n    <span class=\\\"token punctuation\\\">}</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\n  <span class=\\\"token punctuation\\\">}</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\n<span class=\\\"token punctuation\\\">}</span><span class=\\\"token punctuation\\\">;</span>\\n\\n<span class=\\\"token keyword\\\">const</span> <span class=\\\"token function-variable function\\\">gen</span> <span class=\\\"token operator\\\">=</span> <span class=\\\"token keyword\\\">function</span><span class=\\\"token operator\\\">*</span> <span class=\\\"token punctuation\\\">(</span><span class=\\\"token punctuation\\\">)</span> <span class=\\\"token punctuation\\\">{</span>\\n  <span class=\\\"token keyword\\\">const</span> f1 <span class=\\\"token operator\\\">=</span> <span class=\\\"token keyword\\\">yield</span> <span class=\\\"token function\\\">readFile</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token string\\\">'/etc/fstab'</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\n  <span class=\\\"token keyword\\\">const</span> f2 <span class=\\\"token operator\\\">=</span> <span class=\\\"token keyword\\\">yield</span> <span class=\\\"token function\\\">readFile</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token string\\\">'/etc/shells'</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\n  console<span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">log</span><span class=\\\"token punctuation\\\">(</span>f1<span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">toString</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\n  console<span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">log</span><span class=\\\"token punctuation\\\">(</span>f2<span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">toString</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\n<span class=\\\"token punctuation\\\">}</span><span class=\\\"token punctuation\\\">;</span>\\n</code></pre><div class=\\\"line-numbers\\\" aria-hidden=\\\"true\\\"><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div></div></div>\",\"autoDesc\":true}")

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
