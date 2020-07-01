import { useRouter } from 'next/router';
import { Menu } from 'antd';
import {
  SettingOutlined,
  BankOutlined,
  AppstoreOutlined,
  IdcardOutlined,
  BookOutlined,
} from '@ant-design/icons';

const SideMenu = () => {
  const getSelectedMenuItem = (pathname: string) => {
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
  const { pathname, push } = useRouter();
  const handleClick = (href: string) => push(href);

  return (
    <Menu
      style={{ background: '#e2e2e2' }}
      theme="light"
      mode="inline"
      selectedKeys={getSelectedMenuItem(pathname)}
    >
      <Menu.Item
        onClick={() => handleClick('/admin')}
        key="1"
        icon={<AppstoreOutlined />}
      >
        Dashboard
      </Menu.Item>
      <Menu.Item
        onClick={() => handleClick('/admin/users')}
        key="2"
        icon={<IdcardOutlined />}
      >
        Users
      </Menu.Item>
      <Menu.Item
        onClick={() => handleClick('/admin/department')}
        key="3"
        icon={<BankOutlined />}
      >
        Department
      </Menu.Item>
      <Menu.Item
        onClick={() => handleClick('/admin/courses')}
        key="4"
        icon={<BookOutlined />}
      >
        Courses
      </Menu.Item>
      <Menu.Item
        onClick={() => handleClick('/admin/settings')}
        key="5"
        icon={<SettingOutlined />}
      >
        Setting
      </Menu.Item>
    </Menu>
  );
};

export default SideMenu;
