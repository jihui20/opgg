import { useEffect, useState } from 'react';
import styled from 'styled-components';

const Champion = ({ champions }) => {
  const [isFilterRateData, setIsFilterRateData] = useState([]);

  const getMathRound = (value, standard) => {
    return Math.round((value / standard) * 10) / 10;
  };

  const getRating = (kills, assists, deaths, games) => {
    const killsAverage = getMathRound(kills, games);
    const assistsAverage = getMathRound(assists, games);
    const deathsAverage = getMathRound(deaths, games);

    return (killsAverage + assistsAverage / deathsAverage).toFixed(2);
  };

  const getAverage = (kills, assists, deaths, games) => {
    const killsAverage = getMathRound(kills, games);
    const assistsAverage = getMathRound(assists, games);
    const deathsAverage = getMathRound(deaths, games);

    return `${killsAverage} / ${assistsAverage} / ${deathsAverage}`;
  };

  const getWinningRate = (wins, games) => {
    return Math.floor((wins / games) * 100);
  };

  useEffect(() => {
    if (champions?.length > 0) {
      const result = champions.sort(function (a, b) {
        return b.games - a.games;
      });

      setIsFilterRateData(result);
    }
  }, [champions]);

  return (
    <ChampionList>
      {isFilterRateData?.length > 0 ? (
        isFilterRateData.map((item, index) => {
          return (
            <li key={`${item.name}-${index}`}>
              <SummonerThumb>
                <img src={item.imageUrl} alt={item.name} />
                <p>
                  {item.name}
                  <span>CS {item.cs} (2.4)</span>
                </p>
              </SummonerThumb>
              <SummonerInfo>
                <p>
                  {getRating(item.kills, item.assists, item.deaths, item.games)}
                  :1 평점
                  <span>
                    {getAverage(
                      item.kills,
                      item.assists,
                      item.deaths,
                      item.games
                    )}
                  </span>
                </p>
                <p>
                  {getWinningRate(item.wins, item.games)}%
                  <span>{item.games}게임</span>
                </p>
              </SummonerInfo>
            </li>
          );
        })
      ) : (
        <p>없음</p>
      )}
    </ChampionList>
  );
};

export default Champion;

const ChampionList = styled.ul`
  background-color: #ededed;

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4px 15px;

    + li {
      border-top: 1px solid #cdd2d2;
    }
  }
`;

const SummonerThumb = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex: 0 0 50%;
  width: 100px;

  img {
    flex: 0 0 45px;
    width: 45px;
    height: 45px;
    background-color: #ddd;
    border-radius: 50%;
  }

  p {
    flex: 0 0 60%;
    margin-left: 10px;
    font-weight: 800;
    font-size: 13px;
    color: #5e5e5e;
    white-space: nowrap;
    text-overflow: ellipsis;
    word-break: break-all;
    overflow: hidden;

    span {
      display: block;
      padding-top: 3px;
      font-weight: 500;
      font-size: 11px;
      color: #879292;
    }
  }
`;

const SummonerInfo = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex: 0 0 50%;

  p {
    flex: 0 0 auto;
    font-weight: 800;
    font-size: 13px;
    color: #5e5e5e;
    text-align: center;

    span {
      display: block;
      padding-top: 3px;
      font-weight: 500;
      font-size: 11px;
      color: #879292;
    }
  }
`;
