import React, { Fragment } from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  color: ${props => props.theme.primary};
`;
const Hello = () => (
  <Fragment>
    <Title>Hello World</Title>
  </Fragment>
);

export default Hello;
