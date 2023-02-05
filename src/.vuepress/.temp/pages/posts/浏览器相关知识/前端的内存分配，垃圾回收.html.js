export const data = JSON.parse("{\"key\":\"v-1e5b26d9\",\"path\":\"/posts/%E6%B5%8F%E8%A7%88%E5%99%A8%E7%9B%B8%E5%85%B3%E7%9F%A5%E8%AF%86/%E5%89%8D%E7%AB%AF%E7%9A%84%E5%86%85%E5%AD%98%E5%88%86%E9%85%8D%EF%BC%8C%E5%9E%83%E5%9C%BE%E5%9B%9E%E6%94%B6.html\",\"title\":\"前端的内存分配，垃圾回收\",\"lang\":\"zh-CN\",\"frontmatter\":{\"description\":\"前端的内存分配，垃圾回收 内存的生命周期 内存分配： 生命变量，函数，对象的时候，js会自动分配内存 内存使用： 调用的时候，使用的时候 内存回收： 下面讲 js中的垃圾回收机制 引用计数垃圾回收 如果a对象对b对象有访问权限，那么称为a引用b对象。 检查b有没有被引用，如果没有使用了，回收。 缺陷： 循环引用，a引用了b，b也引用了a，造成内存泄漏。\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://mister-hope.github.io/posts/%E6%B5%8F%E8%A7%88%E5%99%A8%E7%9B%B8%E5%85%B3%E7%9F%A5%E8%AF%86/%E5%89%8D%E7%AB%AF%E7%9A%84%E5%86%85%E5%AD%98%E5%88%86%E9%85%8D%EF%BC%8C%E5%9E%83%E5%9C%BE%E5%9B%9E%E6%94%B6.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"饮东的博客\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"前端的内存分配，垃圾回收\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"前端的内存分配，垃圾回收 内存的生命周期 内存分配： 生命变量，函数，对象的时候，js会自动分配内存 内存使用： 调用的时候，使用的时候 内存回收： 下面讲 js中的垃圾回收机制 引用计数垃圾回收 如果a对象对b对象有访问权限，那么称为a引用b对象。 检查b有没有被引用，如果没有使用了，回收。 缺陷： 循环引用，a引用了b，b也引用了a，造成内存泄漏。\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"og:updated_time\",\"content\":\"2023-02-04T13:15:39.000Z\"}],[\"meta\",{\"property\":\"article:modified_time\",\"content\":\"2023-02-04T13:15:39.000Z\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"前端的内存分配，垃圾回收\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":\\\"2023-02-04T13:15:39.000Z\\\",\\\"author\\\":[]}\"]]},\"headers\":[{\"level\":2,\"title\":\"内存的生命周期\",\"slug\":\"内存的生命周期\",\"link\":\"#内存的生命周期\",\"children\":[]},{\"level\":2,\"title\":\"js中的垃圾回收机制\",\"slug\":\"js中的垃圾回收机制\",\"link\":\"#js中的垃圾回收机制\",\"children\":[{\"level\":3,\"title\":\"引用计数垃圾回收\",\"slug\":\"引用计数垃圾回收\",\"link\":\"#引用计数垃圾回收\",\"children\":[]},{\"level\":3,\"title\":\"标记清除算法\",\"slug\":\"标记清除算法\",\"link\":\"#标记清除算法\",\"children\":[]}]},{\"level\":2,\"title\":\"js中有哪些常见的内存泄露\",\"slug\":\"js中有哪些常见的内存泄露\",\"link\":\"#js中有哪些常见的内存泄露\",\"children\":[]},{\"level\":2,\"title\":\"如何避免内存泄漏\",\"slug\":\"如何避免内存泄漏\",\"link\":\"#如何避免内存泄漏\",\"children\":[]},{\"level\":2,\"title\":\"实现sizeOf函数，传入一个参数object，计算这个object占用了多少字节的内存\",\"slug\":\"实现sizeof函数-传入一个参数object-计算这个object占用了多少字节的内存\",\"link\":\"#实现sizeof函数-传入一个参数object-计算这个object占用了多少字节的内存\",\"children\":[]}],\"git\":{\"createdTime\":1675516539000,\"updatedTime\":1675516539000,\"contributors\":[{\"name\":\"yinjindong\",\"email\":\"yinjindong@newrank.cn\",\"commits\":1}]},\"readingTime\":{\"minutes\":2,\"words\":599},\"filePathRelative\":\"posts/浏览器相关知识/前端的内存分配，垃圾回收.md\",\"localizedDate\":\"2023年2月4日\",\"excerpt\":\"<h1> 前端的内存分配，垃圾回收</h1>\\n<h2> 内存的生命周期</h2>\\n<ul>\\n<li>内存分配： 生命变量，函数，对象的时候，js会自动分配内存</li>\\n<li>内存使用： 调用的时候，使用的时候</li>\\n<li>内存回收： 下面讲</li>\\n</ul>\\n<h2> js中的垃圾回收机制</h2>\\n<h3> <strong>引用计数垃圾回收</strong></h3>\\n<p>如果a对象对b对象有访问权限，那么称为a引用b对象。</p>\\n<p>检查b有没有被引用，如果没有使用了，回收。</p>\\n<p>缺陷： <strong>循环引用</strong>，a引用了b，b也引用了a，造成内存泄漏。</p>\",\"autoDesc\":true}")
