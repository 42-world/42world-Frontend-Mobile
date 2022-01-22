// # 댓글 /comments

// - 쓰기 POST /comments/:id
// - 수정하기 PUT /comments/:id
// - 삭제하기 DELETE /comments/:id

const generateRandomComment = () => {
  const id = 1;
  const article_id = 1;
  const writer_id = 1;
  const content = "this is comment";

  return new Comment(id, article_id, writer_id, content);
};

const CommentService = {
  createComment: (article_id, writer_id, content) => {
    return generateRandomComment();
  },
  updateComment: (id) => {
    return true;
  },
  deleteComment: (id) => {
    return true;
  },
};

export default CommentService;
