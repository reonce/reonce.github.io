export const data = JSON.parse("{\"key\":\"v-2ab47c70\",\"path\":\"/posts/JavaScipt%E5%9F%BA%E7%A1%80/JavaScript%E6%96%B9%E6%B3%95/async%E7%9A%84%E4%BA%A7%E7%94%9F%EF%BC%8C%E7%94%9F%E6%88%90%E5%99%A8%E7%9B%B8%E5%85%B3%E8%A7%A3%E8%AF%BB.html\",\"title\":\"async的产生，生成器相关解读\",\"lang\":\"zh-CN\",\"frontmatter\":{\"description\":\"async的产生，生成器相关解读 ES2017 标准引入了 async 函数，使得异步操作变得更加方便。 async 函数是什么？一句话，它就是 Generator 函数的语法糖。 关于 Generator 函数，依次读取两个文件。 const fs = require('fs'); const readFile = function (fileName) { return new Promise(function (resolve, reject) { fs.readFile(fileName, function(error, data) { if (error) return reject(error); resolve(data); }); }); }; const gen = function* () { const f1 = yield readFile('/etc/fstab'); const f2 = yield readFile('/etc/shells'); console.log(f1.toString()); console.log(f2.toString()); };\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://mister-hope.github.io/posts/JavaScipt%E5%9F%BA%E7%A1%80/JavaScript%E6%96%B9%E6%B3%95/async%E7%9A%84%E4%BA%A7%E7%94%9F%EF%BC%8C%E7%94%9F%E6%88%90%E5%99%A8%E7%9B%B8%E5%85%B3%E8%A7%A3%E8%AF%BB.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"饮东的博客\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"async的产生，生成器相关解读\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"async的产生，生成器相关解读 ES2017 标准引入了 async 函数，使得异步操作变得更加方便。 async 函数是什么？一句话，它就是 Generator 函数的语法糖。 关于 Generator 函数，依次读取两个文件。 const fs = require('fs'); const readFile = function (fileName) { return new Promise(function (resolve, reject) { fs.readFile(fileName, function(error, data) { if (error) return reject(error); resolve(data); }); }); }; const gen = function* () { const f1 = yield readFile('/etc/fstab'); const f2 = yield readFile('/etc/shells'); console.log(f1.toString()); console.log(f2.toString()); };\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"og:updated_time\",\"content\":\"2023-02-04T14:50:36.000Z\"}],[\"meta\",{\"property\":\"article:modified_time\",\"content\":\"2023-02-04T14:50:36.000Z\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"async的产生，生成器相关解读\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":\\\"2023-02-04T14:50:36.000Z\\\",\\\"author\\\":[]}\"]]},\"headers\":[],\"git\":{\"createdTime\":1675516539000,\"updatedTime\":1675522236000,\"contributors\":[{\"name\":\"yinjindong\",\"email\":\"yinjindong@newrank.cn\",\"commits\":2}]},\"readingTime\":{\"minutes\":1.79,\"words\":537},\"filePathRelative\":\"posts/JavaScipt基础/JavaScript方法/async的产生，生成器相关解读.md\",\"localizedDate\":\"2023年2月4日\",\"excerpt\":\"<h1> async的产生，生成器相关解读</h1>\\n<p>ES2017 标准引入了 async 函数，使得异步操作变得更加方便。</p>\\n<p>async 函数是什么？一句话，它就是 Generator 函数的语法糖。</p>\\n<p>关于 Generator 函数，依次读取两个文件。</p>\\n<div class=\\\"language-javascript line-numbers-mode\\\" data-ext=\\\"js\\\"><pre class=\\\"language-javascript\\\"><code><span class=\\\"token keyword\\\">const</span> fs <span class=\\\"token operator\\\">=</span> <span class=\\\"token function\\\">require</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token string\\\">'fs'</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\n\\n<span class=\\\"token keyword\\\">const</span> <span class=\\\"token function-variable function\\\">readFile</span> <span class=\\\"token operator\\\">=</span> <span class=\\\"token keyword\\\">function</span> <span class=\\\"token punctuation\\\">(</span><span class=\\\"token parameter\\\">fileName</span><span class=\\\"token punctuation\\\">)</span> <span class=\\\"token punctuation\\\">{</span>\\n  <span class=\\\"token keyword\\\">return</span> <span class=\\\"token keyword\\\">new</span> <span class=\\\"token class-name\\\">Promise</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token keyword\\\">function</span> <span class=\\\"token punctuation\\\">(</span><span class=\\\"token parameter\\\">resolve<span class=\\\"token punctuation\\\">,</span> reject</span><span class=\\\"token punctuation\\\">)</span> <span class=\\\"token punctuation\\\">{</span>\\n    fs<span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">readFile</span><span class=\\\"token punctuation\\\">(</span>fileName<span class=\\\"token punctuation\\\">,</span> <span class=\\\"token keyword\\\">function</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token parameter\\\">error<span class=\\\"token punctuation\\\">,</span> data</span><span class=\\\"token punctuation\\\">)</span> <span class=\\\"token punctuation\\\">{</span>\\n      <span class=\\\"token keyword\\\">if</span> <span class=\\\"token punctuation\\\">(</span>error<span class=\\\"token punctuation\\\">)</span> <span class=\\\"token keyword\\\">return</span> <span class=\\\"token function\\\">reject</span><span class=\\\"token punctuation\\\">(</span>error<span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\n      <span class=\\\"token function\\\">resolve</span><span class=\\\"token punctuation\\\">(</span>data<span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\n    <span class=\\\"token punctuation\\\">}</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\n  <span class=\\\"token punctuation\\\">}</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\n<span class=\\\"token punctuation\\\">}</span><span class=\\\"token punctuation\\\">;</span>\\n\\n<span class=\\\"token keyword\\\">const</span> <span class=\\\"token function-variable function\\\">gen</span> <span class=\\\"token operator\\\">=</span> <span class=\\\"token keyword\\\">function</span><span class=\\\"token operator\\\">*</span> <span class=\\\"token punctuation\\\">(</span><span class=\\\"token punctuation\\\">)</span> <span class=\\\"token punctuation\\\">{</span>\\n  <span class=\\\"token keyword\\\">const</span> f1 <span class=\\\"token operator\\\">=</span> <span class=\\\"token keyword\\\">yield</span> <span class=\\\"token function\\\">readFile</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token string\\\">'/etc/fstab'</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\n  <span class=\\\"token keyword\\\">const</span> f2 <span class=\\\"token operator\\\">=</span> <span class=\\\"token keyword\\\">yield</span> <span class=\\\"token function\\\">readFile</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token string\\\">'/etc/shells'</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\n  console<span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">log</span><span class=\\\"token punctuation\\\">(</span>f1<span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">toString</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\n  console<span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">log</span><span class=\\\"token punctuation\\\">(</span>f2<span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">toString</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\n<span class=\\\"token punctuation\\\">}</span><span class=\\\"token punctuation\\\">;</span>\\n</code></pre><div class=\\\"line-numbers\\\" aria-hidden=\\\"true\\\"><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div></div></div>\",\"autoDesc\":true}")
