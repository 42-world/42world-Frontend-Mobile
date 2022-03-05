import * as API from './APIType';

const articleUrl = path => {
  return `${API.url('/articles')}${path}`;
};

const ArticleService = {
  /**
   * **CREATE** New Articles with Signned User
   * @param {{title: string, content: string,categoryId: number}} newArticles
   * @returns {{
   *    id: number,
   *    title: string,
   *    content: string,
   *    view_count: number,
   *    categoryId: number,
   *    category: {
   *        id: number,
   *        name: string,
   *        createdAt: Date,
   *        updatedAt: Date
   *    },
   *    writerId: number,
   *    writer: {
   *        id: number,
   *        nickname: string,
   *        oauthToken: string,
   *        isAuthenticated: boolean,
   *        lastLogin: Date,
   *        role: CADET,
   *        character: number,
   *        deletedAt: Date,
   *        createdAt: Date,
   *        updatedAt: Date
   *    },
   *    deletedAt: Date,
   *    createdAt: Date,
   *    updatedAt: Date
   * }} articles
   * `200` : success
   * `401` : fail
   */
  createArticles: async newArticles => {
    const method = 'POST';
    const url = articleUrl('');
    const body = newArticles;
    let response;
    try {
      response = await API.AXIOS({
        method,
        data: body,
        url,
      });
    } catch (error) {
      alert(error);
    }
    return response.data;
  },
  /**
   * **GET** All Articles By Categories ID
   * @param {string} categoriesId
   * @returns {Promise<[{
   *    id: number,
   *    title: string,
   *    content: string,
   *    view_count: number,
   *    categoryId: number,
   *    category: {
   *        id: number,
   *        name: string,
   *        createdAt: Date,
   *        updatedAt: Date
   *    },
   *    writerId: number,
   *    writer: {
   *        id: number,
   *        nickname: string,
   *        oauthToken: string,
   *        isAuthenticated: boolean,
   *        lastLogin: Date,
   *        role: CADET,
   *        character: number,
   *        deletedAt: Date,
   *        createdAt: Date,
   *        updatedAt: Date
   *    },
   *    deletedAt: Date,
   *    createdAt: Date,
   *    updatedAt: Date
   * }]>} articles \
   * `200` : success \
   * `401` : fail
   */
  getArticles: async (categoryId, page) => {
    const method = 'GET';
    const url = articleUrl('');
    // const take = 1000;
    const take = 3;
    const params = { categoryId, page, take };

    let response;
    try {
      response = await API.AXIOS({
        params,
        method,
        url,
      });
    } catch (error) {
      alert(error);
    }
    return response.data;
  },
  /**
   * **GET** One Articles By Articles ID
   * @param {string} articlesId
   * @returns {Promise<{
   *    id: number,
   *    title: string,
   *    content: string,
   *    viewCount: number,
   *    categoryId: number,
   *    category: {
   *        id: number,
   *        name: string,
   *        createdAt: Date,
   *        updatedAt: Date
   *    },
   *    writerId: number,
   *    writer: {
   *        id: number,
   *        nickname: string,
   *        oauthToken: string,
   *        isAuthenticated: boolean,
   *        lastLogin: Date,
   *        role: CADET,
   *        character: number,
   *        deletedAt: Date,
   *        createdAt: Date,
   *        updatedAt: Date
   *    },
   *    deletedAt: Date,
   *    createdAt: Date,
   *    updatedAt: Date
   * }>} articles
   * `200` : success
   * `401` : fail
   */
  getArticlesById: async articlesId => {
    const method = 'GET';
    const url = articleUrl(`/${articlesId}`);

    let response;
    try {
      response = await API.AXIOS({
        method,
        url,
      });
    } catch (error) {
      alert(error);
    }
    return response.data;
  },
  /**
   * **UPDATE** One Articles By Articles ID
   * @param {string} articlesId
   * @param {{title: string,content: string,categoryId: number}} newArticles
   * @returns
   * `200` : success
   * `401` : fail
   */
  updateArticles: async (articlesId, newArticles) => {
    const method = 'PUT';
    const url = articleUrl(`/${articlesId}`);
    const body = newArticles;

    let response;
    try {
      response = await API.AXIOS({
        method,
        body,
        url,
      });
    } catch (error) {
      alert(error);
    }
    return response.data;
  },
  /**
   * **DELETE** One Articles By Articles ID
   * @param {string} articlesId
   * @returns
   * `200` : success
   * `401` : fail
   */
  deleteArticles: async articlesId => {
    const method = 'DELETE';
    const url = articleUrl(`/${articlesId}`);

    let response;
    try {
      response = await API.AXIOS({
        method,
        url,
      });
    } catch (error) {
      alert(error);
    }
    return response.data;
  },
  /**
   * **GET** One Articles By Articles ID
   * @param {string} articlesId
   * @returns {Promise<[{
   * id: number,
   * content: string,
   * articleId: number,
   * writerId: number,
   * writer: {
   *    id: number,
   *    nickname: string,
   *    oauthToken: string,
   *    isAuthenticated: boolean,
   *    lastLogin: Date,
   *    role: CADET,
   *    character: number,
   *    deletedAt: Date,
   *    createdAt: Date,
   *    updatedAt: Date
   * },
   * deletedAt: Date,
   * createdAt: Date,
   * updatedAt: Date}]>}
   * `200` : success \
   * `401` : fail
   */
  getArticlesCommentsById: async (articlesId, order, page, take) => {
    const method = 'GET';
    const url = articleUrl(`/${articlesId}/comments`);
    const params = { order, page, take };

    let response;
    try {
      response = await API.AXIOS({
        method,
        url,
        params,
      });
    } catch (error) {
      alert(error);
    }
    return response.data;
  },
  editArticles: async (articlesId, articles) => {
    const method = 'PUT';
    const url = articleUrl(`/${articlesId}`);
    const body = articles;
    let response;
    try {
      response = await API.AXIOS({
        method,
        data: body,
        url,
      });
    } catch (error) {
      alert(error);
    }
    return response.data;
  },
};

export default ArticleService;
