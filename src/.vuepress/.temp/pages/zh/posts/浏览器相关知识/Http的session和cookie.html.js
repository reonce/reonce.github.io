export const data = JSON.parse("{\"key\":\"v-70f90a3e\",\"path\":\"/zh/posts/%E6%B5%8F%E8%A7%88%E5%99%A8%E7%9B%B8%E5%85%B3%E7%9F%A5%E8%AF%86/Http%E7%9A%84session%E5%92%8Ccookie.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{\"description\":\"cookie算是session的一种实现方式。由于http无状态的特性，服务端想要知道是哪个用户请求的接口，就必须有一个标识来确认，服务端通过某种机制获取用户信息，就是一个典型的session场景。现在主流的方案是cookie里携带一个session的id标识，服务端拿到这个id后，查询得知是哪个用户调的接口。 服务端保存Session的方法很多，内存、数据库、文件都有。集群的时候也要考虑Session的转移，在大型的网站，一般会有专门的Session服务器集群，用来保存用户会话，这个时候 Session 信息都是放在内存的，使用一些缓存服务比如Memcached之类的来放 Session。\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://mister-hope.github.io/zh/posts/%E6%B5%8F%E8%A7%88%E5%99%A8%E7%9B%B8%E5%85%B3%E7%9F%A5%E8%AF%86/Http%E7%9A%84session%E5%92%8Ccookie.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"饮东的博客\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"cookie算是session的一种实现方式。由于http无状态的特性，服务端想要知道是哪个用户请求的接口，就必须有一个标识来确认，服务端通过某种机制获取用户信息，就是一个典型的session场景。现在主流的方案是cookie里携带一个session的id标识，服务端拿到这个id后，查询得知是哪个用户调的接口。 服务端保存Session的方法很多，内存、数据库、文件都有。集群的时候也要考虑Session的转移，在大型的网站，一般会有专门的Session服务器集群，用来保存用户会话，这个时候 Session 信息都是放在内存的，使用一些缓存服务比如Memcached之类的来放 Session。\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[]}\"]]},\"headers\":[],\"readingTime\":{\"minutes\":0.9,\"words\":270},\"filePathRelative\":\"zh/posts/浏览器相关知识/Http的session和cookie.md\",\"excerpt\":\"<p>cookie算是session的一种实现方式。由于http无状态的特性，服务端想要知道是哪个用户请求的接口，就必须有一个标识来确认，服务端通过某种机制获取用户信息，就是一个典型的<strong>session</strong>场景。现在主流的方案是cookie里携带一个session的id标识，服务端拿到这个id后，查询得知是哪个用户调的接口。</p>\\n<blockquote>\\n<p>服务端保存Session的方法很多，内存、数据库、文件都有。集群的时候也要考虑Session的转移，在大型的网站，一般会有专门的Session服务器集群，用来保存用户会话，这个时候 Session 信息都是放在内存的，使用一些缓存服务比如Memcached之类的来放 Session。</p>\\n</blockquote>\",\"autoDesc\":true}")

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
