import React from 'react';
import styled from 'styled-components';

const InnerLayout = ({ children }) => {
  return <InnerLayoutStyle>{children}</InnerLayoutStyle>;
};

const InnerLayoutStyle = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
`;
export default InnerLayout;
