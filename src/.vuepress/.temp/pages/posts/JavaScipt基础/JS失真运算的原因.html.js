export const data = JSON.parse("{\"key\":\"v-13449b5e\",\"path\":\"/posts/JavaScipt%E5%9F%BA%E7%A1%80/JS%E5%A4%B1%E7%9C%9F%E8%BF%90%E7%AE%97%E7%9A%84%E5%8E%9F%E5%9B%A0.html\",\"title\":\"关于JS失真运算0.55*100=55.0000001\",\"lang\":\"zh-CN\",\"frontmatter\":{\"description\":\"关于JS失真运算0.55*100=55.0000001 今天写业务偶然实现了 0.55*100的代码，结果不尽人意，等于55.0000001 这好吗? 这不好。原因如下： 在JS中，变量存储没有区分数字型和浮点型，而是统一作为浮点型(float)进行存储，这在很久前学习时有个模糊的印象。 查阅资料，IEEE 754-2008 标准定义的64bit浮点格式存储number. 其实JavsScript中，变量在存储时并不区分number和float类型，而是统一按float存储，而javascript使用IEEE 754-2008 标准定义的64bit浮点格式存储number，0.55对应的整形部分长度为0,小数部分长度为16，所以默认的计算结果为“55.0000001”，如最后一个小数为0，则取1作为有效数字标志。类似地，可以想像，1/3的结果应该是0.3333333333333333。\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://mister-hope.github.io/posts/JavaScipt%E5%9F%BA%E7%A1%80/JS%E5%A4%B1%E7%9C%9F%E8%BF%90%E7%AE%97%E7%9A%84%E5%8E%9F%E5%9B%A0.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"饮东的博客\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"关于JS失真运算0.55*100=55.0000001\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"关于JS失真运算0.55*100=55.0000001 今天写业务偶然实现了 0.55*100的代码，结果不尽人意，等于55.0000001 这好吗? 这不好。原因如下： 在JS中，变量存储没有区分数字型和浮点型，而是统一作为浮点型(float)进行存储，这在很久前学习时有个模糊的印象。 查阅资料，IEEE 754-2008 标准定义的64bit浮点格式存储number. 其实JavsScript中，变量在存储时并不区分number和float类型，而是统一按float存储，而javascript使用IEEE 754-2008 标准定义的64bit浮点格式存储number，0.55对应的整形部分长度为0,小数部分长度为16，所以默认的计算结果为“55.0000001”，如最后一个小数为0，则取1作为有效数字标志。类似地，可以想像，1/3的结果应该是0.3333333333333333。\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"关于JS失真运算0.55*100=55.0000001\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[]}\"]]},\"headers\":[],\"readingTime\":{\"minutes\":0.85,\"words\":256},\"filePathRelative\":\"posts/JavaScipt基础/JS失真运算的原因.md\",\"excerpt\":\"<h1> 关于JS失真运算0.55*100=55.0000001</h1>\\n<p><em>今天写业务偶然实现了<code> 0.55*100</code>的代码，结果不尽人意，等于55.0000001</em></p>\\n<hr>\\n<p>这好吗? 这不好。原因如下：</p>\\n<p>在JS中，变量存储没有区分数字型和浮点型，而是统一作为浮点型(float)进行存储，这在很久前学习时有个模糊的印象。\\n查阅资料，IEEE 754-2008 标准定义的64bit浮点格式存储number.</p>\\n<p>其实JavsScript中，变量在存储时并不区分number和float类型，而是统一按float存储，而javascript使用IEEE 754-2008 标准定义的64bit浮点格式存储number，<code>0.55</code>对应的整形部分长度为0,小数部分长度为16，所以默认的计算结果为“55.0000001”，如最后一个小数为0，则取1作为有效数字标志。类似地，可以想像，1/3的结果应该是0.3333333333333333。</p>\",\"autoDesc\":true}")

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
