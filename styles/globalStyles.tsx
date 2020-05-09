import { createGlobalStyle } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${themeGet('colors.background', '#fafafa')};
    font-family: ${themeGet('fonts.body', 'Roboto')};
    margin: ${themeGet('space.0', '0px')};
    padding: ${themeGet('space.0', '0px')};
    box-sizing: border-box;
    overflow-x: hidden;
  }

  ul {
    margin: ${themeGet('space.0', '0px')};
    padding: ${themeGet('space.0', '0px')};
  }

  li {
    list-style-type: none;
  }

  a {
    text-decoration: none;
    &:hover {
      text-decoration: none;
      /* color: ${themeGet('colors.yellow', '#4ac750')}; */
      cursor: pointer;
    }
  }
`;
