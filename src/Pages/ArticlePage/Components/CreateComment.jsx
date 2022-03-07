import { useRef } from 'react';

import useInput from './useInput';
import { useArticle, useComments, useCreateComment } from './hooks';

import Fab from '@mui/material/Fab';
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';

import Styled from '../ArticlePage.styled';

const CreateComment = ({ articleId }) => {
  const [input, handleChange, reset] = useInput();
  const lastComment = useRef();
  const createComment = useCreateComment(input, articleId, lastComment);

  const handleClickSubmit = e => {
    e.preventDefault();
    createComment.mutate();
    reset();
  };
  return (
    <>
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
    </>
  );
};

export default CreateComment;
