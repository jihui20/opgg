import { useState } from 'react';
import styled from 'styled-components';
import Rank from './rank/Rank';

const SideLeft = () => {
  const [soloRank, setSoloRank] = useState({
    title: '솔로 랭크',
    position: '탑',
    totalGame: 27,
    rank: 'Platinum 2',
    lp: 80,
    win: 28,
    lose: 30,
    winningRate: 51,
  });

  const [freeRank, setFreeRank] = useState({
    title: '자유 5:5 랭크',
    position: '',
    totalGame: 0,
    rank: '',
    lp: 0,
    win: 0,
    lose: 0,
    winningRate: 0,
  });

  return (
    <SideLeftLayout>
      <Rank data={soloRank} />
      <Rank data={freeRank} />
    </SideLeftLayout>
  );
};

export default SideLeft;

const SideLeftLayout = styled.div`
  flex: 0 0 300px;
`;
