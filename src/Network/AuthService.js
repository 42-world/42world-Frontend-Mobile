import * as API from './APIType';
import axios from 'axios';

const authUrl = (path) => {
  return `${API.url('/auth')}path`;
};

const AuthService = {
  github: async () => {
    const method = 'GET';
    const url = authUrl('/github');

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
  githubCallback: async () => {
    const method = 'GET';
    const url = API.url('/github/callback');

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
  signout: async () => {
    const method = 'GET';
    const url = API.url('/signout');

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
