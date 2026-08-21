# WAI React

A TypeScript monorepo for semantic React primitives and composable interaction patterns informed by WAI-ARIA. Storybook provides rendered examples and API documentation for the current component surface.

## Implemented packages

| Package                 | Current surface                                                             |
| ----------------------- | --------------------------------------------------------------------------- |
| `@wai-react/components` | Heading, text, list, and list-item primitives                               |
| `@wai-react/patterns`   | Accordion, landmarks, region, complementary landmark, and list-box patterns |

## Design principles

- Keep primitive elements and their base semantics in `@wai-react/components`.
- Keep WAI-ARIA-informed pattern composition in `@wai-react/patterns`.
- Expose named, typed React APIs through explicit package subpaths.
- Design around semantic HTML and explicit ARIA props while allowing consumers to pass standard DOM props.
- Document the public surface with rendered Storybook examples.

## Run Storybook locally

Install the pinned workspace dependencies and start the development tasks:

```sh
pnpm install --frozen-lockfile
pnpm dev
```

Storybook runs at `http://localhost:6006` and includes examples for the primitives, accordion parts, landmarks, and list-box parts.

## Package usage

Import components and patterns from their public subpaths:

```tsx
import { Heading } from "@wai-react/components/heading";
import { List, ListItem } from "@wai-react/components/list";

export function Example() {
  return (
    <section>
      <Heading rank="h2">Account settings</Heading>
      <List>
        <ListItem>Profile</ListItem>
        <ListItem>Notifications</ListItem>
      </List>
    </section>
  );
}
```

Public subpaths also cover `@wai-react/components/text`, `@wai-react/patterns/landmarks/region`, `@wai-react/patterns/landmarks/complimentary`, and `@wai-react/patterns/list-box`. See the Storybook stories for their current props and composition examples.

## Monorepo structure

- `apps/docs`: Storybook documentation and rendered usage examples.
- `packages/components`: semantic React primitives.
- `packages/patterns`: composed WAI-ARIA-informed patterns.
- `packages/eslint-config`: shared lint configuration.
- `packages/typescript-config`: shared TypeScript configuration.

The workspace is managed with pnpm and Turborepo; tsup builds the component packages.

## Validation

Run the repository checks from the workspace root:

```sh
pnpm lint
pnpm build
```

`pnpm build` builds the packages and the static Storybook documentation.

## Versioning and releases

[Changesets](https://github.com/changesets/changesets) records package changes and coordinates version updates. Create a changeset for a publishable change with:

```sh
pnpm changeset
```

Package publishing is handled separately through the repository release workflow; local development does not require publishing.

## Accessibility status

The library is designed around semantic HTML and explicit ARIA props, but this project does not claim complete WAI-ARIA or WCAG compliance. Storybook examples document the implemented behavior; they are not a substitute for testing with assistive technologies. Consumers remain responsible for validating complete application flows in their own content, styling, and interaction contexts.
