import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "饮东的博客",
      description: "你好，欢迎访问饮东的博客",
    },
  },

  theme,

  shouldPrefetch: false,
});
