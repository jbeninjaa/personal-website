# Jayven Lupera

A static, single-page professional website built with Next.js, TypeScript, and Tailwind
CSS. The design uses an editorial, ink-on-paper visual direction and keeps public profile
copy in one typed source of truth.

## Current Scope

The implemented page contains Hero and About sections. Its content introduces Jayven,
his current role, and his professional focus without including an Optum work description.

Theme behavior, Experience, Skills, Contact, Footer, and discovery assets are planned
but not yet implemented. The local issue tracker in `.scratch/personal-website/issues/`
records that roadmap.

## Quick Start

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Verification

```bash
npm run test:content
npm run build
npm run test:build
npm run lint
```

`npm run build` writes a portable static site to `out/`.

## Documentation

- [System architecture](docs/system.md)
- [Product requirements](PRD.md)
