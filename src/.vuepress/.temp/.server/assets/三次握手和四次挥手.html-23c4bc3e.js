const data = JSON.parse('{"key":"v-1e7178c0","path":"/posts/%E6%B5%8F%E8%A7%88%E5%99%A8%E7%9B%B8%E5%85%B3%E7%9F%A5%E8%AF%86/%E4%B8%89%E6%AC%A1%E6%8F%A1%E6%89%8B%E5%92%8C%E5%9B%9B%E6%AC%A1%E6%8C%A5%E6%89%8B.html","title":"三次握手和四次挥手","lang":"zh-CN","frontmatter":{"description":"三次握手和四次挥手 客户端和服务器建立通信的过程中要进行三次握手，结束通信要进行四次挥手。 其实”握手“这一词本身是具有歧义的，”握手“不应该是双方手掌接触互相传输信息吗? 已经搞懂本文的同学会发现，其实三次握手就是三次单向交流的过程，即我告诉你，你告诉我，我再告诉你。 好吧，暂且不管哪个傻吊取得这个名字。我们回到正题，首先了解一下为什么需要三次握手吧，让我们带着好奇心搞懂本文。 假设客户端和服务器直接进行连接，会出现什么问题? 由于网络传输是有延时的(要通过网络光纤和各种中间代理服务器)，在传输的过程中，比如客户端发起了 SYN=1 创建连接的请求(第一次握手)。","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/posts/%E6%B5%8F%E8%A7%88%E5%99%A8%E7%9B%B8%E5%85%B3%E7%9F%A5%E8%AF%86/%E4%B8%89%E6%AC%A1%E6%8F%A1%E6%89%8B%E5%92%8C%E5%9B%9B%E6%AC%A1%E6%8C%A5%E6%89%8B.html"}],["meta",{"property":"og:site_name","content":"饮东的博客"}],["meta",{"property":"og:title","content":"三次握手和四次挥手"}],["meta",{"property":"og:description","content":"三次握手和四次挥手 客户端和服务器建立通信的过程中要进行三次握手，结束通信要进行四次挥手。 其实”握手“这一词本身是具有歧义的，”握手“不应该是双方手掌接触互相传输信息吗? 已经搞懂本文的同学会发现，其实三次握手就是三次单向交流的过程，即我告诉你，你告诉我，我再告诉你。 好吧，暂且不管哪个傻吊取得这个名字。我们回到正题，首先了解一下为什么需要三次握手吧，让我们带着好奇心搞懂本文。 假设客户端和服务器直接进行连接，会出现什么问题? 由于网络传输是有延时的(要通过网络光纤和各种中间代理服务器)，在传输的过程中，比如客户端发起了 SYN=1 创建连接的请求(第一次握手)。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-02-04T13:15:39.000Z"}],["meta",{"property":"article:modified_time","content":"2023-02-04T13:15:39.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"三次握手和四次挥手\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-02-04T13:15:39.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":3,"title":"假设客户端和服务器直接进行连接，会出现什么问题?","slug":"假设客户端和服务器直接进行连接-会出现什么问题","link":"#假设客户端和服务器直接进行连接-会出现什么问题","children":[]},{"level":3,"title":"三次握手发生了什么?","slug":"三次握手发生了什么","link":"#三次握手发生了什么","children":[]},{"level":3,"title":"三次握手我懂了，为啥要四次挥手?","slug":"三次握手我懂了-为啥要四次挥手","link":"#三次握手我懂了-为啥要四次挥手","children":[]}],"git":{"createdTime":1675516539000,"updatedTime":1675516539000,"contributors":[{"name":"yinjindong","email":"yinjindong@newrank.cn","commits":1}]},"readingTime":{"minutes":7.33,"words":2200},"filePathRelative":"posts/浏览器相关知识/三次握手和四次挥手.md","localizedDate":"2023年2月4日","excerpt":"<h1> 三次握手和四次挥手</h1>\\n<blockquote>\\n<p>客户端和服务器建立通信的过程中要进行三次握手，结束通信要进行四次挥手。</p>\\n</blockquote>\\n<p>其实”握手“这一词本身是具有歧义的，”握手“不应该是双方手掌接触互相传输信息吗?<br>\\n已经搞懂本文的同学会发现，其实三次握手就是三次单向交流的过程，即我告诉你，你告诉我，我再告诉你。</p>\\n<p>好吧，暂且不管哪个傻吊取得这个名字。我们回到正题，首先了解一下为什么需要三次握手吧，让我们带着好奇心搞懂本文。</p>\\n<h3> 假设客户端和服务器直接进行连接，会出现什么问题?</h3>\\n<p>由于网络传输是有延时的(要通过网络光纤和各种中间代理服务器)，在传输的过程中，比如客户端发起了 SYN=1 创建连接的请求(第一次握手)。</p>","autoDesc":true}');
export {
  data
};
