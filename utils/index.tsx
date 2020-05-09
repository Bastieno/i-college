import theme from '../theme/index';

export const getTheme = (mode: string) => ({
  ...theme,
  colors: theme.colors.modes[mode] || theme.colors,
});
