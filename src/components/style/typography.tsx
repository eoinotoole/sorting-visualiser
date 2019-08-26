import { css } from "styled-components";
import { themeVariable } from "./helpers";

export default css`
  :root {
    /* base values */
    --text-base-size: 1em;
    --text-scale-ratio: 1.2;
    --heading-line-height: 1.2;
    --body-line-height: 1.4;

    @media (min-width: ${themeVariable("breakpoints", "tablet")}) {
      :root {
        --text-scale-ratio: 1.3;
      }
    }

    @media (min-width: ${themeVariable("breakpoints", "desktop")}) {
      :root {
        --text-scale-ratio: 1.4;
      }
    }

    /* type scale */
    --text-xs: calc(1em / (var(--text-scale-ratio) * var(--text-scale-ratio)));
    --text-sm: 0.9em;
    --text-md: calc(1em * var(--text-scale-ratio));
    --text-lg: calc(1em * var(--text-scale-ratio) * var(--text-scale-ratio));
    --text-xl: calc(
      1em * var(--text-scale-ratio) * var(--text-scale-ratio) *
        var(--text-scale-ratio)
    );
    --text-xxl: calc(
      1em * var(--text-scale-ratio) * var(--text-scale-ratio) *
        var(--text-scale-ratio) * var(--text-scale-ratio)
    );
    --text-xxxl: calc(
      1em * var(--text-scale-ratio) * var(--text-scale-ratio) *
        var(--text-scale-ratio) * var(--text-scale-ratio) *
        var(--text-scale-ratio)
    );
  }

  body {
    font-family: ${themeVariable("fonts", "primary")};
    font-size: var(--text-base-size);
    color: ${themeVariable("colours", "body_colour")};
    line-height: var(--body-line-height);
  }
  h1,
  h2,
  h3,
  h4 {
    line-height: var(--heading-line-height);
    margin: 0;
    margin-bottom: var(--space-xxs);
  }
  h1 {
    font-size: var(--text-xxl);
  }
  h2 {
    font-size: var(--text-xl);
  }
  h3 {
    font-size: var(--text-l);
  }
  h4 {
    font-size: var(--text-m);
  }
  p {
    line-height: var(--body-line-height);
    margin: 0 0 var(--space-md);
  }
  small {
    font-size: var(--text-sm);
  }
  a {
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;
