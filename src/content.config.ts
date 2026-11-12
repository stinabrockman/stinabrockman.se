import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

// Each page is a folder in src/content/pages/ with an index.md and its images.
// The folder name is the page's URL, e.g. pages/contact/ -> /contact
const pages = defineCollection({
  loader: glob({ pattern: "*/index.md", base: "./src/content/pages" }),
  schema: z.object({
    title: z.string(),
    // Position in the menu (lower comes first).
    order: z.number(),
  }),
});

// Each work is a folder in src/content/work/ with an index.md and its images.
// The folder name is the URL, e.g. work/face/ -> /work/face
const work = defineCollection({
  loader: glob({ pattern: "*/index.md", base: "./src/content/work" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      // Position on the front page (lower comes first).
      order: z.number(),
      // Image shown on the front page, e.g. ./a-05.jpg
      cover: image(),
      // Set to true to hide the work without deleting it.
      draft: z.boolean().default(false),
    }),
});

export const collections = { pages, work };
