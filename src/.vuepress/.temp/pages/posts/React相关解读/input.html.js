export const data = JSON.parse("{\"key\":\"v-2a6b0260\",\"path\":\"/posts/React%E7%9B%B8%E5%85%B3%E8%A7%A3%E8%AF%BB/input.html\",\"title\":\"如何防止Input的拼音输入触发onChange\",\"lang\":\"zh-CN\",\"frontmatter\":{\"description\":\"如何防止Input的拼音输入触发onChange 需要使用到的两个厲性 compositionstart 和compositionEnd。下面来看看它们的MDN定义。 compositionstart：输入法编辑器开始新的输入法合成时触发的事件，例如，当用户使用拼音输入法开始输 入汉字时，这个事件就会被触发。 compositionstart：同理可得，这是输入法合成完成后触发的事件，例如，当用户使用拼音输入法输入完拼 音选中汉字时，这个事件就会被触发。 我们可以在输入法合成时设置一个锁 1ock=true;在输入法合成结束时解除这个锁 1ock=fa lse，在锁生效期 间onChange事件都return掉不触发，在输入法合成结束时再setlnputValue即可。需要注意的是，这么做的话我 们的＜Input /＞组件必须设置为非受控，否则在拼音时，会因为此时锁生效不触发setlnputValue事件导致输入框 一直为空，无任何输入。\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://mister-hope.github.io/posts/React%E7%9B%B8%E5%85%B3%E8%A7%A3%E8%AF%BB/input.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"饮东的博客\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"如何防止Input的拼音输入触发onChange\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"如何防止Input的拼音输入触发onChange 需要使用到的两个厲性 compositionstart 和compositionEnd。下面来看看它们的MDN定义。 compositionstart：输入法编辑器开始新的输入法合成时触发的事件，例如，当用户使用拼音输入法开始输 入汉字时，这个事件就会被触发。 compositionstart：同理可得，这是输入法合成完成后触发的事件，例如，当用户使用拼音输入法输入完拼 音选中汉字时，这个事件就会被触发。 我们可以在输入法合成时设置一个锁 1ock=true;在输入法合成结束时解除这个锁 1ock=fa lse，在锁生效期 间onChange事件都return掉不触发，在输入法合成结束时再setlnputValue即可。需要注意的是，这么做的话我 们的＜Input /＞组件必须设置为非受控，否则在拼音时，会因为此时锁生效不触发setlnputValue事件导致输入框 一直为空，无任何输入。\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"如何防止Input的拼音输入触发onChange\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[]}\"]]},\"headers\":[],\"readingTime\":{\"minutes\":0.87,\"words\":261},\"filePathRelative\":\"posts/React相关解读/input.md\",\"excerpt\":\"<h1> 如何防止Input的拼音输入触发onChange</h1>\\n<p>需要使用到<input>的两个厲性 compositionstart 和compositionEnd。下面来看看它们的MDN定义。\\ncompositionstart：输入法编辑器开始新的输入法合成时触发的事件，例如，当用户使用拼音输入法开始输\\n入汉字时，这个事件就会被触发。\\ncompositionstart：同理可得，这是输入法合成完成后触发的事件，例如，当用户使用拼音输入法输入完拼\\n音选中汉字时，这个事件就会被触发。\\n我们可以在输入法合成时设置一个锁 1ock=true;在输入法合成结束时解除这个锁 1ock=fa lse，在锁生效期\\n间onChange事件都return掉不触发，在输入法合成结束时再setlnputValue即可。需要注意的是，这么做的话我\\n们的＜Input /＞组件必须设置为非受控，否则在拼音时，会因为此时锁生效不触发setlnputValue事件导致输入框\\n一直为空，无任何输入。</p>\",\"autoDesc\":true}")

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
