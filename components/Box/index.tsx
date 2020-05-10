import React from 'react';
import styled from 'styled-components';
import { base, BaseStyleProps as BoxProps } from '../../styles/baseStyles';

const BoxWrapper = styled.div<BoxProps>`
  ${base};
`;

const Box = ({ children, ...props }) => (
  <BoxWrapper {...props}>{children}</BoxWrapper>
);

export default Box;
