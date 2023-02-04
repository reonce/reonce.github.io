export const data = JSON.parse("{\"key\":\"v-39a9a810\",\"path\":\"/zh/posts/%E6%89%8B%E5%86%99%E7%AE%97%E6%B3%95%E7%B3%BB%E5%88%97/ES5%E5%AE%9E%E7%8E%B0let%E4%B8%8Econst%203f9f5daaef2448dca1a3e7e8e8474461.html\",\"title\":\"ES5实现let与const\",\"lang\":\"zh-CN\",\"frontmatter\":{\"description\":\"ES5实现let与const 在es5中，没有块级作用域的概念，只有 函数作用域 的概念。 webpack进行模块化打包的时候，也需要把不同的函数隔离开，使得各个模块的代码互不影响，它的实现原理也是 IIFE 实现let 使用 IIFE 可以很方便的创建一个块级作用域，在这个块级作用域之外的地方访问其中的变量都会报错。做到了 let 声明中隔离作用域和防止变量声明提升的概念。\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://mister-hope.github.io/zh/posts/%E6%89%8B%E5%86%99%E7%AE%97%E6%B3%95%E7%B3%BB%E5%88%97/ES5%E5%AE%9E%E7%8E%B0let%E4%B8%8Econst%203f9f5daaef2448dca1a3e7e8e8474461.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"饮东的博客\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"ES5实现let与const\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"ES5实现let与const 在es5中，没有块级作用域的概念，只有 函数作用域 的概念。 webpack进行模块化打包的时候，也需要把不同的函数隔离开，使得各个模块的代码互不影响，它的实现原理也是 IIFE 实现let 使用 IIFE 可以很方便的创建一个块级作用域，在这个块级作用域之外的地方访问其中的变量都会报错。做到了 let 声明中隔离作用域和防止变量声明提升的概念。\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"ES5实现let与const\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[]}\"]]},\"headers\":[{\"level\":2,\"title\":\"实现let\",\"slug\":\"实现let\",\"link\":\"#实现let\",\"children\":[]},{\"level\":2,\"title\":\"实现const\",\"slug\":\"实现const\",\"link\":\"#实现const\",\"children\":[]}],\"readingTime\":{\"minutes\":1.99,\"words\":596},\"filePathRelative\":\"zh/posts/手写算法系列/ES5实现let与const 3f9f5daaef2448dca1a3e7e8e8474461.md\",\"excerpt\":\"<h1> ES5实现let与const</h1>\\n<p>在es5中，没有块级作用域的概念，只有 <code>函数作用域</code> 的概念。</p>\\n<p>webpack进行模块化打包的时候，也需要把不同的函数隔离开，使得各个模块的代码互不影响，它的实现原理也是 <code>IIFE</code></p>\\n<h2> 实现let</h2>\\n<p>使用 <code>IIFE</code> 可以很方便的创建一个块级作用域，在这个块级作用域之外的地方访问其中的变量都会报错。做到了 <code>let</code> 声明中<strong>隔离作用域</strong>和<strong>防止变量声明提升</strong>的概念。</p>\",\"autoDesc\":true}")

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
