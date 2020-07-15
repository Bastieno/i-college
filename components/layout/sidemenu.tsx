import { useRouter } from 'next/router';
import { Menu } from 'antd';
import { adminMenuItems, studentMenuItems } from '../../data';
import {
  getAdminSelectedMenuItem,
  getStudentSelectedMenuItem,
} from '../../utils';

const SideMenu = ({ role }) => {
  const { pathname, push } = useRouter();
  const handleClick = (href: string) => push(href);
  const menuItems = role === 'admin' ? adminMenuItems : studentMenuItems;
  const getSelectedMenuItem = role === 'admin' ? getAdminSelectedMenuItem
    : getStudentSelectedMenuItem;

  return (
    <Menu
      style={{ background: '#e2e2e2' }}
      theme="light"
      mode="inline"
      selectedKeys={getSelectedMenuItem(pathname)}
    >
      {
        menuItems.map(({ key, itemName, href, icon }) => (
          <Menu.Item
            onClick={() => handleClick(href)}
            key={key}
            icon={icon}
          >
            {itemName}
          </Menu.Item>
        ))
      }
    </Menu>
  );
};

export default SideMenu;
