import * as API from './APIType';
import axios from 'axios';

const checkInUrl = path => {
  return `${API.url('/ft-checkin')}${path}`;
};

const CheckInService = {
  curCheckInStatus: async () => {
    const method = 'GET';
    const url = checkInUrl('');
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
    return response;
  },
};

export default CheckInService;
