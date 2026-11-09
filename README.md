# Davit Shirkhanyan · Portfolio

Personal portfolio site, live at **https://www.davitshirkhanyan.com**.

Built with React 18 and Vite as a single scrolling page with linkable sections (`#about`, `#projects`, `#skills`, `#contact`). It works on phones and is keyboard accessible.

## Run locally

```bash
npm install
npm run dev       # start the dev server
npm run build     # production build in dist/
npm run preview   # serve the production build
```

## Deploy

```bash
npm run deploy    # builds and publishes dist/ to the gh-pages branch
```

`public/CNAME` keeps the custom domain on GitHub Pages.

## Editing content

- **Projects and skills:** `src/data/projects.js`. Set `live` or `github` to `null` to hide that button.
- **Intro text:** `src/components/Hero.jsx`
- **Résumé:** replace `src/assets/files/davitshirkhanyan-resume.pdf`
- **Link preview image:** `public/og-image.jpg` (1200×630)
