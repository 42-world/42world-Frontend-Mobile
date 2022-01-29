import { FavoriteBorder, SmsOutlined } from '@mui/icons-material';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserService from '../../../Network/UserService';

import Styled from './MyComment.styled';

const MyComment = () => {
  const navi = useNavigate();
  const [comments, setComments] = useState([]);
  const handleClick = articleId => {
    navi(`/article/${articleId}`, { state: articleId });
  };
  useEffect(() => {
    const fetch = async () => {
      const data = await UserService.getMyComments();
      setComments(data);
    };

    fetch();
  }, []);
  return (
    <>
      <Styled.MyCommentsDiv>
        {comments.map(
          (comment, idx) =>
            comment.article && (
              <Styled.MyCommentDiv
                key={idx}
                onClick={() => handleClick(comment.article.id)}
              >
                {/* 내가 쓴 댓글의 게시글의 카테고리 */}
                <span className="article_board">
                  {comment.article.category.name}
                </span>
                {/* 내가 쓴 댓글의 게시글의 제목 */}
                <span className="article_title">{comment.article.title}</span>
                {/* 내가 쓴 댓글 내용 */}
                <span>{comment.content}</span>
              </Styled.MyCommentDiv>
            ),
        )}
      </Styled.MyCommentsDiv>
    </>
  );
};

export default MyComment;
