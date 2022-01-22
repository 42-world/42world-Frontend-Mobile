import * as API from './APIType';
import axios from 'axios';

const userUrl = (path) => {
  return `${API.url('/user')}path`;
};

const UserService = {
  github: async () => {
    const method = 'GET';
    const url = userUrl('');

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

export default UserService;
