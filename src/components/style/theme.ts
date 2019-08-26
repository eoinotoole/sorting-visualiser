import { createGlobalStyle } from "styled-components";

import breakpoints from "./themeValues/breakpoints";
import colours from "./themeValues/colours";
import fonts from "./themeValues/fonts";
import base from "./base";
import typography from "./typography";
import spacing from "./spacing";

export const GlobalStyles = createGlobalStyle`
   ${base};
   ${typography};
   ${spacing};
`;

export const Theme = {
  breakpoints,
  colours,
  fonts
};
