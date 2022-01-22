import * as API from './APIType';
import axios from 'axios';

// GET
// /users
// 내 정보 가져오기
// DELETE
// /users
// 유저 삭제
// GET
// /users/profile/{id}
// 특정 유저 정보 가져오기
// GET
// /users/notification
// 알람 가져오기
// PUT
// /users/notification/readall
// 알람 다 읽기
// PUT
// /users/profile
// 유저 프로필 변경
// Category


const userUrl = (path) => {
  return `${API.url('/users')}${path}`;
};

const UserService = {
  /**
   * **GET** Signed in User Information
   * @returns {JSON} HTTP Status Code \
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
   * DELETE Signed in User
   * @returns **HTTP Status Code** \
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
   *
   * @param {*} id
   * @returns
   */
  getUserById: async (id) => {
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
   *
   * @returns
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
   *
   * @returns
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
   *
   * @param {*} body
   * @returns
   */
	updateUser: async (body) => {
    const method = 'PUT';
    const url = userUrl('/profile');
    const body = body

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
