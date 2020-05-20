import React, { useState } from 'react';
import Link from 'next/link';
import { Layout, Menu, Badge, Avatar, Space } from 'antd';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  SettingOutlined,
  BankOutlined,
  AppstoreOutlined,
  IdcardOutlined,
  BookOutlined,
  BellOutlined,
  MessageFilled,
  UserOutlined,
} from '@ant-design/icons';
import Box from '@components/Box';

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
    background: #e2e2e2;
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
    background: #000000;
    margin: 16px 24px 16px 0;
    float: left;
  }

  .trigger {
    color: #2471A3;
    font-size: 18px;
    line-height: 64px;
    padding-right: 24px;
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
          <Box
            bg="#ffffff"
            padding="24px"
            height="75px"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <div>
              <Box>
                <Link href="/">
                  <a style={{
                    display: 'inline-block',
                    width: '100px',
                    fontWeight: 700,
                    textAlign: 'center',
                    padding: '8px',
                    backgroundColor: '#000',
                    color: '#fff',
                  }}>
                    iCOLLEGE
                  </a>
                </Link>
              </Box>
            </div>
            <div>
              <Space size="middle">
                <Avatar size="large" icon={<UserOutlined />} />
                <span style={{ color: '#626567' }}>Tumbare</span>
              </Space>
            </div>
          </Box>
          <Box display="flex" justifyContent="space-between" alignItems="center" style={{ background: '#f6f6f6', height: '65px', padding: '8px 24px', borderTop: '1px solid #e3e3e3' }}>
            <div>
              <span>
                {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                  className: 'trigger',
                  onClick: toggle,
                })}
              </span>
              <span style={{ color: '#2471A3', fontSize: '18px', lineHeight: '20px', fontWeight: 600 }}>University of Port Harcourt</span>
            </div>
            <Space size={48} style={{ paddingRight: 8 }}>
              <Badge style={{
                height: '16px',
                minWidth: '16px',
                lineHeight: '16px',
                fontSize: '10px',
              }} count={4}>
                <MessageFilled style={{ fontSize: 20 }} />
              </Badge>
              <Badge style={{
                backgroundColor: '#52c41a',
                height: '16px',
                minWidth: '16px',
                lineHeight: '16px',
                fontSize: '10px',
              }} count={5}>
                <BellOutlined style={{ fontSize: 20 }} />
              </Badge>
            </Space>
          </Box>
        </div>
        <Layout>
          <Sider
            trigger={null} collapsible collapsed={collapsed}
            style={{
              marginTop: '140px',
              overflow: 'auto',
              height: '100%',
              position: 'fixed',
              left: 0,
            }}
          >
            {/* <div className="logo" /> */}
            <Menu style={{ background: '#e2e2e2' }} theme="light" mode="inline" defaultSelectedKeys={['1']}>
              <Menu.Item key="1" icon={<AppstoreOutlined />}>
                Dashboard
              </Menu.Item>
              <Menu.Item key="2" icon={<IdcardOutlined />}>
                Members
              </Menu.Item>
              <Menu.Item key="3" icon={<BankOutlined />}>
                Department
              </Menu.Item>
              <Menu.Item key="4" icon={<BookOutlined />}>
                Courses
              </Menu.Item>
              <Menu.Item key="5" icon={<SettingOutlined />}>
                Setting
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout className="site-layout" style={{ background: '#f6f6f6' }}>
            <div style={{ marginLeft }}>
              <Content style={{ overflow: 'initial', paddingBottom: '64px', paddingTop: '140px' }}>
                <div className="site-layout-background" style={{ padding: '0 24px 24px' }}>
                  {children}
                </div>
              </Content>
            </div>
            <Box
              height={'64px'}
              bg={'black'}
              width={'100%'}
              position="absolute"
              bottom="0"
              display="flex"
              flex="0 0 auto"
              alignItems="center"
            >
              <a style={{
                display: 'block',
                fontWeight: 700,
                textAlign: 'center',
                padding: '8px',
                backgroundColor: '#000',
                color: '#fff',
                marginLeft: '32px',
              }}>
                Copyright @ iCOLLEGE 2020
              </a>
            </Box>
          </Layout>
        </Layout>
      </Layout>
    </StyledContainer>
  );
};

export default AdminLayout;
