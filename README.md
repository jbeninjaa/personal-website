# Jayven Lupera

A static, single-page professional website built with Next.js, TypeScript, and Tailwind
CSS. The design uses an editorial, ink-on-paper visual direction and keeps public profile
copy in one typed source of truth.

## Current Scope

The implemented page flows through Hero, About, Experience, Skills, Contact, and Footer
sections. It introduces Jayven, his current role, public technologies, and direct email,
LinkedIn, and GitHub links from one typed content source.

An experience entry without a description renders without empty placeholder content.
The page includes a persistent theme toggle and keyboard-visible focus styles for
interactive controls and links. The local issue tracker in `.scratch/personal-website/issues/`
records the remaining roadmap.

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
npm run test:theme
npm run lint
```

`npm run build` writes a portable static site to `out/`.
`npm run test:theme` runs Playwright checks and starts a local development server automatically.

## Documentation

- [System architecture](docs/system.md)
- [Product requirements](PRD.md)
