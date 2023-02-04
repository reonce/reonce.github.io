export const data = JSON.parse("{\"key\":\"v-b16f5fc6\",\"path\":\"/posts/%E6%89%8B%E5%86%99%E7%AE%97%E6%B3%95%E7%B3%BB%E5%88%97/%E5%AE%9E%E7%8E%B0%E4%B8%80%E4%B8%AA%E5%8F%AF%E9%93%BE%E5%BC%8F%E8%B0%83%E7%94%A8%E3%80%81%E5%8F%AF%E7%AD%89%E5%BE%85%E6%89%A7%E8%A1%8C%E7%9A%84%E7%B1%BB%203ff786584ab24b19b3bca0b613b1a1a5.html\",\"title\":\"实现一个可链式调用、可等待执行的类\",\"lang\":\"zh-CN\",\"frontmatter\":{\"description\":\"实现一个可链式调用、可等待执行的类 const ny = new NiceTry(\\\"jack\\\"); ny.sayName().sleep(2000).play(\\\"吃饭\\\").sleep(1000).play(\\\"玩游戏\\\"); /** jack 等待了2000秒... 我在吃饭 等待了1000秒... 我在玩游戏 */ class NiceTry { constructor(name) {} ... }\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://mister-hope.github.io/posts/%E6%89%8B%E5%86%99%E7%AE%97%E6%B3%95%E7%B3%BB%E5%88%97/%E5%AE%9E%E7%8E%B0%E4%B8%80%E4%B8%AA%E5%8F%AF%E9%93%BE%E5%BC%8F%E8%B0%83%E7%94%A8%E3%80%81%E5%8F%AF%E7%AD%89%E5%BE%85%E6%89%A7%E8%A1%8C%E7%9A%84%E7%B1%BB%203ff786584ab24b19b3bca0b613b1a1a5.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"饮东的博客\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"实现一个可链式调用、可等待执行的类\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"实现一个可链式调用、可等待执行的类 const ny = new NiceTry(\\\"jack\\\"); ny.sayName().sleep(2000).play(\\\"吃饭\\\").sleep(1000).play(\\\"玩游戏\\\"); /** jack 等待了2000秒... 我在吃饭 等待了1000秒... 我在玩游戏 */ class NiceTry { constructor(name) {} ... }\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"og:updated_time\",\"content\":\"2023-02-04T13:15:39.000Z\"}],[\"meta\",{\"property\":\"article:modified_time\",\"content\":\"2023-02-04T13:15:39.000Z\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"实现一个可链式调用、可等待执行的类\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":\\\"2023-02-04T13:15:39.000Z\\\",\\\"author\\\":[]}\"]]},\"headers\":[],\"git\":{\"createdTime\":1675516539000,\"updatedTime\":1675516539000,\"contributors\":[{\"name\":\"yinjindong\",\"email\":\"yinjindong@newrank.cn\",\"commits\":1}]},\"readingTime\":{\"minutes\":0.77,\"words\":231},\"filePathRelative\":\"posts/手写算法系列/实现一个可链式调用、可等待执行的类 3ff786584ab24b19b3bca0b613b1a1a5.md\",\"localizedDate\":\"2023年2月4日\",\"excerpt\":\"<h1> 实现一个可链式调用、可等待执行的类</h1>\\n<div class=\\\"language-jsx line-numbers-mode\\\" data-ext=\\\"jsx\\\"><pre class=\\\"language-jsx\\\"><code><span class=\\\"token keyword\\\">const</span> ny <span class=\\\"token operator\\\">=</span> <span class=\\\"token keyword\\\">new</span> <span class=\\\"token class-name\\\">NiceTry</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token string\\\">\\\"jack\\\"</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\n\\nny<span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">sayName</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">sleep</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token number\\\">2000</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">play</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token string\\\">\\\"吃饭\\\"</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">sleep</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token number\\\">1000</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">play</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token string\\\">\\\"玩游戏\\\"</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\n\\n<span class=\\\"token comment\\\">/**\\njack\\n等待了2000秒...\\n我在吃饭\\n等待了1000秒...\\n我在玩游戏\\n*/</span>\\n\\n<span class=\\\"token keyword\\\">class</span> <span class=\\\"token class-name\\\">NiceTry</span> <span class=\\\"token punctuation\\\">{</span>\\n  <span class=\\\"token function\\\">constructor</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token parameter\\\">name</span><span class=\\\"token punctuation\\\">)</span> <span class=\\\"token punctuation\\\">{</span><span class=\\\"token punctuation\\\">}</span>\\n  <span class=\\\"token operator\\\">...</span>\\n<span class=\\\"token punctuation\\\">}</span>\\n</code></pre><div class=\\\"line-numbers\\\" aria-hidden=\\\"true\\\"><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div></div></div>\",\"autoDesc\":true}")
