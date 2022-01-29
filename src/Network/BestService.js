import * as API from './APIType';

const bestUrl = path => {
  return `${API.url('/best')}${path}`;
};

const BestService = {
  /**
   *
   * @returns {Promise<[{
   * id: number,
   * articleId: number,
   * article: Article,
   * createAt: Date,
   * updateAt: Date,
   * }]>}
   */
  getBestArticle: async () => {
    const method = 'GET';
    const url = bestUrl('');
    let response;
    try {
      response = await API.AXIOS({
        method,
        url,
      });
    } catch (error) {
      console.log('error');
    }
    return response.data;
  },
};

export default BestService;
