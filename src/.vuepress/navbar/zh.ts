import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  { text: "主页", icon: "discover", link: "/" },
  {
    text: "分类",
    icon: "note",
    prefix: "/posts/",
    link: "/posts/",
    children: [
      {
        text: "感悟",
        icon: "edit",
        prefix: "感悟",
        children: [],
      },
      {
        text: "苹果",
        icon: "edit",
        prefix: "apple/",
        children: [
          { text: "苹果1", icon: "edit", link: "1" },
          { text: "苹果2", icon: "edit", link: "2" },
          "3",
          "4",
        ],
      },
      {
        text: "香蕉",
        icon: "edit",
        prefix: "banana/",
        children: [
          {
            text: "香蕉 1",
            icon: "edit",
            link: "1",
          },
          {
            text: "香蕉 2",
            icon: "edit",
            link: "2",
          },
          "3",
          "4",
        ],
      },
    ],
  },
  {
    text: "归档",
    icon: "note",
    prefix: "/posts/",
    link: "/posts/",
  },
  {
    text: "关于",
    icon: "edit",
    link: "/about/关于",
  },
]);
