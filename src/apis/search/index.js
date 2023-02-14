import axios from 'axios';
import * as config from '../../common/config';

const fetchSummoner = async (summonerName) => {
  const apiData = await axios
    .get(`${config.API_URL}/${summonerName}`)
    .then((response) => {
      const { summoner } = response.data;

      return summoner;
    })
    .catch(() => {
      alert(config.MESSAGE['common-error']);
    });

  return apiData;
};

export default fetchSummoner;
