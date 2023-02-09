import styled from 'styled-components';

const SearchList = ({ value }) => {
  return (
    <SearchListLayout>
      <ul>
        <li>
          <span
            className="user-thumb"
            style={{
              backgroundImage: `url(${value.profileImageUrl})`,
            }}
          ></span>
          <p className="user-info">
            <span>{value.name}</span>
            <span>Level {value.level}</span>
          </p>
        </li>
      </ul>
    </SearchListLayout>
  );
};

export default SearchList;

const SearchListLayout = styled.div`
  position: absolute;
  top: 35px;
  left: 0;
  width: 100%;
  padding: 10px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: rgb(0 0 0 / 30%) 0px 8px 12px 0px;
  box-sizing: border-box;

  .user-thumb {
    display: inline-block;
    width: 36px;
    height: 36px;
    margin-right: 10px;
    background-position: 50%;
    background-size: 100% auto;
    background-repeat: no-repeat;
    border-radius: 50%;
    vertical-align: middle;
  }

  .user-info {
    display: inline-block;
    vertical-align: middle;

    span {
      display: block;
      font-size: 14px;
      color: #44515c;

      + span {
        margin-top: 3px;
        font-size: 11px;
        color: #758592;
      }
    }
  }
`;
