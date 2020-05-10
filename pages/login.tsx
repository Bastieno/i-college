import { NextPage } from 'next';
// import styled from 'styled-components';
import Box from '@components/Box';
import LoginForm from '@components/Login-Form';

const LoginPage: NextPage = () => {
  return (
    <Box minHeight={'100vh'} position="relative">
      <div style={{ paddingBottom: '64px' }} >
        <Box height={'100px'} bg={'white'} display="flex" alignItems="center">
          <a style={{
            display: 'inline-block',
            width: '100px',
            fontWeight: 700,
            textAlign: 'center',
            padding: '8px',
            backgroundColor: '#000',
            color: '#fff',
            marginLeft: '32px',
          }}>
            iCOLLEGE
          </a>
        </Box>
        <Box my={'70px'} minHeight={0} flex="auto">
          <h2
            style={{ fontSize: '25px', fontWeight: 700 }}
            className="text-center mb-4"
          >
            Login to your Account
          </h2>
          <Box
            width={['80%', '400px', '400px', '400px']}
            height={'500px'}
            mx={'auto'}
            bg={'white'}
          >
            <LoginForm />
          </Box>
        </Box>
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
    </Box>
  );
};

export default LoginPage;
