import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { currentSearchState } from 'store/currentSearch';
import fetchSummonerMostInfo from 'apis/winningRate';
import Tab from './Tab';
import Champion from './Champion';
import Week from './Week';

const WinningRate = () => {
  const isSearchState = useRecoilValue(currentSearchState);
  const [isRateData, setIsRateData] = useState({});
  const [isActiveTab, setIsActiveTab] = useState('CHAMPION');

  const getActiveTab = (target) => {
    setIsActiveTab(target);
  };

  useEffect(() => {
    async function getSummonerData() {
      const result = await fetchSummonerMostInfo(isSearchState);

      setIsRateData(result);
    }
    getSummonerData();
  }, [isSearchState]);

  return (
    <WinningRateLayout>
      <Tab isActiveTab={isActiveTab} getActiveTab={getActiveTab} />
      {isActiveTab === 'CHAMPION' ? (
        <Champion champions={isRateData.champions} />
      ) : (
        <Week recentWinRate={isRateData.recentWinRate} />
      )}
    </WinningRateLayout>
  );
};

export default WinningRate;

const WinningRateLayout = styled.div`
  border: 1px solid #cdd2d2;
`;
