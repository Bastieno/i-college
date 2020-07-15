import theme from '../theme/index';

export const getTheme = (mode: string) => ({
  ...theme,
  colors: theme.colors.modes[mode] || theme.colors,
});

export const getAdminSelectedMenuItem = (pathname: string) => {
  switch (pathname) {
    case '/admin':
      return ['1'];
    case '/admin/users':
      return ['2'];
    case '/admin/department':
      return ['3'];
    case '/admin/courses':
      return ['4'];
    case '/admin/settings':
      return ['5'];
    default:
      break;
  }
};

export const getStudentSelectedMenuItem = (pathname: string) => {
  switch (pathname) {
    case '/student':
      return ['1'];
    case '/student/result':
      return ['2'];
    case '/student/courses':
      return ['3'];
    case '/student/setting':
      return ['4'];
    default:
      break;
  }
};
