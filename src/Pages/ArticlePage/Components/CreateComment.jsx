import { useRef } from 'react';

import CreateCommentView from './CreateCommentView';
import useInput from './useInput';
import { useArticle, useComments, useCreateComment } from './hooks';

const CreateComment = ({ articleId }) => {
  const [input, handleChange, reset] = useInput();
  const lastComment = useRef();
  const createComment = useCreateComment(input, articleId, lastComment);

  const handleClickSubmit = e => {
    e.preventDefault();
    createComment.mutate();
    reset();
  };

  const props = {
    handleClickSubmit,
    input,
    handleChange,
    placeholder: '댓글을 입력하세요',
    lastComment,
  };
  return <CreateCommentView {...props} />;
};

export default CreateComment;
