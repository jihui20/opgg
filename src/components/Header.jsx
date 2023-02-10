import styled from 'styled-components';
import Search from './search/Search';

const Header = () => {
  return (
    <HeaderLayout>
      <div className="inner">
        <Search />
      </div>
    </HeaderLayout>
  );
};

export default Header;

const HeaderLayout = styled.header`
  position: relative;
  width: 100%;
  height: 97px;
  margin: 0 0 15px;
  padding: 53px 261px 12px 919px;
  background-color: #1ea1f7;
  box-sizing: border-box;

  .inner {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
    box-sizing: border-box;
  }
`;
