import * as API from './APIType';
import axios from 'axios';

const authUrl = path => {
  return `${API.url('/auth')}${path}`;
};

const AuthService = {
  /**
   * **GET** User Auth
   * @returns
   * github login url
   */
  getAuthUrl: () => {
    return authUrl('/github');
  },
  /**
   * **GET** User Auth Access Token
   * @returns
   * `200` : success \
   * `other` : fail
   */
  getAuthAccessToken: async code => {
    const method = 'GET';
    const url = authUrl('/github/callback');
    const params = { code };

    let response;
    try {
      response = await axios({
        params,
        method,
        url,
        withCredentials: true,
      });
    } catch (error) {
      alert(error);
    }
    return response.data;
  },
  /**
   * **GET** User Sign Out
   * @returns
   * `200` : success \
   * `other` : fail
   */
  signOut: async () => {
    const method = 'DELETE';
    const url = authUrl('/signout');

    let response;
    try {
      response = await axios({
        method,
        url,
        withCredentials: true,
      });
    } catch (error) {
      alert(error);
    }
    return response.data;
  },
};

export default AuthService;
