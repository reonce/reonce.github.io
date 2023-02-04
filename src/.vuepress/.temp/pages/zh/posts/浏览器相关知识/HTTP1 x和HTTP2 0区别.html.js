export const data = JSON.parse("{\"key\":\"v-217d339e\",\"path\":\"/zh/posts/%E6%B5%8F%E8%A7%88%E5%99%A8%E7%9B%B8%E5%85%B3%E7%9F%A5%E8%AF%86/HTTP1%20x%E5%92%8CHTTP2%200%E5%8C%BA%E5%88%AB.html\",\"title\":\"HTTP1.x和HTTP2.0区别\",\"lang\":\"zh-CN\",\"frontmatter\":{\"description\":\"HTTP1.x和HTTP2.0区别 HTTP2采用二进制格式传输，取代了HTTP1.x的文本格式，二进制格式解析更高效。多路复用代替了HTTP1.x的序列和阻塞机制，所有的相同域名请求都通过同一个TCP连接并发完成。在HTTP1.x中，并发多个请求需要多个TCP连接，浏览器为了控制资源会有6-8个TCP连接都限制。 HTTP2中 同域名下所有通信都在单个连接上完成，消除了因多个 TCP 连接而带来的延时和内存消耗。 单个连接上可以并行交错的请求和响应，之间互不干扰\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://mister-hope.github.io/zh/posts/%E6%B5%8F%E8%A7%88%E5%99%A8%E7%9B%B8%E5%85%B3%E7%9F%A5%E8%AF%86/HTTP1%20x%E5%92%8CHTTP2%200%E5%8C%BA%E5%88%AB.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"饮东的博客\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"HTTP1.x和HTTP2.0区别\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"HTTP1.x和HTTP2.0区别 HTTP2采用二进制格式传输，取代了HTTP1.x的文本格式，二进制格式解析更高效。多路复用代替了HTTP1.x的序列和阻塞机制，所有的相同域名请求都通过同一个TCP连接并发完成。在HTTP1.x中，并发多个请求需要多个TCP连接，浏览器为了控制资源会有6-8个TCP连接都限制。 HTTP2中 同域名下所有通信都在单个连接上完成，消除了因多个 TCP 连接而带来的延时和内存消耗。 单个连接上可以并行交错的请求和响应，之间互不干扰\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"HTTP1.x和HTTP2.0区别\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[]}\"]]},\"headers\":[],\"readingTime\":{\"minutes\":2.29,\"words\":688},\"filePathRelative\":\"zh/posts/浏览器相关知识/HTTP1 x和HTTP2 0区别.md\",\"excerpt\":\"<h1> HTTP1.x和HTTP2.0区别</h1>\\n<p>HTTP2采用二进制格式传输，取代了HTTP1.x的文本格式，二进制格式解析更高效。多路复用代替了HTTP1.x的序列和阻塞机制，所有的相同域名请求都通过同一个TCP连接并发完成。在HTTP1.x中，并发多个请求需要多个TCP连接，浏览器为了控制资源会有6-8个TCP连接都限制。</p>\\n<p><strong>HTTP2中</strong></p>\\n<ul>\\n<li>同域名下所有通信都在单个连接上完成，消除了因多个 TCP 连接而带来的延时和内存消耗。</li>\\n<li>单个连接上可以并行交错的请求和响应，之间互不干扰</li>\\n</ul>\",\"autoDesc\":true}")

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
