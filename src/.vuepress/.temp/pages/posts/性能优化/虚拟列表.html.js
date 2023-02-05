export const data = JSON.parse("{\"key\":\"v-61c606ba\",\"path\":\"/posts/%E6%80%A7%E8%83%BD%E4%BC%98%E5%8C%96/%E8%99%9A%E6%8B%9F%E5%88%97%E8%A1%A8.html\",\"title\":\"虚拟列表原理解析\",\"lang\":\"zh-CN\",\"frontmatter\":{\"description\":\"虚拟列表原理解析 前言 虚拟列表介绍 ​\\t虚拟列表是解决大数据量渲染列表的一种方案。原理简述就是只渲染当前视口内的列表项。初次接触容易联想到浏览器的栅格化（raster），但是实现原理和类似于懒加载的栅格化不同，它始终只渲染当前视口的内容，而不是即将看到哪，就增加那块部分的渲染。 通常，解决大数据量渲染问题有两种方案，一种是采用时间分片，另一种就是本文要谈的虚拟列表。在正文开始前，不妨简单了解一下第一种方案，时间分片。\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://mister-hope.github.io/posts/%E6%80%A7%E8%83%BD%E4%BC%98%E5%8C%96/%E8%99%9A%E6%8B%9F%E5%88%97%E8%A1%A8.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"饮东的博客\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"虚拟列表原理解析\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"虚拟列表原理解析 前言 虚拟列表介绍 ​\\t虚拟列表是解决大数据量渲染列表的一种方案。原理简述就是只渲染当前视口内的列表项。初次接触容易联想到浏览器的栅格化（raster），但是实现原理和类似于懒加载的栅格化不同，它始终只渲染当前视口的内容，而不是即将看到哪，就增加那块部分的渲染。 通常，解决大数据量渲染问题有两种方案，一种是采用时间分片，另一种就是本文要谈的虚拟列表。在正文开始前，不妨简单了解一下第一种方案，时间分片。\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"og:updated_time\",\"content\":\"2023-02-04T13:15:39.000Z\"}],[\"meta\",{\"property\":\"article:modified_time\",\"content\":\"2023-02-04T13:15:39.000Z\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"虚拟列表原理解析\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":\\\"2023-02-04T13:15:39.000Z\\\",\\\"author\\\":[]}\"]]},\"headers\":[{\"level\":2,\"title\":\"前言\",\"slug\":\"前言\",\"link\":\"#前言\",\"children\":[{\"level\":3,\"title\":\"虚拟列表介绍\",\"slug\":\"虚拟列表介绍\",\"link\":\"#虚拟列表介绍\",\"children\":[]}]},{\"level\":2,\"title\":\"虚拟列表与时间分片的对比\",\"slug\":\"虚拟列表与时间分片的对比\",\"link\":\"#虚拟列表与时间分片的对比\",\"children\":[]},{\"level\":2,\"title\":\"原理\",\"slug\":\"原理\",\"link\":\"#原理\",\"children\":[]},{\"level\":2,\"title\":\"实现\",\"slug\":\"实现\",\"link\":\"#实现\",\"children\":[]},{\"level\":2,\"title\":\"优化\",\"slug\":\"优化\",\"link\":\"#优化\",\"children\":[{\"level\":3,\"title\":\"更通用的更新、更好的阅读性\",\"slug\":\"更通用的更新、更好的阅读性\",\"link\":\"#更通用的更新、更好的阅读性\",\"children\":[]},{\"level\":3,\"title\":\"监听逻辑设置\",\"slug\":\"监听逻辑设置\",\"link\":\"#监听逻辑设置\",\"children\":[]},{\"level\":3,\"title\":\"升级版useMemo，利用useCreation优化缓存列表\",\"slug\":\"升级版usememo-利用usecreation优化缓存列表\",\"link\":\"#升级版usememo-利用usecreation优化缓存列表\",\"children\":[]},{\"level\":3,\"title\":\"增加了缓存节点\",\"slug\":\"增加了缓存节点\",\"link\":\"#增加了缓存节点\",\"children\":[]},{\"level\":3,\"title\":\"更多的可优化的方向\",\"slug\":\"更多的可优化的方向\",\"link\":\"#更多的可优化的方向\",\"children\":[]}]}],\"git\":{\"createdTime\":1675516539000,\"updatedTime\":1675516539000,\"contributors\":[{\"name\":\"yinjindong\",\"email\":\"yinjindong@newrank.cn\",\"commits\":1}]},\"readingTime\":{\"minutes\":7.96,\"words\":2387},\"filePathRelative\":\"posts/性能优化/虚拟列表.md\",\"localizedDate\":\"2023年2月4日\",\"excerpt\":\"<h1> 虚拟列表原理解析</h1>\\n<h2> 前言</h2>\\n<h3> 虚拟列表介绍</h3>\\n<p>​\\t<strong>虚拟列表</strong>是解决<strong>大数据量渲染</strong>列表的一种方案。原理简述就是只渲染当前视口内的列表项。初次接触容易联想到浏览器的栅格化（raster），但是实现原理和类似于懒加载的栅格化不同，它始终只渲染当前视口的内容，而不是即将看到哪，就增加那块部分的渲染。</p>\\n<p>通常，解决<strong>大数据量渲染</strong>问题有两种方案，一种是采用时间分片，另一种就是本文要谈的虚拟列表。在正文开始前，不妨简单了解一下第一种方案，<strong>时间分片</strong>。</p>\",\"autoDesc\":true}")
