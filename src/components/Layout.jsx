import React from 'react';
import styled from 'styled-components';

const Layout = ({ children }) => {
  return (
    <MainLayout>
      <div className="inner">{children}</div>
    </MainLayout>
  );
};

const MainLayout = styled.main`
  width: 100%;
  min-height: 60rem;
  padding: 2rem 0;

  .inner {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
`;
export default Layout;
