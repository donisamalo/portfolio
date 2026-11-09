# donisamalo.com - Portfolio

Personal portfolio of **Doni Samalo**, Frontend Engineer. Built from scratch with Nuxt 4.

## Stack

- **Nuxt 4** (Vue 3, Vite) - SSR, deployable anywhere Nitro runs
- **@nuxtjs/i18n** - bilingual EN (default, `/`) & ID (`/id`), cookie-based detection
- **@nuxt/fonts** - self-hosted Geist, Geist Mono, Instrument Serif
- **@vueuse/nuxt** - scroll & intersection utilities
- Hand-rolled CSS design system (no UI framework) - tokens in `app/assets/css/main.css`

## Development

```bash
pnpm install
pnpm dev        # http://localhost:3000
pnpm build      # production build (.output/)
pnpm preview    # preview the production build
```

Node 22+ recommended (Nuxt 4.6 warns on Node 20, though it still works).

## Editing content

| What | Where |
| --- | --- |
| Copy (both languages) | `i18n/locales/en.json`, `i18n/locales/id.json` |
| Experience, projects, skills, contacts | `app/data/resume.ts` |
| Design tokens (colors, fonts, easings) | `app/assets/css/main.css` |
| Sections | `app/components/*Section.vue` |

Adding a project: add an entry in `app/data/resume.ts` (`projects`) plus a
description under `work.items.<id>` in both locale files. Cover art
(monochrome gradients + the project's serif initial) is generated in CSS -
no screenshots needed.

## Animations

- Scroll reveals via the `v-reveal` directive (`app/plugins/reveal.ts`) -
  hidden state is applied from JS, so content stays visible without JavaScript.
- Hero load-in uses `[data-rise]` CSS keyframes with per-element delays.
- Everything animates `transform`/`opacity` only, with strong custom easing
  curves, and respects `prefers-reduced-motion`.

## Deploying to Vercel (donisamalo.com)

1. Push this repo to GitHub.
2. In Vercel: **Add New → Project → Import** the repo. Framework preset is
   detected as Nuxt automatically - no config needed.
3. After the first deploy: **Project → Settings → Domains → Add** →
   `donisamalo.com` (already registered on the team) and `www.donisamalo.com`
   as a redirect.
4. The i18n `baseUrl` in `nuxt.config.ts` already points to
   `https://donisamalo.com` for correct hreflang/og URLs.

## Known quirk documented in CSS

Chromium paints `mailto:` links as `:visited` and refuses `var()` in visited
styles (history-sniffing protection). The `.btn:visited` rules in
`main.css` use literal colors for this reason - don't "clean them up".
