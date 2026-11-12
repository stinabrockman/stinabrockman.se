// @ts-check
import { unified } from "@astrojs/markdown-remark";
import { defineConfig } from "astro/config";
import remarkBreaks from "remark-breaks";

// https://astro.build/config
export default defineConfig({
  site: "https://www.stinabrockman.se",
  markdown: {
    processor: unified({
      // A single line break in Markdown is a line break on the page.
      remarkPlugins: [remarkBreaks],
    }),
  },
  image: {
    layout: "constrained",
    responsiveStyles: true,
  },
});
