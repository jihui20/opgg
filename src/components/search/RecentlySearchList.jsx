import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { recentlySearchState } from 'store/recentlySearch';

const RecentlySearchList = () => {
  const isRecentlySearchList = useRecoilValue(recentlySearchState);

  return (
    <SearchListLayout>
      <p>최근 검색어</p>
      <ul>
        {isRecentlySearchList?.length > 0 ? (
          isRecentlySearchList.map((item) => {
            return (
              <li key={item}>
                <span>{item}</span>
              </li>
            );
          })
        ) : (
          <li className="no-summoner">
            <span>최근에 본 소환사가 없습니다.</span>
          </li>
        )}
      </ul>
    </SearchListLayout>
  );
};

export default RecentlySearchList;

const SearchListLayout = styled.div`
  position: absolute;
  top: 35px;
  left: 0;
  width: 100%;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: rgb(0 0 0 / 30%) 0px 8px 12px 0px;
  box-sizing: border-box;

  p {
    padding: 8px 16px;
    font-size: 13px;
    color: #9aa4af;
  }

  ul {
    font-size: 14px;

    li {
      padding: 8px 16px;

      &.no-summoner {
        padding: 30px 16px;
        font-size: 12px;
        text-align: center;
        color: #9aa4af;
      }
    }
  }
`;
