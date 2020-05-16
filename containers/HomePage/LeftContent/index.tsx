import styled from 'styled-components';
import { Button } from 'antd';
import Link from 'next/link';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-content: center;
  padding: 32px 60px;
  @media (max-width: 1170px) {
    padding: 32px 32px;
    width: 100%;
    margin: 0 auto 50px;
  }

  @media (max-width: 876px) {
    padding: 32px 16px;
    width: 100%;
    margin: 0 auto 50px;
  }

  @media (max-width: 768px) {
    padding: 32px;
    width: 80%;
    margin: 0 auto 50px;
  }

  @media (max-width: 576px) {
    padding: 8px;
    width: 90%;
    margin: 0 auto 50px;
  }

  .register-button, .login-button {
    margin-bottom: 16px;
    height: 50px;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
  }

  .register-button {
     color: #2471A3;
     background-color: #ffffff;
  }

  .login-button {
     color: #ffffff;
     background-color: #2471A3;
  }
  .cta {
    p {
      /* margin-top: 64px; */
      margin-bottom: 32px;
    }
  }
`;

const LeftContent = () => (
  <StyledContainer>
    <div className="intro">
      <p><strong>iCOLLEGE</strong> is an Educational System for higher learning.
        It helps universities to manage the stressful academic work for both staff and students.
        Sign up to enjoy the features of iCollege
      </p>
    </div>
    <div className="cta">
      <p>What would you like to do?</p>
      <div className="cta-buttons">
        <Button type="primary" htmlType="submit" className="register-button" ghost block>
          <Link href="/register">
            <a>Register</a>
          </Link>
        </Button>
        <Button type="primary" htmlType="submit" className="login-button" block>
          <Link href="/login">
            <a>Login</a>
          </Link>
        </Button>
      </div>
      <div>
        <Link href="/">
          <a>Check up on some Online Courses</a>
        </Link>
      </div>
    </div>
  </StyledContainer>
);

export default LeftContent;
