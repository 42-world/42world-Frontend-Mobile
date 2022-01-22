import * as API from './APIType';
import axios from 'axios';

const userUrl = path => {
  return `${API.url('/users')}${path}`;
};

const UserService = {
  /**
   * **GET** Signed in User Information
   * @returns {{User}} user \
   * `200` : success \
   * `401` : fail
   */
  getUser: async () => {
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
  /**
   * **DELETE** Signed in User
   * @returns  user \
   * `200` : success \
   * `401` : fail
   */
  deleteUser: async () => {
    const method = 'DELETE';
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
  /**
   * **GET** User Information by ID
   * @param {string} id
   * @returns {{User}} user
   * `200` : success \
   * `401` : fail
   */
  getUserById: async id => {
    const method = 'GET';
    const url = userUrl(`/profile/${id}`);

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
   * **GET** User Notification
   * @returns {{Notification}} notification
   * `200` : success \
   * `401` : fail
   */
  getNotification: async () => {
    const method = 'GET';
    const url = userUrl('/notification');

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
   * **UPDATE** User Notification Status (read all notification)
   * @returns
   * `200` : success \
   * `401` : fail
   */
  updateNotificationStatus: async () => {
    const method = 'PUT';
    const url = userUrl('/notification/readall');

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
   * **UPDATE** Signed in User Profile
   * @param {UserProfile} body
   * @returns {{User}} user
   * `200` : success \
   * `401` : fail
   */
  updateUser: async changedProfile => {
    const method = 'PUT';
    const url = userUrl('/profile');
    const body = changedProfile;

    let response;
    try {
      response = await axios({
        method,
        body,
        url,
      });
    } catch (error) {
      alert(error);
    }
    return response;
  },
};

export default UserService;
