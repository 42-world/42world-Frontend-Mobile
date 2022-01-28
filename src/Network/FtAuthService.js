import * as API from './APIType';
import axios from 'axios';

const ftauthUrl = path => {
  return `${API.url('/ft-auth')}${path}`;
};

const FtAuthService = {
  /**
   * **POST** User FtAuth
   * @param {string} intraId
   * @returns
   * `200` : success \
   * `other` : fail
   */
  createFtAuth: async intraId => {
    const method = 'POST';
    const url = ftauthUrl('');
    const data = { intraId };

    let response;
    try {
      response = await axios({
        method,
        data: data,
        url,
        withCredentials: true,
      });
    } catch (error) {
      alert(error);
    }
    return response.data;
  },
};

export default FtAuthService;
