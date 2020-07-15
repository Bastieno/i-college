import { NextPage } from 'next';
import Box from '@components/common/box';
import Header from '@components/common/header';
import Footer from '@components/common/footer';
import RegistrationPageContent from '@components/views/registration';

const RegistrationPage: NextPage = () => {
  return (
    <Box minHeight={'100vh'} position="relative">
      <Box pb={5} >
        <Header />
        <Box p={[3, 4, 4, 5]}>
          <Box width={'100%'} maxWidth={['100%', '750px', '970px', '1200px']} mx={'auto'}>
            <RegistrationPageContent />
          </Box>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default RegistrationPage;
