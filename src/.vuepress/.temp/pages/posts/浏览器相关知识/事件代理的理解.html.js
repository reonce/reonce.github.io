export const data = JSON.parse("{\"key\":\"v-4192394a\",\"path\":\"/posts/%E6%B5%8F%E8%A7%88%E5%99%A8%E7%9B%B8%E5%85%B3%E7%9F%A5%E8%AF%86/%E4%BA%8B%E4%BB%B6%E4%BB%A3%E7%90%86%E7%9A%84%E7%90%86%E8%A7%A3.html\",\"title\":\"事件代理（委托）的理解\",\"lang\":\"zh-CN\",\"frontmatter\":{\"description\":\"事件代理（委托）的理解 事件代理是指通过监听父元素并绑定函数，达到子元素触发事件时引发的事件冒泡，然后触发父元素绑定的函数。 形象的比喻：爹有3个儿，监听爹，给爹绑定一条指令，孩子读书的时候，爹要交学费。 大娃上学了，大娃的事件触发，事件冒泡到爹（大娃告诉爹 ps: nodeName：大娃）， 爹给大娃交学费（爹的函数中给大娃的属性做些操作），这就是一个事件代理的思想，不需要给每个娃绑定事件，而是给爹绑定事件。 （reonce原创） 由于事件流的特性，可以把多个事件函数减为一个，对于不同的元素可以有不同的处理方法。\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://mister-hope.github.io/posts/%E6%B5%8F%E8%A7%88%E5%99%A8%E7%9B%B8%E5%85%B3%E7%9F%A5%E8%AF%86/%E4%BA%8B%E4%BB%B6%E4%BB%A3%E7%90%86%E7%9A%84%E7%90%86%E8%A7%A3.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"饮东的博客\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"事件代理（委托）的理解\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"事件代理（委托）的理解 事件代理是指通过监听父元素并绑定函数，达到子元素触发事件时引发的事件冒泡，然后触发父元素绑定的函数。 形象的比喻：爹有3个儿，监听爹，给爹绑定一条指令，孩子读书的时候，爹要交学费。 大娃上学了，大娃的事件触发，事件冒泡到爹（大娃告诉爹 ps: nodeName：大娃）， 爹给大娃交学费（爹的函数中给大娃的属性做些操作），这就是一个事件代理的思想，不需要给每个娃绑定事件，而是给爹绑定事件。 （reonce原创） 由于事件流的特性，可以把多个事件函数减为一个，对于不同的元素可以有不同的处理方法。\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"事件代理（委托）的理解\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[]}\"]]},\"headers\":[],\"readingTime\":{\"minutes\":1.66,\"words\":499},\"filePathRelative\":\"posts/浏览器相关知识/事件代理的理解.md\",\"excerpt\":\"<h1> 事件代理（委托）的理解</h1>\\n<p>事件代理是指通过监听父元素并绑定函数，达到子元素触发事件时引发的事件冒泡，然后触发父元素绑定的函数。</p>\\n<blockquote>\\n<p>形象的比喻：爹有3个儿，监听爹，给爹绑定一条指令，孩子读书的时候，爹要交学费。  大娃上学了，大娃的事件触发，事件冒泡到爹（大娃告诉爹 ps: nodeName：大娃）， 爹给大娃交学费（爹的函数中给大娃的属性做些操作），这就是一个事件代理的思想，不需要给每个娃绑定事件，而是给爹绑定事件。 （reonce原创）</p>\\n</blockquote>\\n<p>由于事件流的特性，可以把多个事件函数减为一个，对于不同的元素可以有不同的处理方法。</p>\",\"autoDesc\":true}")

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
