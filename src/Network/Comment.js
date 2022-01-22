import * as API from './APIType';
import axios from 'axios';

const commentUrl = path => {
  return `${API.url('/comments')}${path}`;
};

const CommentService = {
  /**
   * **CREATE** Comments
   * @param {NewComments} newComments
   * @returns {{[Comments]}} comments \
   * `200` : success \
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
        body,
        url,
      });
    } catch (error) {
      alert(error);
    }
    return response;
  },
  /**
   * **UPDATE** Comments with Comments ID
   * @param {string} commentsId
   * @param {UpdateComments} updateComments
   * @returns {{Comments}} comments \
   * `200` : success \
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
      });
    } catch (error) {
      alert(error);
    }
    return response;
  },
  /**
   * **DELETE** Comments with Comments ID
   * @param {string} commentsId
   * @returns
   * `200` : success \
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
      });
    } catch (error) {
      alert(error);
    }
    return response;
  },
};

export default CommentService;
