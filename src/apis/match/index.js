import axios from 'axios';
import * as config from '../../common/config';

const fetchSummonerMatchList = async (summonerName, gameType) => {
  const apiData = await axios
    .get(`${config.API_URL}/${summonerName}/matches?game_type=${gameType}`)
    .then((response) => {
      const { data } = response;

      return data;
    })
    .catch(() => {
      alert(config.MESSAGE['common-error']);
    });

  return apiData;
};

export default fetchSummonerMatchList;
