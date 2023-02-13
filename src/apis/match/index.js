import axios from 'axios';
import * as config from '../../common/config';

//summoner/{summonerName}/matches
const fetchSummonerMatchList = async (trimValue) => {
  const apiData = await axios
    .get(`${config.API_URL}/${trimValue}/matches`)
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
