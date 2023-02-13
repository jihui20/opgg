import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import fetchSummoner from 'apis/search';
import Summoner from 'components/summoner/Summoner';
import Layout from 'components/Layout';
import SideLeft from 'components/SideLeft';
import SideRight from 'components/SideRight';

const Main = () => {
  const location = useLocation();
  const searchValue = location?.state?.keyword;
  const [summonerData, setSummonerData] = useState({});

  useEffect(() => {
    if (searchValue) {
      async function getSummonerData() {
        const result = await fetchSummoner(searchValue);

        setSummonerData(result);
      }

      getSummonerData();
    }
  }, [searchValue]);

  return (
    <Layout>
      {Object.keys(summonerData).length !== 0 ? (
        <>
          <Summoner summonerData={summonerData} />
          <MainSection>
            <InnerLayout>
              <SideLeft leaguesData={summonerData.leagues} />
              <SideRight />
            </InnerLayout>
          </MainSection>
        </>
      ) : (
        <p>검색한 소환사가 없습니다.</p>
      )}
    </Layout>
  );
};

export default Main;

const MainSection = styled.section`
  width: 100%;
`;

const InnerLayout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
`;
