import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { UserService } from 'Network';
import dayjs from 'dayjs';

import { ArrowForwardIos } from '@mui/icons-material';

import Styled from './MyComment.styled';

const MyComment = () => {
  const navi = useNavigate();
  const [comments, setComments] = useState([]);
  const handleClick = articleId => {
    navi(`/article/${articleId}`);
  };

  const getCommentTime = time =>
    dayjs(time).isSame(dayjs(), 'day')
      ? dayjs(time).format('HH:mm')
      : dayjs(time).format('MM/DD');

  const previewText = text => {
    const maxLen = 30;
    const previewText =
      text.length > maxLen ? text.substr(0, maxLen) + '...' : text;
    return previewText;
  };

  useEffect(() => {
    // TODO: 나중에 페이지네이션 적용
    const fetchComments = async () => {
      const data = await UserService.getMyComments();
      setComments(data.reverse());
    };

    fetchComments();
  }, []);
  return (
    <Styled.MyCommentsDiv>
      {comments.map(
        (comment, idx) =>
          comment.article && (
            <Styled.MyCommentDiv
              key={idx}
              onClick={() => handleClick(comment.article.id)}
            >
              <div className="top">{getCommentTime(comment.createdAt)}</div>
              <div className="middle">"{previewText(comment.content)}"</div>
              <div className="bottom">
                <div>{comment.article.category.name}</div>
                <div>{comment.article.title}</div>
                <ArrowForwardIos style={{ fontSize: '10px' }} />
              </div>
            </Styled.MyCommentDiv>
          ),
      )}
    </Styled.MyCommentsDiv>
  );
};

export default MyComment;
