import * as API from './APIType';
import axios from 'axios';

const categoryUrl = path => {
  return `${API.url('/categories')}${path}`;
};

const CategoryService = {
  /**
   * **GET** All Category Type
   * @returns {[{ \
   * id: number, \
   * name: string, \
   * createdAt: Date, \
   * updatedAt: Date}]}
   * category \
   * `200` : success \
   * `401` : fail
   */
  getCategories: async () => {
    const method = 'GET';
    const url = categoryUrl('');

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

export default CategoryService;
