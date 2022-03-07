import { useEffect, useRef, useState } from 'react';
import { useQuery, useMutation, useQueryClient } from 'react-query';

import { ArticleService, CommentService } from 'Network';

import useInput from './useInput';
import { useArticle, useComments, useCreateComment } from './hooks';
import CommentView from './CommentView';
import Fab from '@mui/material/Fab';
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';
import { SmsOutlined } from '@mui/icons-material';

import Styled from '../ArticlePage.styled';

const Comment = ({ articleId, currentUser }) => {
  const lastComment = useRef();
  const queryClient = useQueryClient();
  const [input, handleChange, reset] = useInput();
  const {
    data: { categoryId },
  } = useArticle(articleId);
  const {
    data: { meta, data },
  } = useComments(articleId, 'ASC', 1, 1000);
  const likeComment = useMutation();
  const deleteComment = useMutation();
  const createComment = useCreateComment(input, articleId, lastComment);
  const [comments, setComments] = useState([]);
  const [totalCount, setTotalCount] = useState();

  const handleDeleteComment = commentId => {
    setComments(prev => prev.filter(comment => comment.id !== commentId));
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
    setTotalCount(meta.totalCount);
  };

  const handleClickSubmit = e => {
    e.preventDefault();
    createComment.mutate();
    reset();
  };
  return (
    <div className="comment_list_div">
      <Styled.ArticleCommentDiv
        className="comment_count"
        commentCount={meta.totalCount}
      >
        <SmsOutlined />
      </Styled.ArticleCommentDiv>
      {categoryId !== 3 &&
        data.map(comment => (
          <CommentView
            curUser={currentUser}
            key={comment.id}
            articleId={articleId}
            comment={comment}
            isLikeInitial={comment.isLike}
            likeCountInitial={comment.likeCount}
            onDeleteComment={handleDeleteComment}
          />
        ))}
      <Styled.CreateCommentDiv>
        <form onSubmit={handleClickSubmit}>
          <input
            required
            value={input}
            onChange={handleChange}
            placeholder="댓글을 입력하세요"
          />
          <Fab className="fab_button" type="submit">
            <ArrowUpwardRoundedIcon />
          </Fab>
        </form>
      </Styled.CreateCommentDiv>
      <div ref={lastComment}></div>
    </div>
  );
};

export default Comment;
