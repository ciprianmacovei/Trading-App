# Trading App

A trading dashboard built with Next.js (App Router), TypeScript and Tailwind CSS.

This is the project scaffold: the home page renders a placeholder dashboard
layout (header, sidebar, main area). The Watchlist, Chart and Portfolio views
are not implemented yet — the sidebar links point at routes that will be added
in later work.

## Requirements

- Node.js 20 or newer
- npm

## Install

```bash
npm install
```

## Run

```bash
npm run dev
```

The app is served at [http://localhost:3000](http://localhost:3000).

## Test

```bash
npm test
```

Unit tests run with [Vitest](https://vitest.dev/) in a jsdom environment, using
React Testing Library. Use `npm run test:watch` while developing.

## Lint

```bash
npm run lint
```

## Build

```bash
npm run build
npm start   # serve the production build
```

## Scripts

| Script | What it does |
| --- | --- |
| `npm run dev` | Start the dev server on port 3000 |
| `npm run build` | Build for production |
| `npm start` | Serve the production build |
| `npm test` | Run the unit tests once |
| `npm run test:watch` | Run the unit tests in watch mode |
| `npm run lint` | Lint with ESLint |

## Project layout

```
app/                 App Router routes, root layout and global styles
  page.tsx           Dashboard home page
  layout.tsx         Root layout
  globals.css        Tailwind entry point
  __tests__/         Page tests
components/          Shared UI components
  Header.tsx         Top bar with the app name
  Sidebar.tsx        Navigation: Watchlist / Chart / Portfolio
  __tests__/         Component tests
.github/workflows/   CI: lint, test and build on every push and pull request
```

## CI

GitHub Actions runs `npm run lint`, `npm test` and `npm run build` on every push
and pull request. See `.github/workflows/ci.yml`.
