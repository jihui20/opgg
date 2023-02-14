import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { currentSearchState } from 'store/currentSearch';
import fetchSummonerMatchList from 'apis/match';
import Tab from './match/Tab';
import List from './match/list/List';

const SideRight = () => {
  const isSearchState = useRecoilValue(currentSearchState);
  const [isMatchListData, setIsMatchListData] = useState({});
  // total, soloranked, flexranked
  const [isActiveTab, setIsActiveTab] = useState('total');

  const getActiveTab = (target) => {
    setIsActiveTab(target);
  };

  useEffect(() => {
    async function getSummonerMathListData() {
      const result = await fetchSummonerMatchList(isSearchState, isActiveTab);

      setIsMatchListData(result);
    }
    getSummonerMathListData();
  }, [isSearchState, isActiveTab]);

  return (
    <SideRightLayout>
      <Tab isActiveTab={isActiveTab} getActiveTab={getActiveTab} />
      <List isMatchListData={isMatchListData} />
    </SideRightLayout>
  );
};

export default SideRight;

const SideRightLayout = styled.div`
  flex: 0 0 690px;
`;
