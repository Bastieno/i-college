import { createGlobalStyle } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

export const GlobalStyle = createGlobalStyle`
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    background-color: ${themeGet('colors.background', '#fafafa')};
    font-family: ${themeGet('fonts.body', 'Roboto')};
    margin: ${themeGet('space.0', '0px')};
    padding: ${themeGet('space.0', '0px')};
    box-sizing: border-box;
    overflow-x: hidden;
    -ms-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
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
      color: ${themeGet('colors.yellow', '#4ac750')};
      cursor: pointer;
    }
  }

  .text-left {
    text-align: left;
  }

  .text-right {
    text-align: right;
  }

  .text-center {
    text-align: center;
  }

  .m-0 {
    margin: 0;
  }

  .mt-0,
  .my-0 {
    margin-top: 0;
  }

  .mr-0,
  .mx-0 {
    margin-right: 0;
  }

  .mb-0,
  .my-0 {
    margin-bottom: 0;
  }

  .ml-0,
  .mx-0 {
    margin-left: 0;
  }

  .m-1 {
    margin: 0.25rem;
  }

  .mt-1,
  .my-1 {
    margin-top: ${themeGet('space.1', '4px')};
  }

  .mr-1,
  .mx-1 {
    margin-right: ${themeGet('space.1', '4px')};
  }

  .mb-1,
  .my-1 {
    margin-bottom:${themeGet('space.1', '4px')};
  }

  .ml-1,
  .mx-1 {
    margin-left: ${themeGet('space.1', '4px')};
  }

  .m-2 {
    margin: ${themeGet('space.2', '8px')};
  }

  .mt-2,
  .my-2 {
    margin-top: ${themeGet('space.2', '8px')};
  }

  .mr-2,
  .mx-2 {
    margin-right: ${themeGet('space.2', '8px')};
  }

  .mb-2,
  .my-2 {
    margin-bottom: ${themeGet('space.2', '8px')};
  }

  .ml-2,
  .mx-2 {
    margin-left: ${themeGet('space.2', '8px')};
  }

  .m-3 {
    margin: ${themeGet('space.3', '16px')};
  }

  .mt-3,
  .my-3 {
    margin-top: ${themeGet('space.3', '16px')};
  }

  .mr-3,
  .mx-3 {
    margin-right: ${themeGet('space.3', '16px')};
  }

  .mb-3,
  .my-3 {
    margin-bottom: ${themeGet('space.3', '16px')};
  }

  .ml-3,
  .mx-3 {
    margin-left: ${themeGet('space.3', '16px')};
  }

  .m-4 {
    margin: ${themeGet('space.4', '32px')};
  }

  .mt-4,
  .my-4 {
    margin-top: ${themeGet('space.4', '32px')};
  }

  .mr-4,
  .mx-4 {
    margin-right: ${themeGet('space.4', '32px')};
  }

  .mb-4,
  .my-4 {
    margin-bottom: ${themeGet('space.4', '32px')};
  }

  .ml-4,
  .mx-4 {
    margin-left: ${themeGet('space.4', '32px')};
  }

  .m-5 {
    margin: ${themeGet('space.5', '64px')};
  }

  .mt-5,
  .my-5 {
    margin-top: ${themeGet('space.5', '64px')};
  }

  .mr-5,
  .mx-5 {
    margin-right: ${themeGet('space.5', '64px')};
  }

  .mb-5,
  .my-5 {
    margin-bottom: ${themeGet('space.5', '64px')};
  }

  .ml-5,
  .mx-5 {
    margin-left: ${themeGet('space.5', '64px')};
  }

  .text-disabled {
    color: ${themeGet('colors.yellow', '#4ac750')};
  }

  .logo {
    display: flex;
    align-items: center;
    margin-right: 1rem;
    font-size: 1.25rem;
    white-space: nowrap;
    color: ${themeGet('colors.yellow', '#4ac750')};
    justify-content: center;
  }

  .logo > svg {
    fill: ${themeGet('colors.yellow', '#4ac750')};
  }
`;
