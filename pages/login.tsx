import { useContext } from 'react';
import { NextPage } from 'next';
import styled from 'styled-components';
import { color, ColorProps, fontSize, FontSizeProps, layout, LayoutProps } from 'styled-system';
import AppContext from '../contexts/appContext';

const Heading = styled.h1<ColorProps & FontSizeProps>`
  ${fontSize};
  ${color};
`;

const Button = styled.button<ColorProps>`
  ${color};
`;

const Main = styled.main<LayoutProps & ColorProps>`
  ${layout};
  ${color}
`;

interface Props {
  userAgent?: string;
  userName: string;
}

const LoginPage: NextPage<Props> = () => {
  const value = useContext(AppContext);
  const { toggleMode, mode } = useContext(AppContext);
  console.log(value);

  return (
    <Main minHeight={12} color="text" bg={['background']} >
      <div>This is the login page</div>
      <Heading fontSize={6} color="text" bg={['background']}>My Login Page</Heading>
      <Button onClick={toggleMode} bg={['background']} >{mode}</Button>
    </Main>
  );
};

export default LoginPage;
