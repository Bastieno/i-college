import { useState } from 'react';
import { Radio } from 'antd';
import styled from 'styled-components';
import Box from '@components/Box';
import RegistrationForm from '@components/RegistrationForm';

const StyledContent = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 2fr 3fr;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const LeftContent = styled.div`
  padding: 20px;
  h2 {
    margin-bottom: 20px;
    font-size: 18px;
    font-weight: 600
  }
`;

const RightContent = styled.div`
  padding: 20px;
  h2 {
    width: 400px;
    margin: 0 auto 20px;
    font-size: 18px;
    font-weight: 600;

    @media (max-width: 768px) {
      margin: 0 0 16px;
    }
  }
`;

const RegistrationPageContent = () => {
  return (
    <StyledContent>
      <LeftContent>
        <h2>Steps to follow</h2>
        <Box>
          <Box display="flex" mb={3}>
            <Radio />
            <span style={{ lineHeight: 1.7 }}>
              Enter the College Identification Number of your institution, click on Next to Proceed
            </span>
          </Box>
          <Box display="flex">
            <Radio />
            <span style={{ lineHeight: 1.7 }}>
              Enter your Email Address and Matriculation Number and click Next.
              Your Password would be sent to the Email Address you entered.
              Enter the Password in the next step to proceed.
            </span>
          </Box>
        </Box>
      </LeftContent>
      <RightContent>
        <h2>Registration</h2>
        <Box
          width={['80%', '400px', '400px', '400px']}
          height={'500px'}
          mx={'auto'}
          bg={'white'}
        >
          <RegistrationForm />
        </Box>
      </RightContent>
    </StyledContent>
  );
};

export default RegistrationPageContent;
