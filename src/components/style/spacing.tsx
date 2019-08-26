import { css } from "styled-components";

export default css`
  :root {
    --space-unit: 1em;
    --space-xxs: calc(0.25 * var(--space-unit));
    --space-xs: calc(0.5 * var(--space-unit));
    --space-sm: calc(0.75 * var(--space-unit));
    --space-md: calc(1.25 * var(--space-unit));
    --space-lg: calc(2 * var(--space-unit));
    --space-xl: calc(3.25 * var(--space-unit));
    --space-xxl: calc(5.25 * var(--space-unit));
  }

  @media (min-width: $tablet) {
    :root {
      --space-unit: 1.3em;
    }
  }
  @media (min-width: $desktop) {
    :root {
      --space-unit: 1.5em;
    }
  }
`;
