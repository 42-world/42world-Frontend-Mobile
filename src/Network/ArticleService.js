import * as API from './APIType';
import axios from 'axios';

const articleUrl = path => {
  return `${API.url('/articles')}${path}`;
};

const ArticleService = {
  /**
   * **CREATE** New Articles with Signned User
   * @param {NewArticles} newArticles
   * @returns {{Articles}} articles \
   * `200` : success \
   * `401` : fail
   */
  createArticles: async newArticles => {
    const method = 'POST';
    const url = articleUrl('');
    const body = newArticles;

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
   * **GET** All Articles By Categories ID
   * @param {string} categoriesId
   * @returns {{[Articles]}} articles \
   * `200` : success \
   * `401` : fail
   */
  getArticles: async categoriesId => {
    const method = 'GET';
    const url = articleUrl(`${categoriesId}`);

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
   * **GET** One Articles By Articles ID
   * @param {string} articlesId
   * @returns {{Articles}} articles \
   * `200` : success \
   * `401` : fail
   */
  getArticlesById: async articlesId => {
    const method = 'GET';
    const url = articleUrl(`/${articlesId}`);

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
   * **UPDATE** One Articles By Articles ID
   * @param {string} articlesId
   * @param {NewArticles} newArticles
   * @returns {{Articles}} articles \
   * `200` : success \
   * `401` : fail
   */
  updateArticles: async (articlesId, newArticles) => {
    const method = 'PUT';
    const url = articleUrl(`/${articlesId}`);
    const body = newArticles;

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
   * **DELETE** One Articles By Articles ID
   * @param {string} articlesId
   * @returns {{Articles}} articles \
   * `200` : success \
   * `401` : fail
   */
  deleteArticles: async articlesId => {
    const method = 'DELETE';
    const url = articleUrl(`/${articlesId}`);

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
   * **GET** One Articles By Articles ID
   * @param {string} articlesId
   * @returns {{Articles}} articles \
   * `200` : success \
   * `401` : fail
   */
  getArticlesCommentsById: async articlesId => {
    const method = 'GET';
    const url = articleUrl(`/${articlesId}/comments`);

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

export default ArticleService;
