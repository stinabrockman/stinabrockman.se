## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

## This project

- Content is Markdown in `src/content/{pages,work}/<slug>/index.md`, with its images in the same folder; the schema is in `src/content.config.ts`. URLs match the old Squarespace site (`/work/<slug>`, `/cv-stina-brockman`, ...), so don't rename folders casually.
- The site owner edits content in the GitHub web UI: keep the Markdown simple and hand-editable (no MDX, no components in content).
- Markdown uses the `unified()` processor with `remark-breaks`, so a single newline is a line break.
- Deployed by `.github/workflows/deploy.yml` (withastro/action) on push to `main`.
