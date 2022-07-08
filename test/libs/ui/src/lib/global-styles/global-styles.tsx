import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

  body {
    margin: 0;
    font-size: 16px;
    font-family: sans-serif;
  }
`;
export default GlobalStyles;