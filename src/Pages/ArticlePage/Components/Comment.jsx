import { useState } from 'react';

import { getProfile } from 'Utils';
import { getArticleTime } from 'Utils/dayjsUtils';
import { ReactionService, CommentService } from 'Network';

import { FavoriteBorder } from '@mui/icons-material';
import FavoriteIcon from '@mui/icons-material/Favorite';

import Styled from '../ArticlePage.styled';
const Comment = ({
  curUser,
  articleId,
  comment,
  isLikeInitial,
  likeCountInitial,
  onDeleteComment,
}) => {
  const [isLike, setIsLike] = useState(isLikeInitial);
  const [likeCount, setLikeCount] = useState(likeCountInitial);

  const handleClickLike = async id => {
    const res = await ReactionService.createCommentReactionHeart(articleId, id);

    setIsLike(res.isLike);
    setLikeCount(res.likeCount);
  };

  const handleClickDelete = async commentId => {
    await CommentService.deleteComments(commentId);
    onDeleteComment(commentId);
  };
  return (
    <Styled.CommentDiv isMine={curUser.id === comment.writer.id}>
      <div className="info">
        <Styled.ProfileImage
          width="2.4rem"
          src={getProfile.findProfileById(comment?.writer?.character)}
        />
        <div className="picture"></div>
        <div className="text">
          <h1>{comment?.writer?.nickname}</h1>
          <h2>{getArticleTime(comment?.updatedAt)}</h2>
        </div>
      </div>
      <Styled.CommentContent
        liked_count={likeCount}
        isMine={curUser.id === comment.writer.id}
      >
        <div className="text">{comment.content}</div>
        {curUser.id === comment.writer.id ? (
          <button
            className="delete_button"
            onClick={() => handleClickDelete(comment.id)}
          >
            삭제
          </button>
        ) : (
          <span
            className="liked_count"
            onClick={() => handleClickLike(comment?.id)}
          >
            {isLike ? <FavoriteIcon /> : <FavoriteBorder />}
          </span>
        )}
      </Styled.CommentContent>
    </Styled.CommentDiv>
  );
};

export default Comment;
