import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { currentSearchState } from 'store/currentSearch';
import fetchSummonerMostInfo from 'apis/winningRate';
import Tab from './Tab';
import Champion from './Champion';

const WinningRate = () => {
  const isSearchState = useRecoilValue(currentSearchState);
  const [isRateData, setIsRateData] = useState({});

  useEffect(() => {
    async function getSummonerData() {
      const result = await fetchSummonerMostInfo(isSearchState);

      setIsRateData(result);
    }
    getSummonerData();
  }, []);

  return (
    <WinningRateLayout>
      <Tab />
      <Champion champions={isRateData.champions} />
    </WinningRateLayout>
  );
};

export default WinningRate;

const WinningRateLayout = styled.div`
  border: 1px solid #cdd2d2;
`;
