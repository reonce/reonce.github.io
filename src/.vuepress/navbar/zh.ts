import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  { text: "主页", icon: "discover", link: "/" },
  {
    text: "归档",
    icon: "note",
    prefix: "/posts/",
    link: "/posts/",
    // children: [],
  },
  {
    text: "关于",
    icon: "edit",
    link: "/about/关于",
  },
]);
