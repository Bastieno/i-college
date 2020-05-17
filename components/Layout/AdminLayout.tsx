import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';

const StyledContainer = styled.div`
  position: relative;
  min-height: 100vh;
  .ant-layout-header,
  .ant-layout-footer {
    background: #7dbcea;
    color: #fff;
  }
  .ant-layout-footer {
    height: 100px;
    width: 100%;
    position: absolute;
    bottom: 0;
    display: flex;
    flex: 0 0 auto;
    align-items: center;
  }
  .ant-layout-sider {
    background: #3ba0e9;
    color: #fff;
  }

  .logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px;
  }

  .header-logo {
    width: 120px;
    height: 31px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px 24px 16px 0;
    float: left;
  }

  .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
  }

  .trigger:hover {
    color: #1890ff;
  }

  .ant-layout-content {
    color: #fff;
    min-height: 120px;
  }
`;

const { Header, Footer, Sider, Content } = Layout;

const AdminLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const marginLeft = collapsed ? '80px' : '200px';

  const handleMediaQueryChange = (matches: boolean) => {
    // matches will be true or false based on the value for the media query
    if (matches && !collapsed) {
      setCollapsed(true);
    }
  };

  const handleMediaQueryChangeForDesktop = (matches: boolean) => {
    if (matches && collapsed) {
      setCollapsed(false);
    }
  };

  const isTabletOrMobile = useMediaQuery({ maxWidth: 768 }, undefined, handleMediaQueryChange);
  const isDesktop = useMediaQuery({ minWidth: 769 }, undefined, handleMediaQueryChangeForDesktop);

  const toggle = () => {
    if (isTabletOrMobile) {
      setCollapsed(true);
    } else {
      setCollapsed(prevState => !prevState);
    }

  };

  return (
    <StyledContainer>
      <Layout style={{ minHeight: '100vh' }}>
        <div style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
          <Header style={{ background: '#021529', padding: 0 }}>
            <div style={{ marginLeft: 24 }}>
              <div className="header-logo" />
              <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                <Menu.Item key="1">nav 1</Menu.Item>
                <Menu.Item key="2">nav 2</Menu.Item>
                <Menu.Item key="3">nav 3</Menu.Item>
              </Menu>
            </div>
          </Header>
          <Header style={{ background: 'red', height: '50px', padding: 0 }}>
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: toggle,
            })}
          </Header>
        </div>
        <Layout>
          <Sider
            trigger={null} collapsible collapsed={collapsed}
            style={{
              marginTop: '110px',
              background: 'brown',
              overflow: 'auto',
              height: '100%',
              position: 'fixed',
              left: 0,
            }}
          >
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
              <Menu.Item key="1" icon={<UserOutlined />}>
                nav 1
            </Menu.Item>
              <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                nav 2
            </Menu.Item>
              <Menu.Item key="3" icon={<UploadOutlined />}>
                nav 3
            </Menu.Item>
            </Menu>
          </Sider>
          <Layout className="site-layout" style={{ background: '#f6f6f6' }}>
            <div style={{ marginLeft }}>
              <Content style={{ overflow: 'initial', paddingBottom: '100px', paddingTop: '110px' }}>
                <div className="site-layout-background" style={{ padding: 24 }}>
                  {children}
                </div>
              </Content>
            </div>
            <Footer style={{ background: 'orange' }} />
          </Layout>
        </Layout>
      </Layout>
    </StyledContainer>
  );
};

export default AdminLayout;
