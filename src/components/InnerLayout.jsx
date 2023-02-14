import React from 'react';
import styled, { css } from 'styled-components';

const InnerLayout = ({ children, ...attr }) => {
  return <InnerLayoutStyle attr={attr}>{children}</InnerLayoutStyle>;
};

const InnerLayoutStyle = styled.div`
  max-width: 983px;
  width: 100%;
  margin: 0 auto;
  box-sizing: border-box;

  ${(props) => props.attr && props.attr}
`;
export default InnerLayout;
