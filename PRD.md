# Personal Website — PRD

Status: ready to build
Owner: Jayven Lupera

## Problem Statement

I am a software engineer working as a TDP Associate at Optum. I have no public presence
that represents me professionally.

Two things are missing. First, when peers, mentors, or people in the community come
across my name, there is nothing that establishes I am a serious engineer — no single
place that shows who I am, what I work on, and what I know. Second, when I apply for
things or share my details, I have no professional URL to give. A LinkedIn profile is
generic and not mine; a GitHub profile is a pile of repos without context.

The complication is that almost all of my real engineering work is Optum-internal. I
cannot show it. Healthcare confidentiality means I cannot name internal systems,
clients, members, or metrics. So the site has to establish credibility while showing
very little of the work that actually fills my days.

I also do not want a site that needs feeding. I will not blog consistently, and I know
a site with a stale "latest post" from eight months ago looks worse than no site at all.
Whatever gets built has to stay credible while sitting untouched for a year.

Finally, I do not want it to look like every other developer portfolio — the dark navy
page with gradient headline text, glass cards, and sections that fade in as you scroll.
That look now reads as generated, and a site that reads as generated undermines the
exact credibility I am trying to build.

## Solution

A single-page, statically generated personal site at a custom domain. It is short,
typographically confident, and deliberately incomplete in the places where I have
nothing honest to show.

The visual direction is Swiss/editorial: warm off-white paper, near-black ink, a strict
grid, generous whitespace, hairline rules, and a serif display face. Monospace appears
only as editorial metadata — dates, section numbers, tech tags, link labels, footer.
That combination reads as serious and legible to a recruiter or a TDP program manager,
while the monospace details signal "engineer" to anyone who reads closely. It is a
low-variance direction: whitespace and good type get it most of the way there, and it
fails gracefully rather than embarrassingly.

The v1 page is: Hero, About, Experience, Skills, Contact, Footer. There is no projects
section, because I do not yet have a project cleaned up to the standard the site is
meant to demonstrate. There is no blog, because I will not maintain one. Contact is
plain links — email, LinkedIn, GitHub — with no form, so there is nothing that can
silently stop delivering messages.

The site is a Next.js app exported to static files and served from Cloudflare Pages on
a Cloudflare Registrar domain. It has no server, no database, and no runtime
dependencies. Once deployed it stays up and costs almost nothing.

## User Stories

### Visitor — first impression

1. As a visitor who has just landed on the site, I want to know within one screen who
   this person is and what they do, so that I do not have to scroll to find out whether
   the page is relevant to me.
2. As a visitor, I want the page to load essentially instantly, so that I form an
   impression of competence rather than waiting.
3. As a visitor, I want the page to look intentionally designed rather than
   template-generated, so that I read the author as someone who cares about their craft.
4. As a visitor, I want to read the page without encountering placeholder text, "coming
   soon" labels, or broken links, so that I trust the rest of what it tells me.
5. As a visitor, I want the whole site to be one short page, so that I can read all of
   it in under a minute without navigating.

### Recruiter or non-engineer

6. As a recruiter, I want to see the person's current role and employer clearly, so that
   I can place them in seniority terms immediately.
7. As a recruiter, I want the page to be plainly readable — normal text, normal
   contrast, no gimmicks — so that I can skim it the way I skim a resume.
8. As a recruiter, I want obvious contact links, so that I can reach out without hunting.
9. As a recruiter, I want the URL to look professional on a resume, so that clicking it
   feels like a reasonable use of my time.
10. As a TDP program manager who knows the person professionally, I want the site to
    describe their Optum work without disclosing anything internal, so that I have no
    concerns about confidentiality.

### Engineer peer or mentor

11. As an engineer peer, I want to see which technologies this person actually works in,
    so that I can judge whether we overlap.
12. As an engineer peer, I want the site itself to be well built — fast, accessible,
    keyboard-navigable, clean markup — so that the site is itself evidence of skill.
13. As an engineer peer, I want a dark mode, so that reading the page does not feel
    hostile at night, and so that its absence does not read as an oversight.
14. As an engineer peer, I want a direct link to the person's GitHub, so that I can look
    at their code if I want to.
