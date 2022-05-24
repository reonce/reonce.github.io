const head = require("./config/head.js");
const themeConfig = require("./config/themeConfig.js");

module.exports = {
  theme: "@vuepress/blog",
  title: "reonce的前端博客",
  description: "欢迎来访，这是一个前端博客",
  logo: "../public/logo.png",
  head: [["标签", { rel: "icon", href: "/favicon.ico" }]],
  evergreen: true, // 不需要兼容杂牌浏览器
  markdown: {
    lineNumbers: true, // 代码行号
  },

  head,
  themeConfig,
};
