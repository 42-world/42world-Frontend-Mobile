import { FavoriteBorder, SmsOutlined } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

import Styled from './MyComment.styled';

const MyComment = () => {
  const navi = useNavigate();
  const articles = [
    {
      articleId: 1,
      board: '자유게시판',
      title: '내가쓴 댓글1',
    },
    {
      articleId: 2,
      board: '자유게시판',
      title: '내가쓴 댓글2',
    },
    {
      articleId: 3,
      board: '익명게시판',
      title: '내가쓴 댓글3',
    },
  ];
  const handleClick = articleId => {
    navi(`/article/${articleId}`, { state: articleId });
  };
  return (
    <>
      <Styled.MyCommentsDiv>
        {articles.map((article, idx) => (
          <Styled.MyCommentDiv
            key={idx}
            article={article}
            onClick={() => handleClick(article.articleId)}
          >
            <span className="article_board">{article.board}</span>
            <span className="article_title">{article.title}</span>
          </Styled.MyCommentDiv>
        ))}
      </Styled.MyCommentsDiv>
    </>
  );
};

export default MyComment;
