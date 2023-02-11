import React from 'react';
import styled from 'styled-components';

const Layout = ({ children }) => {
  return <LayoutStyle>{children}</LayoutStyle>;
};

const LayoutStyle = styled.main`
  width: 100%;
  min-height: 60rem;
  background-color: #eaeaea;
`;
export default Layout;
