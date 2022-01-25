import * as API from './APIType';
import axios from 'axios';

const authUrl = path => {
  return `${API.url('/auth')}${path}`;
};

const AuthService = {
  /**
   * **GET** User Auth
   * @returns
   * `200` : success \
   * `other` : fail
   */
  getAuth: async () => {
    const method = 'GET';
    const url = authUrl('/github');

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
  /**
   * **GET** User Auth Access Token
   * @returns
   * `200` : success \
   * `other` : fail
   */
  getAuthAccessToken: async code => {
    const method = 'GET';
    const url = authUrl('/github/callback' + code);

    let response;
    try {
      response = await axios({
        method,
        url,
      });
    } catch (error) {
      alert(error);
    }
    return response;
  },
  /**
   * **GET** User Sign Out
   * @returns
   * `200` : success \
   * `other` : fail
   */
  signOut: async () => {
    const method = 'GET';
    const url = authUrl('/signout');

    let response;
    try {
      response = await axios({
        method,
        url,
      });
    } catch (error) {
      alert(error);
    }
    return response;
  },
};

export default AuthService;
