import { useEffect, useState } from 'react';

import ArticleService from '../../../Network/ArticleService';
import CommentService from '../../../Network/CommentService';
import { FavoriteBorder, SmsOutlined } from '@mui/icons-material';
import Styled from '../ArticlePage.styled';
import dayjs from 'dayjs';

const Comment = () => {
  const [comments, setComments] = useState();
  const handleCreateComment = newComment => {
    setComments(comments => comments.concat(newComment));
  };

  useEffect(() => {
    const fetch = async () => {
      const res = await ArticleService.getArticlesCommentsById(articleId);
      setComments(res.data);
    };
    fetch();
  }, []);
  if (!comments) return <></>;
  // articleId로 패칭 fetching
  return (
    <div className="comment_list_div">
      <CreateComment
        articleId={articleId}
        handleCreateComment={handleCreateComment}
      />
      {comments.map((comment, idx) => (
        <div className="comment_div" key={idx}>
          <div className="info">
            <Styled.ProfileImage width="2.4rem" imagePath="" />
            <div className="picture"></div>
            <div className="text">
              <h1>{comment.writer.nickname}</h1>
              <h2>{dayjs(comment.updatedAt).format('MM/DD HH:mm')}</h2>
            </div>
          </div>
          <Styled.CommentContent
            className="content"
            liked_count={comment.liked_count}
          >
            <div className="text">{comment.content}</div>
            <span className="liked_count">
              <FavoriteBorder />
            </span>
          </Styled.CommentContent>
        </div>
      ))}
    </div>
  );
};

const CreateComment = ({ articleId, handleCreateComment }) => {
  const [input, setInput] = useState('');
  const handleChange = e => {
    setInput(e.target.value);
  };
  const handleClickSubmit = async e => {
    e.preventDefault();
    const res = await CommentService.createComments({
      content: input,
      articleId: +articleId,
    });
    if (res.data) {
      console.log(res.data);
      // handleCreateComment(res.data);
    }
  };
  return (
    <form onSubmit={handleClickSubmit}>
      <input value={input} onChange={handleChange} />
      <button type="submit">제출</button>
    </form>
  );
};

export default Comment;
