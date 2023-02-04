export const data = JSON.parse("{\"key\":\"v-37d6bce4\",\"path\":\"/zh/posts/CSS/%E5%8A%A8%E7%94%BBRequestAnimations.html\",\"title\":\"动画RequestAnimationFrame与canvas\",\"lang\":\"zh-CN\",\"frontmatter\":{\"description\":\"动画RequestAnimationFrame与canvas 早期的动画是用setInterval()做的，存在不精确的缺陷。 现在一般显示器的屏幕刷新率是60Hz，基本上意味着每秒需要重绘60次。很多浏览器会限制重绘频率，不超过显示屏的刷新率，因为超过刷新率用户也感知不到 因此实现平滑动画最佳的重回间隔是1000毫秒/60，大约17毫秒。 无论是setInterval还是setTimeout，由于时间循环机制的存在，它们都是不精确的，再加上早起浏览器的计时器精度很差，基本上是雪上加霜的，现在好很多，现在Chrome大约是4毫秒。\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://mister-hope.github.io/zh/posts/CSS/%E5%8A%A8%E7%94%BBRequestAnimations.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"饮东的博客\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"动画RequestAnimationFrame与canvas\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"动画RequestAnimationFrame与canvas 早期的动画是用setInterval()做的，存在不精确的缺陷。 现在一般显示器的屏幕刷新率是60Hz，基本上意味着每秒需要重绘60次。很多浏览器会限制重绘频率，不超过显示屏的刷新率，因为超过刷新率用户也感知不到 因此实现平滑动画最佳的重回间隔是1000毫秒/60，大约17毫秒。 无论是setInterval还是setTimeout，由于时间循环机制的存在，它们都是不精确的，再加上早起浏览器的计时器精度很差，基本上是雪上加霜的，现在好很多，现在Chrome大约是4毫秒。\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"动画RequestAnimationFrame与canvas\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[]}\"]]},\"headers\":[{\"level\":3,\"title\":\"RequestAnimationFrame()\",\"slug\":\"requestanimationframe\",\"link\":\"#requestanimationframe\",\"children\":[]}],\"readingTime\":{\"minutes\":1.65,\"words\":496},\"filePathRelative\":\"zh/posts/CSS/动画RequestAnimations.md\",\"excerpt\":\"<h1> 动画RequestAnimationFrame与canvas</h1>\\n<p>早期的动画是用<code>setInterval()</code>做的，存在不精确的缺陷。</p>\\n<p>现在一般显示器的屏幕刷新率是60Hz，基本上意味着每秒需要重绘60次。很多浏览器会限制重绘频率，不超过显示屏的刷新率，因为超过<strong>刷新率用户也感知不到</strong></p>\\n<p>因此实现平滑动画最佳的重回间隔是1000毫秒/60，大约17毫秒。</p>\\n<p>无论是<code>setInterval</code>还是<code>setTimeout</code>，由于时间循环机制的存在，它们都是不精确的，再加上早起浏览器的计时器精度很差，基本上是雪上加霜的，现在好很多，现在Chrome大约是4毫秒。</p>\",\"autoDesc\":true}")

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
