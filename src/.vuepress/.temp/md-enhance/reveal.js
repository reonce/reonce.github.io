import { reveal, revealMarkdown, revealHighlight, revealMath, revealSearch, revealNotes, revealZoom } from "/Users/jaydonyin/Desktop/reonce.github.io/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.171_vuepress@2.0.0-beta.60/node_modules/vuepress-plugin-md-enhance/lib/client/reveal/index.js";

export const useReveal = () => [reveal(), revealMarkdown(), revealHighlight(), revealMath(), revealSearch(), revealNotes(), revealZoom()];
