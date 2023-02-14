import axios from 'axios';
import * as config from '../../common/config';

const fetchSummonerMostInfo = async (summonerName) => {
  const apiData = await axios
    .get(`${config.API_URL}/${summonerName}/mostInfo`)
    .then((response) => {
      const { data } = response;

      return data;
    })
    .catch(() => {
      alert(config.MESSAGE['common-error']);
    });

  return apiData;
};

export default fetchSummonerMostInfo;
