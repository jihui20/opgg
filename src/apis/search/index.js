import axios from 'axios';
import * as config from '../../common/config';

const fetchSummoner = async (trimValue) => {
  const apiData = await axios
    .get(`${config.API_URL}/${trimValue}`)
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
