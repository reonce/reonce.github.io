const data = JSON.parse('{"key":"v-0ec8fb2a","path":"/posts/JavaScipt%E5%9F%BA%E7%A1%80/JavaScript%E6%96%B9%E6%B3%95/Array.from%20%E6%96%B9%E6%B3%95%E6%B7%B1%E5%BA%A6%E8%A7%A3%E8%AF%BB.html","title":"Array.from 方法深度解读","lang":"zh-CN","frontmatter":{"description":"Array.from 方法深度解读 先看下MDN官方介绍: Array.from() 方法从一个类似数组或可迭代对象创建一个新的，浅拷贝的数组实例。 创建一个新的、浅拷贝的数组，这里最开始很难理解这句话。“新的”或许代表着深拷贝？ 但是为什么又说是创建浅拷贝呢。 这里放一段让我对Array.from浅拷贝疑惑的代码 const arr = [1,2,3]; const copyArr = Array.from(arr); copyArr[0] = 8; console.log(copyArr); // [8, 2, 3] console.log(arr); // [1,2,3]","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/posts/JavaScipt%E5%9F%BA%E7%A1%80/JavaScript%E6%96%B9%E6%B3%95/Array.from%20%E6%96%B9%E6%B3%95%E6%B7%B1%E5%BA%A6%E8%A7%A3%E8%AF%BB.html"}],["meta",{"property":"og:site_name","content":"饮东的博客"}],["meta",{"property":"og:title","content":"Array.from 方法深度解读"}],["meta",{"property":"og:description","content":"Array.from 方法深度解读 先看下MDN官方介绍: Array.from() 方法从一个类似数组或可迭代对象创建一个新的，浅拷贝的数组实例。 创建一个新的、浅拷贝的数组，这里最开始很难理解这句话。“新的”或许代表着深拷贝？ 但是为什么又说是创建浅拷贝呢。 这里放一段让我对Array.from浅拷贝疑惑的代码 const arr = [1,2,3]; const copyArr = Array.from(arr); copyArr[0] = 8; console.log(copyArr); // [8, 2, 3] console.log(arr); // [1,2,3]"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Array.from 方法深度解读\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":2.45,"words":736},"filePathRelative":"posts/JavaScipt基础/JavaScript方法/Array.from 方法深度解读.md","excerpt":"<h1> Array.from 方法深度解读</h1>\\n<p>先看下MDN官方介绍:\\n<strong>Array.from() 方法从一个类似数组或可迭代对象创建一个新的，浅拷贝的数组实例。</strong>\\n创建一个新的、浅拷贝的数组，这里最开始很难理解这句话。“新的”或许代表着深拷贝？ 但是为什么又说是创建浅拷贝呢。\\n这里放一段让我对<code>Array.from</code><strong>浅拷贝</strong>疑惑的代码</p>\\n<div class=\\"language-javascript line-numbers-mode\\" data-ext=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token keyword\\">const</span> arr <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">[</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">,</span><span class=\\"token number\\">2</span><span class=\\"token punctuation\\">,</span><span class=\\"token number\\">3</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token keyword\\">const</span> copyArr <span class=\\"token operator\\">=</span> Array<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">from</span><span class=\\"token punctuation\\">(</span>arr<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\ncopyArr<span class=\\"token punctuation\\">[</span><span class=\\"token number\\">0</span><span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">=</span> <span class=\\"token number\\">8</span><span class=\\"token punctuation\\">;</span>\\nconsole<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">log</span><span class=\\"token punctuation\\">(</span>copyArr<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span> <span class=\\"token comment\\">// [8, 2, 3]</span>\\nconsole<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">log</span><span class=\\"token punctuation\\">(</span>arr<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span> <span class=\\"token comment\\">// [1,2,3]</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');
export {
  data
};
