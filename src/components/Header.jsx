import styled from 'styled-components';
import Search from './search/Search';

const Header = () => {
  return (
    <HeaderLayout>
      <Search />
    </HeaderLayout>
  );
};

export default Header;

const HeaderLayout = styled.header`
  width: 1440px;
  height: 97px;
  margin: 0 0 15px;
  padding: 53px 261px 12px 919px;
  background-color: #1ea1f7;
  box-sizing: border-box;
`;
