const data = JSON.parse('{"key":"v-42a677d8","path":"/posts/JavaScipt%E5%9F%BA%E7%A1%80/%E7%BA%A2%E5%AE%9D%E4%B9%A6/%E6%89%A7%E8%A1%8C%E4%B8%8A%E4%B8%8B%E6%96%87%E4%B8%8E%E4%BD%9C%E7%94%A8%E5%9F%9F.html","title":"","lang":"zh-CN","frontmatter":{"description":"上下文 上下文之间的连接是线性的、有序的。每个上下文都可以到上一级上下文中去搜索变量和函数，但是不能到下一级去搜索。有点像事件冒泡，一层一层往上。 作用域链增强 tyr/catch 中的catch块 with语句 这两种情况下，会在作用域链前端加一个变量对象 function buildUrl() { let qs = \\"?debug=true\\"; with(location) { let url = href + qs; } return url; }","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/posts/JavaScipt%E5%9F%BA%E7%A1%80/%E7%BA%A2%E5%AE%9D%E4%B9%A6/%E6%89%A7%E8%A1%8C%E4%B8%8A%E4%B8%8B%E6%96%87%E4%B8%8E%E4%BD%9C%E7%94%A8%E5%9F%9F.html"}],["meta",{"property":"og:site_name","content":"饮东的博客"}],["meta",{"property":"og:description","content":"上下文 上下文之间的连接是线性的、有序的。每个上下文都可以到上一级上下文中去搜索变量和函数，但是不能到下一级去搜索。有点像事件冒泡，一层一层往上。 作用域链增强 tyr/catch 中的catch块 with语句 这两种情况下，会在作用域链前端加一个变量对象 function buildUrl() { let qs = \\"?debug=true\\"; with(location) { let url = href + qs; } return url; }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-02-04T14:50:36.000Z"}],["meta",{"property":"article:modified_time","content":"2023-02-04T14:50:36.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-02-04T14:50:36.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":3,"title":"上下文","slug":"上下文","link":"#上下文","children":[]},{"level":3,"title":"作用域链增强","slug":"作用域链增强","link":"#作用域链增强","children":[]}],"git":{"createdTime":1675516539000,"updatedTime":1675522236000,"contributors":[{"name":"yinjindong","email":"yinjindong@newrank.cn","commits":2}]},"readingTime":{"minutes":0.39,"words":117},"filePathRelative":"posts/JavaScipt基础/红宝书/执行上下文与作用域.md","localizedDate":"2023年2月4日","excerpt":"<h3> 上下文</h3>\\n<p>上下文之间的连接是线性的、有序的。每个上下文都可以到上一级上下文中去搜索变量和函数，但是不能到下一级去搜索。有点像事件冒泡，一层一层往上。</p>\\n<h3> 作用域链增强</h3>\\n<ul>\\n<li>\\n<p>tyr/catch 中的catch块</p>\\n</li>\\n<li>\\n<p>with语句</p>\\n<p>这两种情况下，会在作用域链前端加一个变量对象</p>\\n</li>\\n</ul>\\n<div class=\\"language-javascript line-numbers-mode\\" data-ext=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token keyword\\">function</span> <span class=\\"token function\\">buildUrl</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token keyword\\">let</span> qs <span class=\\"token operator\\">=</span> <span class=\\"token string\\">\\"?debug=true\\"</span><span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token keyword\\">with</span><span class=\\"token punctuation\\">(</span>location<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">let</span> url <span class=\\"token operator\\">=</span> href <span class=\\"token operator\\">+</span> qs<span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token punctuation\\">}</span>\\n  <span class=\\"token keyword\\">return</span> url<span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');
export {
  data
};
