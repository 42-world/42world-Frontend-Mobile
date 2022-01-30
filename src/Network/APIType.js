import axios from 'axios';

export function url(path) {
  // const version = 'v1'; // process.env.REACT_APP_API_VERSION

  return `https://api.42world.kr${path}`;
  // return `http://localhost:8888${path}`;
}

export function AXIOS(option) {
  return axios({
    ...option,
    withCredentials: true,
  });
}
