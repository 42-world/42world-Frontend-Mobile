import { FavoriteBorder, SmsOutlined } from '@mui/icons-material';

import Styled from './MyComment.styled';

const MyComment = () => {
  const articles = [
    {
      board: '자유게시판',
      title: '내가쓴 댓글1',
    },
    {
      board: '자유게시판',
      title: '내가쓴 댓글2',
    },
    {
      board: '익명게시판',
      title: '내가쓴 댓글3',
    },
  ];
  return (
    <>
      <Styled.MyCommentsDiv>
        {articles.map((article, idx) => (
          <Styled.MyCommentDiv key={idx} article={article}>
            <span className="article_board">{article.board}</span>
            <span className="article_title">{article.title}</span>
          </Styled.MyCommentDiv>
        ))}
      </Styled.MyCommentsDiv>
    </>
  );
};

export default MyComment;
