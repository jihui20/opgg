import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import fetchSummoner from 'apis/search';
import Summoner from 'components/summoner/Summoner';
import Layout from 'components/Layout';

const Main = () => {
  const location = useLocation();
  const { state: searchValue } = location;
  const [summonerData, setSummonerData] = useState({});

  const getSummonerData = async () => {
    const result = await fetchSummoner(searchValue);

    setSummonerData(result);
  };

  useEffect(() => {
    if (searchValue) {
      getSummonerData();
    }
  }, [searchValue]);

  return (
    <Layout>
      <Summoner summonerData={summonerData} />
    </Layout>
  );
};

export default Main;
