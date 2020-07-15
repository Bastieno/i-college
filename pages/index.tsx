import { NextPage } from 'next';
import styled from 'styled-components';
// import Link from 'next/link';
import Box from '@components/common/box';
import Header from '@components/common/header';
import Footer from '@components/common/footer';
import HomePageLeftContent from '@components/views/home/leftContent';
import HomePageRightContent from '@components/views/home/rightContent';

const StyledContent = styled.div`
  display: grid;
  grid-template-columns: 2fr 3fr;
  @media (max-width: 768px) {
    grid-template-columns: auto;
  }
`;

const HomePage: NextPage = () => {
  return (
    <Box minHeight={'100vh'} position="relative">
      <Box pb={5} >
        <Header />
        <Box p={[3, 4, 4, 5]}>
          <Box width={'100%'} maxWidth={['100%', '750px', '970px', '1200px']} mx={'auto'}>
            <StyledContent>
              <HomePageLeftContent />
              <HomePageRightContent />
            </StyledContent>
          </Box>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default HomePage;
