import { useEffect, useState } from 'react';
import ArticleService from '../../../Network/ArticleService';
import CommentService from '../../../Network/CommentService';

const Comment = ({ articleId }) => {
  // articleId로 패칭 fetching
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
  return (
    <>
      {/* 글쓰기 버튼처럼 고정된 위치에 떠있게? */}
      <CreateComment
        articleId={articleId}
        handleCreateComment={handleCreateComment}
      />
      <div style={{ background: 'skyblue' }}>
        {comments.map((comment, idx) => (
          <div key={idx}>
            <img src={'#'} />
            <div>{comment.writer.nickname}</div>
            <div>{comment.updatedAt}</div>
            <div>{comment.content}</div>
          </div>
        ))}
      </div>
    </>
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
