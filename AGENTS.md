# AGENTS.md

## Purpose
This repository is a WAI-focused React design system monorepo. Keep architecture and coding style consistent with existing `components`, `patterns`, and Storybook docs.

## Architecture Boundaries
- `packages/components`: primitive, reusable React components that map closely to semantic HTML elements.
- `packages/patterns`: WAI-ARIA patterns composed from primitives in `@wai-react/components`.
- `apps/docs`: Storybook stories and usage examples for public components and patterns.
- `packages/typescript-config` and `packages/eslint-config`: shared tooling presets; reuse these instead of ad-hoc local config.

## Where New Code Goes
- Add primitive UI building blocks to `packages/components/src/<feature>/index.tsx`.
- Add ARIA patterns to `packages/patterns/src/<pattern>/index.tsx`.
- Add pattern sub-parts as nested folders with their own `index.tsx` files.
- Add docs stories under `apps/docs/stories/...` mirroring package structure.

## File and Export Conventions
- Use `index.tsx` as the entrypoint for each component/pattern module.
- Use named exports only; do not introduce default exports.
- Keep package root barrels (`src/index.tsx`) as public API re-export files.
- Keep public surfaces synchronized across source barrels (`src/index.tsx`), `package.json` `exports`, and Storybook stories in `apps/docs/stories`.

## Component and Pattern Style
- Define explicit `*Props` types for each public component.
- Base props on `HTMLAttributes<...>` (or related DOM prop types), using `Omit<>` when restricting conflicting attributes.
- Prefer `forwardRef` for DOM-rendering components and pattern parts that may need ref access.
- Keep components thin and declarative by destructuring props, forwarding `...rest` onto the root element, and rendering `children` directly.
- Preserve semantic HTML and ARIA relationships; accessibility behavior is part of the API.
- For pattern logic, compose primitives from `@wai-react/components/...` rather than re-implementing base primitives.

## Import and Composition Rules
- Use public package import paths (for example `@wai-react/components/list`), not cross-package relative filesystem paths.
- Keep responsibilities split with primitives and basic semantics in `components`, and multi-element ARIA behavior/composition in `patterns`.

## Storybook Conventions
- Add or update stories for every public API change.
- Use Storybook metadata patterns already used in repo: `tags: ["autodocs"]`, centered layout (`parameters.layout = "center"`), and typed meta via `satisfies Meta<typeof Component>` when possible.
- Include at least one default story and controls for custom props.

## Validation Before Finishing
- Run `pnpm lint` for lint checks.
- Run `pnpm build` for package and docs build checks when changes affect exports/build behavior.
- Ensure no architecture drift from established folder and export structure.

## Guardrails
- Do not change the monorepo package responsibilities unless explicitly requested.
- Do not introduce alternate organizational patterns (flat component files, mixed package concerns, hidden exports).
- Do not weaken accessibility semantics for convenience.
- If uncertain, follow the nearest existing component/pattern as the canonical reference.
