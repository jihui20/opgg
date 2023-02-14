import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Kda from 'components/common/Kda';
import IcoNoChampion from 'assets/images/ico_no_champion.png';

const Champions = ({ data }) => {
  const [championsData, setChampionsData] = useState([]);

  useEffect(() => {
    let newArray = [];

    if (!!data) {
      for (let i = 0; i < 3; i++) {
        if (!data[i]) {
          newArray.push({});
        } else {
          newArray.push(data[i]);
        }
      }

      setChampionsData(newArray);
    }
  }, [data]);

  return (
    <MatchChampionsLayout>
      {championsData &&
        championsData.map((item, index) => {
          return Object.keys(item).length !== 0 ? (
            <div key={`${item.key}-${index}`}>
              <ThumbBox>
                <span
                  style={{ backgroundImage: `url(${item.imageUrl})` }}
                ></span>
              </ThumbBox>
              <InfoBox>
                <p className="summoner-name">{item.name}</p>
                <p>
                  <strong>70%</strong>
                  <span>
                    ({item.wins}승 {item.losses}패)
                  </span>
                  <Kda
                    kills={item.kills}
                    assists={item.assists}
                    deaths={item.deaths}
                    games={item.games}
                    useText={' 평점'}
                  />
                </p>
              </InfoBox>
            </div>
          ) : (
            <div key={`no-content-${index}`}>
              <ThumbBox>
                <span
                  style={{ backgroundImage: `url(${IcoNoChampion})` }}
                ></span>
              </ThumbBox>
              <InfoBox>
                <p className="no-data">챔피언 정보가 없습니다.</p>
              </InfoBox>
            </div>
          );
        })}
    </MatchChampionsLayout>
  );
};

export default Champions;

const MatchChampionsLayout = styled.div`
  flex: 0 0 auto;
  width: 228px;
  height: 100%;
  padding: 16px;
  border-left: 1px solid #cdd2d2;
  box-sizing: border-box;

  > div {
    display: flex;
    justify-content: flex-start;
    align-items: center;

    + div {
      margin-top: 12px;
    }
  }
`;

const ThumbBox = styled.div`
  flex: 0 0 auto;
  margin-right: 8px;

  span {
    display: block;
    width: 34px;
    height: 34px;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: 100% auto;
    border-radius: 50%;
    overflow: hidden;
  }
`;

const InfoBox = styled.div`
  flex: 0 0 auto;

  p {
    font-size: 11px;
    color: #555;

    &.summoner-name {
      margin-bottom: 3px;
      font-size: 14px;
      color: #333;
    }

    &.no-data {
      color: #999;
    }

    > span {
      &::after {
        content: '';
        display: inline-block;
        width: 1px;
        height: 11px;
        margin: 0 6px;
        background-color: #cdd2d2;
      }
    }
  }
`;
