import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getAverage } from 'common/calculation';
import Kda from 'components/common/Kda';
import WinningRate from 'components/common/WinningRate';

const Summary = ({ data = {} }) => {
  const { assists, deaths, kills, losses, wins } = data;
  const [totalGames, setTotalGames] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (data && losses && wins) {
      setTotalGames(losses + wins);
      setIsLoading(false);
    }
  }, [data, losses, wins]);

  return (
    !isLoading && (
      <MatchSummaryLayout>
        <p className="wins-losses">
          {totalGames && totalGames}전 {wins}승 {losses}패
        </p>
        <div>
          <ChartBox className="chart">차트</ChartBox>
          <InfoBox>
            <p>
              <span>{getAverage(kills, assists, deaths, totalGames)}</span>
            </p>
            <p>
              <Kda
                kills={kills}
                assists={assists}
                deaths={deaths}
                games={totalGames}
              />{' '}
              (<WinningRate wins={wins} games={totalGames} />)
            </p>
          </InfoBox>
        </div>
      </MatchSummaryLayout>
    )
  );
};

export default Summary;

const MatchSummaryLayout = styled.div`
  flex: 0 0 auto;
  width: 276px;
  height: 100%;
  padding: 16px 24px 23px;
  box-sizing: border-box;

  .wins-losses {
    font-size: 12px;
    color: #666;

    + div {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      margin-top: 4px;
      box-sizing: border-box;
    }
  }
`;

const ChartBox = styled.div`
  flex: 0 0 90px;
  width: 90px;
  height: 90px;
  margin-right: 35px;
  background-color: #000;
`;

const InfoBox = styled.div`
  flex: 0 0 auto;
  text-align: center;

  p {
    color: #999;

    span {
      font-weight: 800;
      color: #333;
    }

    + p {
      margin-top: 6px;
      font-size: 16px;
      color: #202d37;
    }
  }
`;
