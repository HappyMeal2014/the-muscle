# Project Conventions

## Stack
- Angular 17+, standalone components only (no NgModules)
- State: signals (`signal`, `computed`, `effect`) — avoid RxJS unless handling async streams/HTTP
- Styling: Tailwind CSS v4 utility classes only — no custom CSS files unless truly unavoidable (document why inline if so)
- Change detection: OnPush everywhere

## Conventions
- One component per file, `*.component.ts` colocated with its template (inline template preferred for small components)
- Inputs/outputs use the `input()` / `output()` signal APIs, not `@Input()`/`@Output()` decorators
- Naming: kebab-case selectors prefixed `app-`, PascalCase classes
- Tailwind: v4, configured via CSS in `src/styles.css` (`@import 'tailwindcss'`, PostCSS plugin in `.postcssrc.json`) — there is no `tailwind.config.ts`; define design tokens with `@theme` in `src/styles.css` (spacing/colors) — no arbitrary values like `w-[137px]` unless justified in a comment
- Tests: Jest + Angular Testing Library, colocated `*.spec.ts`

## When delegating to subagents
- Keep the main conversation focused on building features
- Delegate performance profiling, security audits, styling consistency checks, and multi-file refactors to the relevant subagent below so verbose output doesn't clutter this context
