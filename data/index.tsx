import {
  AppstoreOutlined,
  IdcardOutlined,
  BankOutlined,
  BookOutlined,
  SettingOutlined,
  BarChartOutlined,
} from '@ant-design/icons';

export const MENU_ITEMS = [
  {
    imageUrl: 'https://via.placeholder.com/200x200?text=Image+1',
    title: 'Your Pocket Library',
    description: 'You can save your Term Papers, Projects, Assignments etc. For future references',
    color: '#ffffff',
    bg: '#EB5757',
  },
  {
    imageUrl: 'https://via.placeholder.com/200x200?text=Image+1',
    title: 'Result Handy',
    description: 'You don’t have to wait till the results are on the Notice Board. It’s just so handy using iCOLLEGE',
    color: '#ffffff',
    bg: '#2471A3',
  },
  {
    imageUrl: 'https://via.placeholder.com/200x200?text=Image+1',
    title: 'Awesome Courses',
    description: 'You have within your reach, unimaginable range of courses to learn. This courses are not your normal curriculum but it is helpful to expand your knowledge on your road ahead',
    color: '#626567',
    bg: '#ffffff',
  },
];

export const adminMenuItems = [
  {
    key: '1',
    itemName: 'Dashboard',
    href: '/admin',
    icon: <AppstoreOutlined />,
  },
  {
    key: '2',
    itemName: 'Users',
    href: '/admin/users',
    icon: <IdcardOutlined />,
  },
  {
    key: '3',
    itemName: 'Department',
    href: '/admin/department',
    icon: <BankOutlined />,
  },
  {
    key: '4',
    itemName: 'Courses',
    href: '/admin/courses',
    icon: <BookOutlined />,
  },
  {
    key: '5',
    itemName: 'Settings',
    href: '/admin/settings',
    icon: <SettingOutlined />,
  },
];

export const studentMenuItems = [
  {
    key: '1',
    itemName: 'Dashboard',
    href: '/student',
    icon: <AppstoreOutlined />,
  },
  {
    key: '2',
    itemName: 'Results',
    href: '/student/results',
    icon: <BarChartOutlined />,
  },
  {
    key: '3',
    itemName: 'Courses',
    href: '/student/courses',
    icon: <BookOutlined />,
  },
  {
    key: '4',
    itemName: 'Settings',
    href: '/student/settings',
    icon: <SettingOutlined />,
  },
];
