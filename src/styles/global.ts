import { createGlobalStyle } from "styled-components";
import { theme } from "../theme/theme";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${theme.font.poppins};
  }

  body {
    width: 100%;
    height: 100%;
  }

  html {
    scroll-behavior: smooth;
  }
`;