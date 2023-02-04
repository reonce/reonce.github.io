import { defineClientConfig } from "@vuepress/client";
import { hasGlobalComponent } from "/Users/jaydonyin/Desktop/reonce.github.io/node_modules/.pnpm/vuepress-plugin-components@2.0.0-beta.171_vuepress@2.0.0-beta.60/node_modules/vuepress-plugin-components/lib/client/shared.js";
import { h } from "vue";

import { useStyleTag } from "/Users/jaydonyin/Desktop/reonce.github.io/node_modules/.pnpm/vuepress-plugin-components@2.0.0-beta.171_vuepress@2.0.0-beta.60/node_modules/vuepress-plugin-components/lib/client/vueuse.js";
import Badge from "/Users/jaydonyin/Desktop/reonce.github.io/node_modules/.pnpm/vuepress-plugin-components@2.0.0-beta.171_vuepress@2.0.0-beta.60/node_modules/vuepress-plugin-components/lib/client/components/Badge.js";
import FontIcon from "/Users/jaydonyin/Desktop/reonce.github.io/node_modules/.pnpm/vuepress-plugin-components@2.0.0-beta.171_vuepress@2.0.0-beta.60/node_modules/vuepress-plugin-components/lib/client/components/FontIcon.js";
import BackToTop from "/Users/jaydonyin/Desktop/reonce.github.io/node_modules/.pnpm/vuepress-plugin-components@2.0.0-beta.171_vuepress@2.0.0-beta.60/node_modules/vuepress-plugin-components/lib/client/components/BackToTop.js";


import "/Users/jaydonyin/Desktop/reonce.github.io/node_modules/.pnpm/vuepress-plugin-components@2.0.0-beta.171_vuepress@2.0.0-beta.60/node_modules/vuepress-plugin-components/lib/client/styles/sr-only.scss";

export default defineClientConfig({
  enhance: ({ app }) => {
    if(!hasGlobalComponent("Badge")) app.component("Badge", Badge);
    if(!hasGlobalComponent("FontIcon")) app.component("FontIcon", FontIcon);
    
  },
  setup: () => {
      useStyleTag(`\
      @import url("//at.alicdn.com/t/c/font_2410206_5vb9zlyghj.css");
      `);
  },
  rootComponents: [
    () => h(BackToTop, { threshold: 300 }),
    
  ],
});
