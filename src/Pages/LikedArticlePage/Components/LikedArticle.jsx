import { FavoriteBorder, SmsOutlined } from '@mui/icons-material';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserService from '../../../Network/UserService';

import Styled from './LikedArticle.styled';

const LikedArticle = () => {
  const navigate = useNavigate();
  const [articles, setArticles] = useState();

  const handleClick = id => {
    navigate(`/article/${id}`);
  };

  useEffect(() => {
    const fetch = async () => {
      const data = await UserService.getLikeArticles();
      setArticles(data.map(data => data.article));
    };

    fetch();
  }, []);
  if (!articles) return <></>;
  return (
    <>
      <Styled.LikedArticlesDiv>
        {articles &&
          articles.map(
            (article, idx) =>
              article.category &&
              article.category.name && (
                <Styled.LikedArticleDiv
                  key={idx}
                  article={article}
                  onClick={() => handleClick(article.id)}
                >
                  <span className="article_board">{article.category.name}</span>
                  <span className="article_title">{article.title}</span>
                  <div className="liked_icon">
                    <FavoriteBorder />
                  </div>
                  <div className="comment_icon">
                    <SmsOutlined />
                  </div>
                </Styled.LikedArticleDiv>
              ),
          )}
      </Styled.LikedArticlesDiv>
    </>
  );
};

export default LikedArticle;
