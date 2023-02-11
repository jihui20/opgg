import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const SearchList = ({ value }) => {
  const navigate = useNavigate();

  const onClickHandler = (e) => {
    e.preventDefault();
    navigate(`/summoner/${value.name}`, {
      state: { keyword: value.name },
    });
  };

  return (
    <SearchListLayout>
      <ul>
        <li>
          <a href="#!" onClick={(e) => onClickHandler(e)}>
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
          </a>
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

  ul {
    li {
      padding: 8px 16px;
    }
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
