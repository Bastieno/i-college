import { NextPage } from 'next';
import Box from '@components/Box';
import Header from '@components/Header';
import Footer from '@components/Footer';

const RegistrationPage: NextPage = () => {
  return (
    <Box minHeight={'100vh'} position="relative">
      <Box pb={5} >
        <Header />
        <Box p={[3, 4, 4, 5]}>
          <Box width={'100%'} maxWidth={['100%', '750px', '970px', '1200px']} mx={'auto'}>
            This is the Registration Page. It is still under development
          </Box>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default RegistrationPage;
