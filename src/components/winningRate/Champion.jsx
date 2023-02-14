import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getAverage } from 'common/calculation';
import Kda from 'components/common/Kda';
import WinningRate from 'components/common/WinningRate';

const Champion = ({ champions }) => {
  const [isFilterRateData, setIsFilterRateData] = useState([]);

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
                  <Kda
                    kills={item.kills}
                    assists={item.assists}
                    deaths={item.deaths}
                    games={item.games}
                    useText={':1 평점'}
                  />
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
                  <WinningRate wins={item.wins} games={item.games} />
                  <span>{item.games}게임</span>
                </p>
              </SummonerInfo>
            </li>
          );
        })
      ) : (
        <p className="no-match">기록된 전적이 없습니다.</p>
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

  p.no-match {
    padding: 20px 0;
    font-size: 15px;
    color: #9aa4af;
    text-align: center;
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
