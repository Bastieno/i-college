import { NextPage } from 'next';
import Box from '@components/common/box';
import LoginForm from '@components/views/login/loginForm';
import Header from '@components/common/header';
import Footer from '@components/common/footer';

const LoginPage: NextPage = () => {
  return (
    <Box minHeight={'100vh'} position="relative">
      <Box pb={5} >
        <Header />
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
      </Box>
      <Footer />
    </Box>
  );
};

export default LoginPage;
