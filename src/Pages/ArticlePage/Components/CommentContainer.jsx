import { useEffect, useRef, useState } from 'react';

import Fab from '@mui/material/Fab';
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';

import ArticleService from '../../../Network/ArticleService';
import CommentService from '../../../Network/CommentService';
import { SmsOutlined } from '@mui/icons-material';
import Styled from '../ArticlePage.styled';
import Comment from './Comment';

const CommentContainer = ({ articleId }) => {
  const lastComment = useRef();
  const [comments, setComments] = useState([]);
  const [totalCount, setTotalCount] = useState();

  const handleCreateComment = newComment => {
    setComments(prev => prev.concat(newComment));
    lastComment.current.scrollIntoView();
    fetchComment();
  };

  const fetchComment = async () => {
    const res = await ArticleService.getArticlesCommentsById(
      articleId,
      'ASC',
      1,
      1000, // 한번에 1000개 긁어옴. 어떻게 할 지 결정 후 바꿔야 함.
    );
    setComments(res?.data || []);
    setTotalCount(res?.meta.totalCount);
  };

  useEffect(() => {
    fetchComment();
  }, []);

  return (
    <div className="comment_list_div">
      <Styled.ArticleCommentDiv
        className="comment_count"
        commentCount={totalCount}
      >
        <SmsOutlined />
      </Styled.ArticleCommentDiv>
      {comments &&
        comments.map(comment => (
          <Comment
            key={comment.id}
            articleId={articleId}
            comment={comment}
            isLikeInitial={comment.isLike}
            likeCountInitial={comment.likeCount}
          />
        ))}
      <Styled.CreateCommentDiv>
        <CreateComment
          articleId={articleId}
          handleCreateComment={handleCreateComment}
        />
      </Styled.CreateCommentDiv>
      <div ref={lastComment}></div>
    </div>
  );
};

const CreateComment = ({ articleId, handleCreateComment }) => {
  const [input, setInput] = useState('');
  const handleChange = e => {
    if (e.target.value.length < 420) {
      setInput(e.target.value);
    }
  };
  const handleClickSubmit = async e => {
    e.preventDefault();
    if (input === '') {
      return;
    }

    const res = await CommentService.createComments({
      content: input,
      articleId: +articleId,
    });
    if (res) {
      handleCreateComment(res);
      setInput('');
    }
  };
  return (
    <form onSubmit={handleClickSubmit}>
      <input
        value={input}
        onChange={handleChange}
        placeholder="댓글을 입력하세요"
      />
      <Fab className="fab_button" type="submit">
        <ArrowUpwardRoundedIcon />
      </Fab>
    </form>
  );
};

export default CommentContainer;
