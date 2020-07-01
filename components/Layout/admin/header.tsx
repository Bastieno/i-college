import React from 'react';
import Link from 'next/link';
import { Badge, Avatar, Space } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  BellOutlined,
  MessageFilled,
  UserOutlined,
} from '@ant-design/icons';
import Box from '@components/Box';

const Header = ({ collapsed, toggle }) => {
  return (
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
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        style={{
          background: '#f6f6f6',
          height: '65px',
          padding: '8px 24px',
          borderTop: '1px solid #e3e3e3',
        }}
      >
        <div>
          <span>
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: toggle,
            })}
          </span>
          <span
            style={{
              color: '#2471A3',
              fontSize: '18px',
              lineHeight: '20px',
              fontWeight: 600,
            }}
          >
            University of Port Harcourt
          </span>
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
  );
};

export default Header;