15. As an engineer visiting on a phone, I want the layout to hold up at small widths, so
    that the site does not fall apart in the most common context.
16. As a mentor, I want to understand what this person is currently learning or moving
    toward, so that I know what kind of guidance would be useful.

### Owner — credibility and safety

17. As the owner, I want the site to establish credibility without featuring any
    projects yet, so that I can launch before my repos are cleaned up.
18. As the owner, I want no blog and no dated content anywhere, so that the site cannot
    become visibly stale.
19. As the owner, I want the Experience section to describe my Optum work at the level of
    role, general domain, and public technologies only, so that I never risk a
    confidentiality issue.
20. As the owner, I want to write the Optum wording myself rather than have it drafted
    for me, so that I am personally accountable for every claim on the page.
21. As the owner, I want the site to ship with role and dates only if my longer Optum
    wording is not ready, so that an unfinished sentence never blocks the launch and
    never leaks into production.
22. As the owner, I want all site copy to live in one place, so that I can update a job
    title or add a skill without touching layout code.
23. As the owner, I want to add a projects section later without redesigning anything,
    so that the deferral is genuinely temporary.

### Owner — maintenance and cost

24. As the owner, I want the site to be fully static, so that there is no server to
    monitor, patch, or pay for.
25. As the owner, I want hosting with no ambiguity about commercial use, so that I am not
    quietly violating a free tier by linking the site from a job application.
26. As the owner, I want the build output to be portable plain files, so that I can move
    hosts in an afternoon if I ever need to.
27. As the owner, I want to own a custom domain, so that my professional URL is permanent
    and independent of any host.
28. As the owner, I want the domain bought at wholesale pricing, so that the annual cost
    stays trivial.
29. As the owner, I want deploys to happen automatically when I push, so that updating
    the site is a single commit.
30. As the owner, I want the repository to be public with a real README, so that the site
    project is itself a small work sample.
31. As the owner, I want to be able to leave the site untouched for a year without it
    degrading, so that maintenance is genuinely near-zero.

### Accessibility

32. As a keyboard-only user, I want every interactive element reachable in a sensible
    order with a clearly visible focus indicator, so that I can navigate without a mouse.
33. As a screen reader user, I want a correct heading hierarchy and landmark regions, so
    that I can jump between sections.
34. As a low-vision user, I want text contrast to meet WCAG AA in both light and dark
    themes, so that I can read the page in either mode.
35. As a user who has requested reduced motion, I want no animation beyond instant state
    changes, so that the page does not cause discomfort.
36. As a user, I want the theme to match my system preference on first visit and remember
    my choice afterward, so that I never have to set it twice.
37. As a user, I want no flash of the wrong theme when the page loads, so that the site
    does not flicker white before going dark.

### Discovery

38. As someone who searches my name, I want the site to be the top result and to show a
    sensible title and description, so that it is findable.
39. As someone who shares the link in Slack or LinkedIn, I want a proper preview card
    with title, description, and image, so that the link looks deliberate rather than
    broken.
40. As a visitor, I want a real favicon in my browser tab, so that the site does not
    look unfinished.

## Implementation Decisions

### Project location and repository

- The Next.js application lives in its own repository **outside the Obsidian vault**
  (suggested: `~/dev/personal-website`). Nesting a Node project inside the vault would
  make Obsidian index `node_modules`.
- This spec and the tracking note live in the vault under `Projects/personal-website/`.
  The vault holds planning; the repo holds code.
- The repository is public and carries a README describing the stack, the static-export
  decision, and how to run and deploy it.

### Framework and rendering

- **Next.js with TypeScript and Tailwind CSS.** Next is chosen partly because it is the
  stack most readers will recognise, which matters when the site is itself a work sample.
- **Static export** (`output: 'export'`). The site needs no server-side rendering, no
  server actions, no ISR, and no API routes. Static export produces plain HTML, CSS, and
  JS.
- Consequence: Next's Image Optimization API is unavailable, so images are
  pre-optimised at build time and `images.unoptimized` is enabled. Acceptable because the
  site is content-light.
- Consequence and benefit: the output runs identically on Cloudflare Pages, Vercel,
  Netlify, or GitHub Pages. Host choice becomes reversible and low-stakes.

