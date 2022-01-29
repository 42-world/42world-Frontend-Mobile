import { FavoriteBorder, SmsOutlined } from '@mui/icons-material';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserService from '../../../Network/UserService';

import Styled from './MyArticle.styled';

const MyArticle = () => {
  const navigate = useNavigate();
  const [articles, setArticles] = useState([]);

  const handleClick = id => {
    navigate(`/article/${id}`);
  };
  useEffect(() => {
    const fetch = async () => {
      const data = await UserService.getMyArticles();
      setArticles(data);
    };
    fetch();
  }, []);
  return (
    <>
      <Styled.MyArticlesDiv>
        {articles.map((article, idx) => (
          <Styled.MyArticleDiv
            key={idx}
            article={article}
            onClick={() => handleClick(article.id)}
          >
            <span className="article_board">{article.board}</span>
            <span className="article_title">{article.title}</span>
            <div className="liked_icon">
              <FavoriteBorder />
            </div>
            <div className="comment_icon">
              <SmsOutlined />
            </div>
          </Styled.MyArticleDiv>
        ))}
      </Styled.MyArticlesDiv>
    </>
  );
};

export default MyArticle;
