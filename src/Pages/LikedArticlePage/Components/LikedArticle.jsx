import { FavoriteBorder, SmsOutlined } from '@mui/icons-material';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserService from 'Network/UserService';
import { PreviewArticle } from 'Components';

import Styled from './LikedArticle.styled';

const LikedArticle = () => {
  const navigate = useNavigate();
  const [articles, setArticles] = useState();

  const handleClickArticle = id => {
    navigate(`/article/${id}`);
  };

  useEffect(() => {
    // TODO: 나중에 페이지네이션 적용
    const fetchLikeArticles = async () => {
      const data = await UserService.getLikeArticles();
      setArticles(data.reverse());
    };

    fetchLikeArticles();
  }, []);
  return (
    <>
      <Styled.LikedArticlesDiv>
        {articles &&
          articles.map(
            article =>
              article && (
                <PreviewArticle
                  key={article.id}
                  article={article}
                  onClickArticle={() => handleClickArticle(article.id)}
                />
              ),
          )}
      </Styled.LikedArticlesDiv>
    </>
  );
};

export default LikedArticle;
