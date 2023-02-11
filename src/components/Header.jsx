import styled from 'styled-components';
import Search from './search/Search';

const Header = () => {
  return (
    <HeaderLayout>
      <InnerLayout>
        <Search />
      </InnerLayout>
    </HeaderLayout>
  );
};

export default Header;

const HeaderLayout = styled.header`
  position: relative;
  width: 100%;
  height: 97px;
  padding: 53px 0 12px 0;
  background-color: #1ea1f7;
  box-sizing: border-box;
`;

const InnerLayout = styled.div`
  display: flex;
  justify-content: flex-end;
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
`;
