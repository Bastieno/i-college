import colors from './colors';

const breakpoints: string[] = ['576px', '768px', '991px', '1220px'];
const space: string[] = ['0px', '4px', '8px', '16px', '32px', '64px', '128px', '256px', '512px'];
const fontSizes: Number[] = [12, 14, 16, 18, 20, 24, 32, 48, 64, 72];
const fontWeights: Number[] = [100, 200, 300, 400, 500, 600, 700, 800, 900];
const sizes: any[] = [16, 32, 40, 44, 48, 64, 128, 256, 512, 768, 1024, 1536, '100vh'];
const radii: any[] = [3, 4, 5, 10, 20, 30, 60, 120, '50%'];

const theme = {
  initialColorModeName: 'light',
  breakpoints,
  space,
  sizes,
  radii,
  fontSizes,
  fontWeights,
  fonts: {
    body: 'system-ui, sans-serif',
    monospace: 'Menlo, monospace',
  },
  lineHeights: {
    body: 1.75,
    heading: 1.25,
  },
  letterSpacings: {
    normal: 'normal',
    tracked: '0.1em',
    tight: '-0.05em',
    mega: '0.25em',
  },
  borders: [
    0,
    '1px solid',
    '2px solid',
    '3px solid',
    '4px solid',
    '5px solid',
    '6px solid',
  ],
  colors,
  colorStyles: {
    primary: {
      color: colors.primary,
      borderColor: colors.transparent,
      backgroundColor: colors.transparent,
      '&:hover': {
        color: colors.primary,
        backgroundColor: colors.transparent,
      },
    },
    secondary: {
      color: colors.secondary,
      borderColor: colors.transparent,
      backgroundColor: colors.transparent,
      '&:hover': {
        color: colors.secondaryHover,
        borderColor: colors.transparent,
        backgroundColor: colors.transparent,
      },
    },
    warning: {
      color: colors.yellow,
      borderColor: colors.yellow,
      '&:hover': {
        color: colors.yellowHover,
        borderColor: colors.yellowHover,
      },
    },
    error: {
      color: colors.secondaryHover,
      borderColor: colors.secondaryHover,
      '&:hover': {
        color: colors.secondary,
        borderColor: colors.secondary,
      },
    },
    primaryWithBg: {
      color: colors.white,
      backgroundColor: colors.primary,
      borderColor: colors.primary,
      border: '1px solid',
      '&:hover': {
        color: colors.white,
        backgroundColor: colors.primaryHover,
        borderColor: colors.primaryHover,
        boxShadow: colors.primaryBoxShadow,
      },
    },
    secondaryWithBg: {
      color: colors.black,
      backgroundColor: colors.secondary,
      borderColor: colors.secondary,
      '&:hover': {
        color: colors.black,
        backgroundColor: colors.secondaryHover,
        borderColor: colors.secondaryHover,
        boxShadow: colors.secondaryBoxShadow,
      },
    },
    warningWithBg: {
      color: colors.white,
      backgroundColor: colors.yellow,
      borderColor: colors.yellow,
      '&:hover': {
        backgroundColor: colors.yellowHover,
        borderColor: colors.yellowHover,
      },
    },
    errorWithBg: {
      color: colors.white,
      backgroundColor: colors.secondaryHover,
      borderColor: colors.secondaryHover,
      '&:hover': {
        backgroundColor: colors.secondary,
        borderColor: colors.secondary,
      },
    },
    transparentBg: {
      backgroundColor: colors.white,
      '&:hover': {
        backgroundColor: colors.white,
      },
    },
  },
  buttons: {
    textButton: {
      border: 0,
      color: colors.primary,
      padding: 0,
      height: 'auto',
      backgroundColor: colors.transparent,
    },
    outlined: {
      borderWidth: '1px',
      borderStyle: 'solid',
      backgroundColor: colors.transparent,
    },
  },
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
    },
    a: {
      color: 'primary',
      '&:hover': {
        color: 'secondary',
      },
    },
    h1: {
      fontSize: [5, 6],
      lineHeight: 'heading',
      a: {
        color: 'inherit',
        textDecoration: 'none',
      },
    },
    h2: {
      fontSize: [4, 5],
      lineHeight: 'heading',
      a: {
        color: 'inherit',
        textDecoration: 'none',
      },
    },
    h3: {
      fontSize: 3,
      lineHeight: 'heading',
      a: {
        color: 'inherit',
        textDecoration: 'none',
      },
    },
    h4: {
      fontSize: 2,
      lineHeight: 'heading',
      a: {
        color: 'inherit',
        textDecoration: 'none',
      },
    },
    h5: {
      fontSize: 1,
      lineHeight: 'heading',
      a: {
        color: 'inherit',
        textDecoration: 'none',
      },
    },
    h6: {
      fontSize: 0,
      lineHeight: 'heading',
      a: {
        color: 'inherit',
        textDecoration: 'none',
      },
    },
    hr: {
      border: 0,
      borderBottom: '1px solid',
      borderColor: 'lightgray',
    },
  },
}

export default theme;
