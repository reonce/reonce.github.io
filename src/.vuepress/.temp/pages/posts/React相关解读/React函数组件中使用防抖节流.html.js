export const data = JSON.parse("{\"key\":\"v-1f21b52a\",\"path\":\"/posts/React%E7%9B%B8%E5%85%B3%E8%A7%A3%E8%AF%BB/React%E5%87%BD%E6%95%B0%E7%BB%84%E4%BB%B6%E4%B8%AD%E4%BD%BF%E7%94%A8%E9%98%B2%E6%8A%96%E8%8A%82%E6%B5%81.html\",\"title\":\"React函数组件中使用防抖节流\",\"lang\":\"zh-CN\",\"frontmatter\":{\"description\":\"React函数组件中使用防抖节流 由于react组件变量变化会导致重复渲染的特性，不能直接的使用loadsh的debouce进行防抖。 解决思路： 使用useCallback保持防抖函数的唯一性，不重复渲染 例如： function useDebounce(fn, delay) { return useCallback(debounce(fn, delay), []) } export default function() { const [counter, setCounter] = useState(0); const handleClick = useDebounce(function() { setCounter(counter + 1) }, 1000) return &lt;div style={{ padding: 30 }}&gt; &lt;Button onClick={handleClick} &gt;click&lt;/Button&gt; &lt;div&gt;{counter}&lt;/div&gt; &lt;/div&gt; }\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://mister-hope.github.io/posts/React%E7%9B%B8%E5%85%B3%E8%A7%A3%E8%AF%BB/React%E5%87%BD%E6%95%B0%E7%BB%84%E4%BB%B6%E4%B8%AD%E4%BD%BF%E7%94%A8%E9%98%B2%E6%8A%96%E8%8A%82%E6%B5%81.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"饮东的博客\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"React函数组件中使用防抖节流\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"React函数组件中使用防抖节流 由于react组件变量变化会导致重复渲染的特性，不能直接的使用loadsh的debouce进行防抖。 解决思路： 使用useCallback保持防抖函数的唯一性，不重复渲染 例如： function useDebounce(fn, delay) { return useCallback(debounce(fn, delay), []) } export default function() { const [counter, setCounter] = useState(0); const handleClick = useDebounce(function() { setCounter(counter + 1) }, 1000) return &lt;div style={{ padding: 30 }}&gt; &lt;Button onClick={handleClick} &gt;click&lt;/Button&gt; &lt;div&gt;{counter}&lt;/div&gt; &lt;/div&gt; }\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"og:updated_time\",\"content\":\"2023-02-04T13:15:39.000Z\"}],[\"meta\",{\"property\":\"article:modified_time\",\"content\":\"2023-02-04T13:15:39.000Z\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"React函数组件中使用防抖节流\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":\\\"2023-02-04T13:15:39.000Z\\\",\\\"author\\\":[]}\"]]},\"headers\":[{\"level\":3,\"title\":\"解决思路： 使用useCallback保持防抖函数的唯一性，不重复渲染\",\"slug\":\"解决思路-使用usecallback保持防抖函数的唯一性-不重复渲染\",\"link\":\"#解决思路-使用usecallback保持防抖函数的唯一性-不重复渲染\",\"children\":[]},{\"level\":3,\"title\":\"解决思路：用Ref来保持唯一性\",\"slug\":\"解决思路-用ref来保持唯一性\",\"link\":\"#解决思路-用ref来保持唯一性\",\"children\":[]}],\"git\":{\"createdTime\":1675516539000,\"updatedTime\":1675516539000,\"contributors\":[{\"name\":\"yinjindong\",\"email\":\"yinjindong@newrank.cn\",\"commits\":1}]},\"readingTime\":{\"minutes\":1.23,\"words\":369},\"filePathRelative\":\"posts/React相关解读/React函数组件中使用防抖节流.md\",\"localizedDate\":\"2023年2月4日\",\"excerpt\":\"<h1> React函数组件中使用防抖节流</h1>\\n<h5> 由于react组件变量变化会导致重复渲染的特性，不能直接的使用loadsh的debouce进行防抖。</h5>\\n<h3> 解决思路： 使用useCallback保持防抖函数的唯一性，不重复渲染</h3>\\n<p>例如：</p>\\n<div class=\\\"language-javascript line-numbers-mode\\\" data-ext=\\\"js\\\"><pre class=\\\"language-javascript\\\"><code><span class=\\\"token keyword\\\">function</span> <span class=\\\"token function\\\">useDebounce</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token parameter\\\">fn<span class=\\\"token punctuation\\\">,</span> delay</span><span class=\\\"token punctuation\\\">)</span> <span class=\\\"token punctuation\\\">{</span>\\n  <span class=\\\"token keyword\\\">return</span> <span class=\\\"token function\\\">useCallback</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token function\\\">debounce</span><span class=\\\"token punctuation\\\">(</span>fn<span class=\\\"token punctuation\\\">,</span> delay<span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">,</span> <span class=\\\"token punctuation\\\">[</span><span class=\\\"token punctuation\\\">]</span><span class=\\\"token punctuation\\\">)</span>\\n<span class=\\\"token punctuation\\\">}</span>\\n\\n<span class=\\\"token keyword\\\">export</span> <span class=\\\"token keyword\\\">default</span> <span class=\\\"token keyword\\\">function</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token punctuation\\\">)</span> <span class=\\\"token punctuation\\\">{</span>\\n  <span class=\\\"token keyword\\\">const</span> <span class=\\\"token punctuation\\\">[</span>counter<span class=\\\"token punctuation\\\">,</span> setCounter<span class=\\\"token punctuation\\\">]</span> <span class=\\\"token operator\\\">=</span> <span class=\\\"token function\\\">useState</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token number\\\">0</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\n\\n  <span class=\\\"token keyword\\\">const</span> handleClick <span class=\\\"token operator\\\">=</span> <span class=\\\"token function\\\">useDebounce</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token keyword\\\">function</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token punctuation\\\">)</span> <span class=\\\"token punctuation\\\">{</span>\\n    <span class=\\\"token function\\\">setCounter</span><span class=\\\"token punctuation\\\">(</span>counter <span class=\\\"token operator\\\">+</span> <span class=\\\"token number\\\">1</span><span class=\\\"token punctuation\\\">)</span>\\n  <span class=\\\"token punctuation\\\">}</span><span class=\\\"token punctuation\\\">,</span> <span class=\\\"token number\\\">1000</span><span class=\\\"token punctuation\\\">)</span>\\n\\n  <span class=\\\"token keyword\\\">return</span> <span class=\\\"token operator\\\">&lt;</span>div style<span class=\\\"token operator\\\">=</span><span class=\\\"token punctuation\\\">{</span><span class=\\\"token punctuation\\\">{</span> <span class=\\\"token literal-property property\\\">padding</span><span class=\\\"token operator\\\">:</span> <span class=\\\"token number\\\">30</span> <span class=\\\"token punctuation\\\">}</span><span class=\\\"token punctuation\\\">}</span><span class=\\\"token operator\\\">&gt;</span>\\n    <span class=\\\"token operator\\\">&lt;</span>Button\\n      onClick<span class=\\\"token operator\\\">=</span><span class=\\\"token punctuation\\\">{</span>handleClick<span class=\\\"token punctuation\\\">}</span>\\n    <span class=\\\"token operator\\\">&gt;</span>click<span class=\\\"token operator\\\">&lt;</span><span class=\\\"token operator\\\">/</span>Button<span class=\\\"token operator\\\">&gt;</span>\\n    <span class=\\\"token operator\\\">&lt;</span>div<span class=\\\"token operator\\\">&gt;</span><span class=\\\"token punctuation\\\">{</span>counter<span class=\\\"token punctuation\\\">}</span><span class=\\\"token operator\\\">&lt;</span><span class=\\\"token operator\\\">/</span>div<span class=\\\"token operator\\\">&gt;</span>\\n  <span class=\\\"token operator\\\">&lt;</span><span class=\\\"token operator\\\">/</span>div<span class=\\\"token operator\\\">&gt;</span>\\n<span class=\\\"token punctuation\\\">}</span>\\n</code></pre><div class=\\\"line-numbers\\\" aria-hidden=\\\"true\\\"><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div></div></div>\",\"autoDesc\":true}")
