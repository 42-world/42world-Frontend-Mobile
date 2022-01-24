import * as API from './APIType';
import axios from 'axios';

const bestUrl = path => {
  return `${API.url('/best')}${path}`;
};

const reactiontUrl = path => {
  return `${API.url('/reaction')}${path}`;
};

const DefaultService = {
  best: {
    /**
     *
     * @returns
     */
    getAuth: async () => {
      const method = 'POST';
      const url = bestUrl('/github');

      let response;
      try {
        response = await axios({
          method,
          url,
        });
      } catch (error) {
        return error;
      }
      return response;
    },
  },
  reaction: {
    /**
     * **GET** User Auth
     * @returns
     * `200` : success \
     * `other` : fail
     */
    getAuth: async () => {
      const method = 'GET';
      const url = reactiontUrl('/github');
      console.log(url);

      let response;
      try {
        response = await axios({
          method,
          url,
        });
      } catch (error) {
        return error;
      }
      return response;
    },
  },
};

export default DefaultService;