import React, { useState } from 'react';
import { Layout } from 'antd';
import { useMediaQuery } from 'react-responsive';
import StyledContainer from './styled-container';
import MainContent from './main-content';
import SideBar from './sidebar';
import Header from './header';
import Footer from './footer';

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
        <Header collapsed={collapsed} toggle={toggle} />
        <Layout>
          <SideBar collapsed={collapsed} />
          <Layout className="site-layout" style={{ background: '#f6f6f6' }}>
            <MainContent marginLeft={marginLeft} content={children} />
            <Footer />
          </Layout>
        </Layout>
      </Layout>
    </StyledContainer>
  );
};

export default AdminLayout;
