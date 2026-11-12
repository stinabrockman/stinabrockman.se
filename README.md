# stinabrockman.se

Stina Brockman's website, built with [Astro](https://astro.build) and published with GitHub Pages.
Every change pushed to `main` is built and published automatically within a couple of minutes
(see the **Actions** tab for progress).

## Editing the site

All text and images live in `src/content/`. Each page is a folder with an `index.md` file and
the images used on that page.

```
src/content/
  pages/               menu pages: CV, News, Texts, Interviews, Contact
    news/
      index.md         the text of the page
      i-saw-it.jpg     images used on the page
  work/                the works shown on the front page
    face/
      index.md
      a-01.jpg
```

The folder name is the address of the page: `pages/contact/` is `stinabrockman.se/contact`,
`work/face/` is `stinabrockman.se/work/face`.

### Change text

1. Open the page's `index.md` on github.com and click the pencil icon (Edit).
2. Make the change and click **Commit changes**.

The part between the `---` lines at the top is settings (title, order). The most useful
formatting:

| You write                  | It becomes                                  |
| -------------------------- | ------------------------------------------- |
| `## Heading`               | a heading                                   |
| `**bold**`, `*italic*`     | **bold**, *italic*                          |
| `[link text](https://...)` | a link                                      |
| `![](./photo.jpg)`         | the image `photo.jpg` from the same folder  |
| `- item`                   | a bullet list                               |
| an empty line              | a new paragraph                             |

A single line break is kept as a line break.

### Add an image

1. Open the folder on github.com, click **Add file → Upload files** and upload the image
   (JPEG, preferably about 2500 pixels on the long side; avoid spaces and å/ä/ö in the file name).
2. Edit `index.md` and add `![](./the-file-name.jpg)` where it should appear. On work pages, the
   line after an image is its caption.

### Add a new work

1. Upload the images to a new folder, e.g. `src/content/work/new-series/` (in the upload view,
   type the folder name followed by `/` in the file name field).
2. Add an `index.md` in that folder:

   ```markdown
   ---
   title: "New Series"
   order: 10
   size: "90 × 110 cm"
   cover: ./first-image.jpg
   ---

   Edition and size information.

   ![](./first-image.jpg)

   Title of the first image
   ```

The text at the top is shown before the images. `order` sets the position on the front page (lower comes first). `size` is the print size; it is shown under the image on the front page, where larger prints also hang larger. It can be left out. Add `draft: true` to hide a
work without deleting it.

### Add a news item

Edit `src/content/pages/news/index.md` and add the new item at the top.

## Development

Requires Node.js 22 or later (on NixOS: `nix shell nixpkgs#nodejs_24`).

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # output in dist/
```

The custom domain is configured in the repository's Settings → Pages.
