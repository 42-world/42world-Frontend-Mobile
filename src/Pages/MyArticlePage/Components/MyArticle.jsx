import { FavoriteBorder, SmsOutlined } from '@mui/icons-material';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Footer, PreviewArticle } from '../../../Components';
import UserService from '../../../Network/UserService';

import Styled from './MyArticle.styled';

const MyArticle = () => {
  const navigate = useNavigate();
  const [articles, setArticles] = useState([]);

  const handleClickArticle = id => {
    navigate(`/article/${id}`);
  };
  useEffect(() => {
    const fetchMyArticles = async () => {
      const data = await UserService.getMyArticles();
      setArticles(data);
    };
    fetchMyArticles();
  }, []);
  return (
    <>
      <Styled.MyArticlesDiv>
        {articles &&
          articles.map(article => (
            <PreviewArticle
              key={article.id}
              article={article}
              onClickArticle={() => handleClickArticle(article.id)}
            />
          ))}
      </Styled.MyArticlesDiv>
      <Footer />
    </>
  );
};

export default MyArticle;
