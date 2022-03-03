import axios from 'axios';
import * as API from './APIType';

const imageUrl = () => {
  return `${API.url('/image')}`;
};

const ImageService = {
  getUploadUrl: async () => {
    try {
      const method = 'POSt';
      const url = imageUrl();

      const { data } = await API.AXIOS({
        method,
        url,
      });
      const { uploadUrl } = data;
      return uploadUrl;
    } catch (err) {
      console.log('Error: ', err);
      console.error(err);
    }
  },

  uploadImage: async image => {
    try {
      const method = 'PUT';
      const uploadUrl = await ImageService.getUploadUrl();

      //const array = await image.arrayBuffer();
      //console.log(array);

      //const blobData = new Blob([new Uint8Array(array)], {
      //  // type: `image/${imageType}`, // type이 jpeg, png 둘중 어떤걸로 올려도 png로 올라감, 안적어줘도 마찬가지
      //});

      const blobData = image;
      console.log('upload url', uploadUrl);

      await axios.put(uploadUrl, blobData); // 이미지 업로드

      return uploadUrl.split('?')[0];
    } catch (err) {
      console.log('Error: ', err);
      console.error(err);
    }
  },
};

export default ImageService;
