import * as API from './APIType';
import axios from 'axios';

const commentUrl = path => {
  return `${API.url('/comments')}${path}`;
};

const CommentService = {
  /**
   * **CREATE** Comments
   * @param {{content: string,articleId: number}} newComments
   * @returns {Promise<[{
   * id: number,
   * content: string,
   * articleId: number,
   * writerId: number,
   * writer: {
   * id: number,
   * nickname: string,
   * oauthToken: string,
   * isAuthenticated: true,
   * lastLogin: Date,
   * role: CADET,
   * character: 5,
   * deletedAt: Date,
   * createdAt: Date,
   * updatedAt: Date},
   * deletedAt: Date,
   * createdAt: Date,
   * updatedAt: Date}]>}
   * comments
   * `200` : success
   * `401` : fail
   */
  createComments: async newComments => {
    const method = 'POST';
    const url = commentUrl('');
    const body = newComments;

    let response;
    try {
      response = await axios({
        method,
        data: body,
        url,
        withCredentials: true,
      });
    } catch (error) {
      alert(error);
    }
    return response.data; // 응답에 writer 객체의 nickname이 안넘어옴.
  },
  /**
   * **UPDATE** Comments with Comments ID
   * @param {string} commentsId
   * @param {{content: string}} updateComments
   * @returns {{
   * id: number,
   * content: string,
   * articleId: number,
   * writerId: number,
   * writer: {
   * id: number,
   * nickname: string,
   * oauthToken: string,
   * isAuthenticated: true,
   * lastLogin: Date,
   * role: CADET,
   * character: 5,
   * deletedAt: Date,
   * createdAt: Date,
   * updatedAt: Date},
   * deletedAt: Date,
   * createdAt: Date,
   * updatedAt: Date}}
   * comments
   * `200` : success
   * `401` : fail
   */
  updateComments: async (updateComments, commentsId) => {
    const method = 'PUT';
    const url = commentUrl(`/${commentsId}`);
    const body = updateComments;

    let response;
    try {
      response = await axios({
        method,
        body,
        url,
        withCredentials: true,
      });
    } catch (error) {
      alert(error);
    }
    return response.data;
  },
  /**
   * **DELETE** Comments with Comments ID
   * @param {string} commentsId
   * @returns
   * `200` : success
   * `401` : fail
   */
  deleteComments: async commentsId => {
    const method = 'DELETE';
    const url = commentUrl(`/${commentsId}`);

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

export default CommentService;
