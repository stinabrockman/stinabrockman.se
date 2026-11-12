// @ts-check
import { unified } from "@astrojs/markdown-remark";
import { defineConfig } from "astro/config";
import remarkBreaks from "remark-breaks";

// https://astro.build/config
export default defineConfig({
  // Set by the deploy workflow from the repository's Pages settings: the custom
  // domain once it is configured, otherwise stinabrockman.github.io/stinabrockman.se.
  site: process.env.SITE_ORIGIN || "https://www.stinabrockman.se",
  base: process.env.SITE_BASE_PATH || "/",
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