### Hosting and domain

- **Cloudflare Pages**, chosen over Vercel for unlimited bandwidth and the absence of
  non-commercial free-tier restrictions. Build command `next build`, output directory
  `out`.
- Deploys trigger on push to the default branch. Pull requests get preview deployments.
- **Cloudflare Registrar** for the domain, which sells at wholesale with no markup.
- Apex and `www` both resolve, one redirecting to the other, with HTTPS enforced.

### Page structure

- A **single route** (`/`) with anchor-scrollable sections. No multi-page routing in v1.
  Fewer files, less to maintain, no navigation state.
- Section order: Hero → About → Experience → Skills → Contact → Footer.
- **No projects section in v1.** The section is added only when at least one project has
  a real README, screenshots, and a working live demo. Shipping "coming soon" cards would
  signal someone who starts things and does not finish them — the opposite of the site's
  purpose.
- **No blog, no notes feed, no dated content of any kind.** Nothing on the page should be
  capable of looking stale.

### Content architecture

- All copy — name, tagline, bio, experience entries, skills, contact links — lives in a
  **single typed content module** that is the sole source of truth. Section components
  render from it and contain no hardcoded copy.
- This is the primary seam. It makes copy edits safe, makes the content independently
  checkable, and means adding a projects section later is a data change plus one
  component rather than a refactor.
- Experience entries carry role, organisation, dates, and an **optional** description.
  The optionality is deliberate: if the Optum wording is not ready at launch, the entry
  renders with role, organisation, and dates only, and nothing placeholder-like appears.

### Confidentiality constraint

- Optum work is described only at the level of role, general domain, and publicly known
  technologies. Internal system names, client names, member data, and internal metrics
  never appear.
- The owner writes the Optum description personally. Until then it is absent from the
  content module rather than filled with drafted text, so there is no filler that can
  accidentally ship.

### Visual design

- **Swiss/editorial**: warm off-white ground, near-black ink, strict grid, generous
  whitespace, hairline rules, strong typographic hierarchy.
- **Type roles, maximum three**: a serif display face for headings (Instrument Serif /
  Newsreader class), a monospace face for metadata only, and a restrained face for body
  copy. Monospace is never used for body text.
- Monospace carries dates, section numbers, tech tags, link labels, and the footer. This
  is a real editorial convention, not a compromise between two directions.
- Fonts are **self-hosted** via `next/font/local`, avoiding a render-blocking third-party
  request and a dependency on Google Fonts staying available.
- **Design tokens** — type scale, spacing scale, grid, both colour palettes — are defined
  as Tailwind theme tokens and locked before any section is built. Sections consume
  tokens rather than ad-hoc values.

### Theming

- **Light is the designed mode.** The editorial direction is fundamentally ink-on-paper.
- **Dark is a deliberate inversion**: warm near-black ground, soft off-white ink, its own
  reviewed palette. Explicitly not an auto-inverted light palette.
- Theme resolution: system preference on first visit; explicit user choice persisted
  afterward. A blocking inline script sets the theme class before first paint to prevent
  a flash of the wrong theme.
- The toggle is the second seam — the only stateful, interactive behaviour on the site.

### Motion

- Near-zero. No scroll-triggered reveals, no parallax, no typewriter effects, no animated
  backgrounds.
- Transitions are limited to hover and focus states and the theme change, and all are
  suppressed under `prefers-reduced-motion`.

### Banned patterns

Explicitly prohibited, because collectively they constitute the generic
generated-portfolio look the site exists to avoid:

- Dark navy default background
- Purple-to-blue gradient headline text
- Glassmorphic or heavily rounded cards with subtle borders
- Floating blurred background blobs
- Emoji in section headings
- A waving-hand "Hi, I'm ..." hero
- Inter used for everything
- Every section fading in on scroll
- Fake terminal chrome: `$ whoami` prompts, blinking cursors, typewriter text

### Accessibility and SEO

- Semantic landmarks, one `h1`, no skipped heading levels.
- Visible focus indicators that satisfy contrast requirements in both themes.
- WCAG AA text contrast verified in **both** palettes independently.
- Metadata, Open Graph and Twitter card tags, a generated OG image, a real favicon set,
  `robots.txt`, and `sitemap.xml`.

