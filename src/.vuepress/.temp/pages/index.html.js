export const data = JSON.parse("{\"key\":\"v-8daa1a0e\",\"path\":\"/\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"layout\":\"BlogHome\",\"icon\":\"home\",\"title\":null,\"heroImage\":\"/head.svg\",\"heroText\":\"reonce's Blog\",\"tagline\":\"你好，欢迎访问饮东的前端博客\",\"heroFullScreen\":true,\"projects\":[{\"icon\":\"project\",\"name\":\"感悟\",\"desc\":\"一些读书心得和学习感悟\",\"link\":\"/posts/感悟\"},{\"icon\":\"link\",\"name\":\"浏览器\",\"desc\":\"浏览器原理相关知识\",\"link\":\"/posts/浏览器相关知识\"},{\"icon\":\"book\",\"name\":\"手写算法系列\",\"desc\":\"算法解题笔记、手写实现题、场景题等\",\"link\":\"/posts/手写算法系列\"},{\"icon\":\"/head.svg\",\"name\":\"关于我\",\"desc\":\"笔者的自我介绍\",\"link\":\"https://link.to.your.friend\"}],\"footer\":null,\"description\":\"\"},\"headers\":[],\"readingTime\":{\"minutes\":0.42,\"words\":127},\"filePathRelative\":\"README.md\",\"excerpt\":\"\",\"autoDesc\":true}")

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
