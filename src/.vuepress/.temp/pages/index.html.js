export const data = JSON.parse("{\"key\":\"v-8daa1a0e\",\"path\":\"/\",\"title\":\"Blog Home\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"layout\":\"BlogHome\",\"icon\":\"home\",\"title\":\"Blog Home\",\"heroImage\":\"/head.svg\",\"heroText\":\"reonce's Blog\",\"tagline\":\"你好，欢迎访问饮东的前端博客\",\"heroFullScreen\":true,\"projects\":[{\"icon\":\"project\",\"name\":\"project name\",\"desc\":\"project detailed description\",\"link\":\"https://your.project.link\"},{\"icon\":\"link\",\"name\":\"link name\",\"desc\":\"link detailed description\",\"link\":\"https://link.address\"},{\"icon\":\"book\",\"name\":\"book name\",\"desc\":\"Detailed description of the book\",\"link\":\"https://link.to.your.book\"},{\"icon\":\"/head.svg\",\"name\":\"关于我\",\"desc\":\"笔者的自我介绍\",\"link\":\"https://link.to.your.friend\"}],\"footer\":\"customize your footer text\",\"description\":\"This is a blog home page demo. To use this layout, you should set both layout: BlogHome and home: true in the page front matter. For related configuration docs, please see blog homepage.\"},\"headers\":[],\"readingTime\":{\"minutes\":0.44,\"words\":132},\"filePathRelative\":\"README.md\",\"excerpt\":\"<p>This is a blog home page demo.</p>\\n<p>To use this layout, you should set both <code>layout: BlogHome</code> and <code>home: true</code> in the page front matter.</p>\\n<p>For related configuration docs, please see <a href=\\\"https://theme-hope.vuejs.vuepress/guide/blog/home/\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">blog homepage</a>.</p>\",\"autoDesc\":true}")

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
