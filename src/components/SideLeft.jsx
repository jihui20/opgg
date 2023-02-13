import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Rank from './rank/Rank';
import WinningRate from './winningRate/WinningRate';

const SideLeft = ({ leaguesData }) => {
  const [soloRank, setSoloRank] = useState({});
  const [freeRank, setFreeRank] = useState({});

  useEffect(() => {
    if (leaguesData?.length > 0) {
      setSoloRank(
        leaguesData?.filter((item) => {
          return item.tierRank?.name === '솔랭';
        })
      );

      setFreeRank(
        leaguesData?.filter((item) => {
          return item.tierRank?.name === '자유 5:5 랭크';
        })
      );
    }
  }, []);

  return (
    <SideLeftLayout>
      <Rank data={soloRank} />
      <Rank data={freeRank} />
      <WinningRate />
    </SideLeftLayout>
  );
};

export default SideLeft;

const SideLeftLayout = styled.div`
  flex: 0 0 300px;
`;
