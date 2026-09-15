<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Project

Single Next.js 16 app (App Router, React 19, TypeScript strict, Tailwind v4). All commands run from `portfolio/` (repo root only holds `README.md`). Do not restructure routes without checking current app conventions.

## Commands

- `npm run dev` — dev server on http://localhost:3000
- `npm run lint` — ESLint (flat config `eslint.config.mjs`, no config flag needed)
- `npm run build` — production build; also runs typecheck. There is no separate typecheck or test script, so `npm run build` is the verification step.

## Conventions

- Imports use the `@/*` path alias, which maps to the app root (`./*` in `tsconfig.json`).
- Tailwind v4: no `tailwind.config`; theme is CSS-first via `@theme inline` in `app/globals.css`. `dark:` variants rely on `prefers-color-scheme`.
- No CI, pre-commit hooks, or test suite exist; rely on `lint` + `build`.

## Note
Keep the `nextjs-agent-rules` block above intact — `next dev` re-adds it if removed.
