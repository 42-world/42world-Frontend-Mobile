import { FavoriteBorder, SmsOutlined } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

import Styled from './LikedArticle.styled';

const LikedArticle = () => {
  const navigate = useNavigate();
  const articles = [
    {
      id: 0,
      title: '제목',
      content: '글 내용',
      viewCount: 0,
      categoryId: 0,
      category: {
        id: 0,
        name: 'string',
        createdAt: '2022-01-25T13:39:46.985Z',
        updatedAt: '2022-01-25T13:39:46.985Z',
        deletedAt: '2022-01-25T13:39:46.985Z',
      },
      writerId: 0,
      writer: {
        id: 0,
        nickname: 'string',
        oauthToken: 'string',
        isAuthenticated: true,
        lastLogin: '2022-01-25T13:39:46.985Z',
        role: 'NOVICE',
        character: 5,
        createdAt: '2022-01-25T13:39:46.985Z',
        updatedAt: '2022-01-25T13:39:46.985Z',
        deletedAt: '2022-01-25T13:39:46.985Z',
      },
      commentCount: 0,
      likeCount: 0,
      createdAt: '2022-01-25T13:39:46.985Z',
      updatedAt: '2022-01-25T13:39:46.985Z',
      deletedAt: '2022-01-25T13:39:46.985Z',
    },
  ];
  const handleClick = id => {
    navigate(`/article/${id}`);
  };
  return (
    <>
      <Styled.LikedArticlesDiv>
        {articles &&
          articles.map((article, idx) => (
            <Styled.LikedArticleDiv
              key={idx}
              article={article}
              onClick={() => handleClick(article.id)}
            >
              <span className="article_board">{article.category.name}</span>
              <span className="article_title">{article.title}</span>
              <div className="favorite_icon">
                <FavoriteBorder />
              </div>
              <div className="comment_icon">
                <SmsOutlined />
              </div>
            </Styled.LikedArticleDiv>
          ))}
      </Styled.LikedArticlesDiv>
    </>
  );
};

export default LikedArticle;
