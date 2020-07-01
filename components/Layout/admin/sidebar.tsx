// import { useState } from 'react';
import { Layout } from 'antd';
import SideMenu from './sidemenu';

const { Sider } = Layout;

const SideBar = ({ collapsed }) => {
  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      style={{
        marginTop: '140px',
        overflow: 'auto',
        height: '100%',
        position: 'fixed',
        left: 0,
      }}
    >
      <SideMenu />
    </Sider>
  );
};

export default SideBar;