## Testing Decisions

There is no existing codebase and therefore no prior art. A content-light static site
does not justify a unit test suite; the meaningful failures here are visual, editorial,
and deployment failures, not logic failures. Verification is therefore weighted toward
automated checks at the two real seams plus a disciplined manual pass.

**What makes a good check here:** it asserts something a visitor would notice, at the
outermost boundary — the content module or the built output — never an implementation
detail like a class name or component internals.

### Seam 1 — the content module

The highest-value automated checks, because this is where the confidentiality and
placeholder risks live.

- Required fields are present and non-empty: name, tagline, at least one experience
  entry, at least one contact link.
- No content string contains placeholder markers (`TODO`, `TBD`, `Lorem`, `coming soon`,
  `placeholder`).
- Every contact URL is well-formed and uses an expected scheme.
- Optional descriptions are genuinely optional — a missing Optum description must not
  produce an empty element or stray punctuation.

### Seam 2 — the built static output

Run against `out/` after `next build`, so it tests what actually ships.

- The build succeeds and emits `index.html`, `robots.txt`, and `sitemap.xml`.
- The rendered HTML contains no placeholder markers.
- Exactly one `h1` exists and heading levels do not skip.
- Title, description, and Open Graph tags are present and non-empty.
- No internal link points at a missing anchor.

### Manual verification before launch

- Lighthouse on the deployed URL; accessibility and best-practices scores must be clean,
  with performance high given the site is static.
- Full keyboard traverse: every interactive element reachable, focus always visible.
- Both themes reviewed on their own terms — dark judged as a design, not as "light but
  inverted".
- Mobile check at a realistic small width on a real device.
- Every outbound link opened and confirmed to resolve.
- A read-through against the banned-patterns list above.
- A confidentiality read-through of every word describing Optum work.

### Explicitly not tested

- Component rendering internals, styling, and class names. These change constantly and
  testing them would make the design harder to iterate on, not safer.
- The theme toggle's persistence mechanism beyond a manual check; it is a few lines and
  its failure is immediately visible.
- No end-to-end browser automation. The cost is not justified for a single static page.

## Out of Scope

- **A projects section.** Deferred until at least one project has a real README,
  screenshots, and a working demo. This is the intended first follow-up.
- **A blog, notes feed, or any dated content.** Ruled out deliberately; a stale blog is
  worse than none.
- **Publishing Obsidian vault notes to the web.** Considered and rejected.
- **A contact form.** Plain links only. A form needs a third-party endpoint that can fail
  silently and attracts spam.
- **A downloadable resume PDF.** Possible later; not v1.
- **A CMS or any admin interface.** Content is code.
- **Analytics.** Not needed to serve either goal; can be added later if a real question
  arises.
- **Internationalisation.**
- **Any server-side behaviour**: API routes, server actions, authentication, databases.
- **Showing Optum work product** in any form — screenshots, code, architecture, metrics,
  or internal system names.
- **Multi-page routing.** Single page until content genuinely outgrows it.

## Further Notes

**The real failure mode is blandness, not ugliness.** Swiss/editorial done timidly just
looks like an empty page. What separates it from plain is committed typography — real
size contrast between the serif display and the mono metadata — and genuinely generous
whitespace. If the design feels safe during the build, the spacing is probably too small
and the display type too timid.

**Dark mode was chosen against the design's grain.** It was included because engineers
notice its absence, but an ink-on-paper design does not invert cleanly. It needs its own
palette review or it will be the weakest part of the site.

**Scope discipline.** Every deferral above protects the two stated goals: credibility,
and a stable low-maintenance URL. Any future addition should have to answer which of
those two it serves. "It would be cool" is not an answer.

**The placeholder trap is the single biggest launch risk.** The original instinct was to
ship with placeholder project cards and fill them in later — which is how sites end up
permanently half-finished and actively harmful to credibility. The structural defences
are: no projects section at all in v1, an optional-by-design Experience description, and
automated placeholder checks at both seams.

**Portability is deliberate insurance.** Static export means the hosting decision is
reversible. If Cloudflare Pages ever becomes inconvenient, the same `out/` directory
deploys anywhere.
