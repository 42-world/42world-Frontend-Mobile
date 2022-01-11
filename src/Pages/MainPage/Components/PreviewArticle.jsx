const PreviewArticle = ({ article, handleOnclick }) => {
  const tempNum = 5; //  좋아요, 댓글 수
  return (
    <div className="article" onClick={handleOnclick}>
      {article}
      <img src="assets/like.svg" alt="like" />
      {tempNum}
      <img src="assets/comment.svg" alt="comment" />
      {tempNum}
    </div>
  );
};

export default PreviewArticle;
