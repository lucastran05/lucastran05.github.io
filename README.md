# Personal Academic Portfolio

Static portfolio website built with Vite + React + Tailwind CSS.

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deploy to GitHub Pages (user site)

This project is configured for the user page URL:

- https://lucastran05.github.io

Deployment command:

```bash
npm run deploy
```

What this does:

1. Runs `predeploy` to build the app into `dist/`.
2. Publishes `dist/` to the `gh-pages` branch.

Required repository setup:

1. Use a repository named `lucastran05.github.io`.
2. Push your source code to the default branch (`main`).
3. In GitHub repository settings, under **Pages**, set source to:
	- Branch: `gh-pages`
	- Folder: `/ (root)`
