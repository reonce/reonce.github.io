export const data = JSON.parse("{\"key\":\"v-06f36fc1\",\"path\":\"/zh/posts/%E6%84%9F%E6%82%9F/%E9%A2%84%E4%BC%B0%E4%B8%9A%E5%8A%A1%E9%94%99%E8%AF%AF%E5%BC%95%E5%8F%91%E7%9A%84%E6%80%9D%E8%80%83.html\",\"title\":\"预估业务错误引发的思考\",\"lang\":\"zh-CN\",\"frontmatter\":{\"description\":\"预估业务错误引发的思考 需求背景 一个树形多选组件，当子节点全部选中的时候，只传父节点的值，否则传子节点 错误判断 因为在ng-zorro中，这个逻辑是默认的，于是我很爽快的答应了后端这样做。但是在antd react版本中，子节点全选中会把所有子节点和父节点都传出，和需求商讨的方案是不同的，于是我需要自己实现。 技术实现分析 在选中或取消某个节点时，可以拿到当前节点的树结构和对应关系。 当节点作为父节点时，很容易去判断去掉它的子节点。 当节点作为子节点时，难点来了，需要判断它的兄弟节点及它兄弟节点的全部子节点是否全部选中，然后如果全中，在用当前节点的父节点走作为父节点的逻辑还要再走作为子节点的逻辑\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://mister-hope.github.io/zh/posts/%E6%84%9F%E6%82%9F/%E9%A2%84%E4%BC%B0%E4%B8%9A%E5%8A%A1%E9%94%99%E8%AF%AF%E5%BC%95%E5%8F%91%E7%9A%84%E6%80%9D%E8%80%83.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"饮东的博客\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"预估业务错误引发的思考\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"预估业务错误引发的思考 需求背景 一个树形多选组件，当子节点全部选中的时候，只传父节点的值，否则传子节点 错误判断 因为在ng-zorro中，这个逻辑是默认的，于是我很爽快的答应了后端这样做。但是在antd react版本中，子节点全选中会把所有子节点和父节点都传出，和需求商讨的方案是不同的，于是我需要自己实现。 技术实现分析 在选中或取消某个节点时，可以拿到当前节点的树结构和对应关系。 当节点作为父节点时，很容易去判断去掉它的子节点。 当节点作为子节点时，难点来了，需要判断它的兄弟节点及它兄弟节点的全部子节点是否全部选中，然后如果全中，在用当前节点的父节点走作为父节点的逻辑还要再走作为子节点的逻辑\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"预估业务错误引发的思考\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[]}\"]]},\"headers\":[{\"level\":2,\"title\":\"需求背景\",\"slug\":\"需求背景\",\"link\":\"#需求背景\",\"children\":[]},{\"level\":2,\"title\":\"错误判断\",\"slug\":\"错误判断\",\"link\":\"#错误判断\",\"children\":[]},{\"level\":2,\"title\":\"技术实现分析\",\"slug\":\"技术实现分析\",\"link\":\"#技术实现分析\",\"children\":[]},{\"level\":2,\"title\":\"思考\",\"slug\":\"思考\",\"link\":\"#思考\",\"children\":[]}],\"readingTime\":{\"minutes\":1.5,\"words\":449},\"filePathRelative\":\"zh/posts/感悟/预估业务错误引发的思考.md\",\"excerpt\":\"<h1> 预估业务错误引发的思考</h1>\\n<h2> 需求背景</h2>\\n<p>一个树形多选组件，当子节点全部选中的时候，只传父节点的值，否则传子节点</p>\\n<h2> 错误判断</h2>\\n<p>因为在ng-zorro中，这个逻辑是默认的，于是我很爽快的答应了后端这样做。但是在antd react版本中，子节点全选中会把所有子节点和父节点都传出，和需求商讨的方案是不同的，于是我需要自己实现。</p>\\n<h2> 技术实现分析</h2>\\n<p>在选中或取消某个节点时，可以拿到当前节点的树结构和对应关系。</p>\\n<ol>\\n<li>\\n<p>当节点作为父节点时，很容易去判断去掉它的子节点。</p>\\n</li>\\n<li>\\n<p>当节点作为子节点时，<strong>难点</strong>来了，需要判断它的兄弟节点及它兄弟节点的全部子节点是否全部选中，然后如果全中，在用当前节点的父节点走作为父节点的逻辑还要再走作为子节点的逻辑</p>\\n</li>\\n</ol>\",\"autoDesc\":true}")

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
