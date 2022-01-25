import { FavoriteBorder, SmsOutlined } from '@mui/icons-material';

import Styled from './MyArticle.styled';

const MyArticle = () => {
  const articles = [
    {
      board: '자유게시판',
      title: '내가쓴 글 글제목1',
      liked_count: '1',
      comment_count: '1',
    },
    {
      board: '자유게시판',
      title: '내가쓴 글 글제목2',
      liked_count: '2',
      comment_count: '2',
    },
    {
      board: '익명게시판',
      title: '내가쓴 글 글제목3',
      liked_count: '3',
      comment_count: '3',
    },
  ];
  return (
    <>
      <Styled.MyArticlesDiv>
        {articles.map((article, idx) => (
          <Styled.MyArticleDiv key={idx} article={article}>
            <span className="article_board">{article.board}</span>
            <span className="article_title">{article.title}</span>
            <div className="favorite_icon">
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
