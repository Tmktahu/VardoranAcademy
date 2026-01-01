# Academy Site - AI Coding Instructions

## Project Overview

This is a **SvelteKit-powered academy website** themed around V Rising, deployed on Vercel. The site functions as a digital library/bookshelf with a roleplay academy theme featuring:

- Interactive 3D-style bookshelf UI displaying book series
- Markdown-based book content with daily read limits
- Dark vampire-themed styling (reds, blacks, gold accents)
- Character/faculty quotes and academy atmosphere

## Architecture & Key Components

**SvelteKit App Structure:**

- `src/routes/+layout.svelte` - Global layout with dark theme CSS
- `src/routes/+page.svelte` - Homepage with faculty quotes and academy members
- `src/routes/library/+page.svelte` - Interactive bookshelf with pseudo-random book widths
- `src/routes/library/book/[slug]/` - Individual book reader with daily limits

**Data Flow:**

- Books are hardcoded in `src/routes/library/+page.server.ts` (no database)
- Content served from `/books/*.md` files via server-side loading
- Daily reading tracked via cookies, not auth (see `DISABLE_DAILY_LIMIT`)

**Styling Approach:**

- TailwindCSS with custom color system in `tailwind.config.ts`
- Custom color utilities via `src/lib/models/useColors.ts`
- Theme: `pitchBlack` + reds (`#FF0000`, `#8B0000`) + gold accents

## Development Workflows

**Essential Commands:**

- `npm run dev` - Development server with HMR
- `npm run build` - Production build (static export via adapter-vercel)
- `npm run check` - TypeScript + Svelte checking
- `npm run format` - Prettier formatting

**File Watching:** Vite handles HMR, but book measurements in library require window resize events due to dynamic book width calculations.

## Project-Specific Patterns

**Custom Book Width Generation:**

```typescript
// Pseudo-random but stable widths based on book slug
function getBookWidth(seed: string | number, min = 40, max = 64): number;
```

Located in [src/routes/library/+page.svelte](src/routes/library/+page.svelte#L7)

**Server-Side Loading Pattern:**

- Use `+page.server.ts` for all data loading (no client-side fetching)
- `src/lib/models/useBooks.ts` is deprecated - server-side only now

**Daily Limit System:**

```typescript
const DISABLE_DAILY_LIMIT = true; // Toggle in +page.server.ts
```

Uses UTC dates and cookie storage, not user accounts.

**Color System Integration:** Always import colors from the custom system:

```typescript
import { useColors } from './src/lib/models/useColors';
const { generateBackgroundColors, generateColors } = useColors();
```

## Critical Dependencies & Integration

**Deployment:** Vercel adapter configured in `svelte.config.js` **Styling:** TailwindCSS v4 via `@tailwindcss/vite` plugin **Auth:** Discord OAuth routes exist but are disabled (`// Discord auth temporarily disabled`)

## File Organization

- `/books/*.md` - Book content (introduction.md, rules.md)
- `/src/lib/models/` - Utility functions (colors, deprecated useBooks)
- `/src/routes/auth/discord/` - Disabled auth system
- Static alias: `$lib` → `./src/lib` (svelte.config.js)

## Common Gotchas

1. **Book heights:** Calculated client-side after DOM render via `measureHeights()` - don't SSR
2. **Color usage:** Use custom Tailwind colors (primary/secondary/background) not standard colors
3. **Navigation:** Use `window.location.href` for book navigation (see `gotoBook()` function)
4. **Content loading:** Always server-side in `+page.server.ts`, never client-side API calls
5. **Deployment:** Uses adapter-vercel, not adapter-auto - configured for static export

## Academy Theme Context

This is a roleplay community academy site. Maintain the gothic vampire aesthetic with faculty names like "Zrott" (Academy Director) and "Voltraxis" (Head of Security). Faculty quotes should be in-character and thematic.
