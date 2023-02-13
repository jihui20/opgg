import { useEffect, useState } from 'react';
import styled from 'styled-components';

const Week = ({ recentWinRate }) => {
  const [isFilterRateData, setIsFilterRateData] = useState([]);
  const getWinningRate = (wins, losses) => {
    return Math.floor((wins / (wins + losses)) * 100);
  };

  useEffect(() => {
    if (recentWinRate?.length > 0) {
      const result = recentWinRate.sort(function (a, b) {
        return b.wins + b.losses - (a.wins + a.losses);
      });

      setIsFilterRateData(result);
    }
  }, [recentWinRate]);

  return (
    <ChampionList>
      {isFilterRateData?.length > 0 ? (
        isFilterRateData.map((item, index) => {
          return (
            <li key={`${item.name}-${index}`}>
              <SummonerThumb>
                <img src={item.imageUrl} alt={item.name} />
                <p>{item.name}</p>
              </SummonerThumb>
              <SummonerInfo>
                <p>{getWinningRate(item.wins, item.losses)}%</p>
                <div className="percentage-progress">
                  <p
                    className="wins"
                    style={{
                      width: getWinningRate(item.wins, item.losses) + '%',
                    }}
                  >
                    <span>{item.wins}승</span>
                  </p>
                  <p
                    className="losses"
                    style={{
                      width: 100 - getWinningRate(item.wins, item.losses) + '%',
                    }}
                  >
                    <span>{item.losses}패</span>
                  </p>
                </div>
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

export default Week;

const ChampionList = styled.ul`
  background-color: #ededed;

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 15px;

    + li {
      border-top: 1px solid #cdd2d2;
    }
  }
`;

const SummonerThumb = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex: 0 0 30%;
  width: 80px;
  margin-right: 5px;

  img {
    flex: 0 0 32px;
    width: 32px;
    height: 32px;
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
  }
`;

const SummonerInfo = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex: 0 0 60%;

  p {
    flex: 0 0 auto;
    font-weight: 800;
    font-size: 13px;
    color: #879292;
    text-align: center;
  }

  .percentage-progress {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 123px;
    height: 25px;
    margin-left: 5px;
    background-color: #fff;
    border-radius: 4px;
    line-height: 25px;
    overflow: hidden;

    p {
      position: relative;
      height: 100%;
      font-weight: 800;
      font-size: 12px;
      color: #fff;

      span {
        position: absolute;
        top: 0;
        bottom: 0;
        margin: auto;
        word-break: keep-all;
        z-index: 1;
      }

      &.wins {
        background-color: #1f8ecd;

        span {
          left: 4px;
        }
      }

      &.losses {
        background-color: #ee5a52;

        span {
          right: 4px;
        }
      }
    }
  }
`;
