import { FavoriteBorder, SmsOutlined } from '@mui/icons-material';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserService from '../../../Network/UserService';
import { PreviewArticle, Footer } from '../../../Components';

import Styled from './LikedArticle.styled';

const LikedArticle = () => {
  const navigate = useNavigate();
  const [articles, setArticles] = useState();

  const handleClickArticle = id => {
    navigate(`/article/${id}`);
  };

  useEffect(() => {
    const fetchLikeArticles = async () => {
      const data = await UserService.getLikeArticles();
      setArticles(data.map(data => data.article));
    };

    fetchLikeArticles();
  }, []);
  if (!articles) return <></>;
  console.log(articles);
  return (
    <>
      <Styled.LikedArticlesDiv>
        {articles &&
          articles.map(
            article =>
              article.category &&
              article.category.name && (
                <PreviewArticle
                  key={article.id}
                  article={article}
                  onClickArticle={() => handleClickArticle(article.id)}
                />
              ),
          )}
      </Styled.LikedArticlesDiv>
      <Footer />
    </>
  );
};

export default LikedArticle;
