import axios from 'axios';

const GetCheckIn = {
  checkInInfo: async () => {
    const method = 'GET';
    const headers = {};
    const body = {};
    const url = 'https://cors.bridged.cc/https://api.checkin.42seoul.io/config';
    let response;
    try {
      response = await axios({
        method,
        headers,
        body,
        url,
        withCredentials: true,
      });
    } catch (error) {
      console.log('error');
    }
    return response;
  },
  curCheckIn: async () => {
    const method = 'GET';

    const url = 'https://api.checkin.42seoul.io/user/using';
    let response;
    try {
      response = await axios({
        method,
        url,
        withCredentials: true,
      });
    } catch (error) {
      console.log('error');
    }
    console.log(response);
    return response;
  },
};

export default GetCheckIn;
