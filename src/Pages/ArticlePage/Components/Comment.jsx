import React, { useContext, useState } from 'react';
import ReactionService from 'Network/ReactionService';
import Styled from '../ArticlePage.styled';
import { FavoriteBorder } from '@mui/icons-material';
import FavoriteIcon from '@mui/icons-material/Favorite';

import dayjs from 'dayjs';
import { getProfileImg } from 'Utils/profileList';

const Comment = ({
  curUser,
  articleId,
  comment,
  isLikeInitial,
  likeCountInitial,
}) => {
  const [isLike, setIsLike] = useState(isLikeInitial);
  const [likeCount, setLikeCount] = useState(likeCountInitial);

  const getArticleTime = time =>
    dayjs(time).isSame(dayjs(), 'day')
      ? dayjs(time).format('HH:mm')
      : dayjs(time).format('MM/DD');

  const handleClickLike = async id => {
    const res = await ReactionService.createCommentReactionHeart(articleId, id);

    setIsLike(res.isLike);
    setLikeCount(res.likeCount);
  };
  console.log(curUser, comment.writer.id);
  return (
    <Styled.CommentDiv isMine={curUser.id === comment.writer.id}>
      <div className="info">
        <Styled.ProfileImage
          width="2.4rem"
          src={getProfileImg(comment?.writer?.character)}
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
          <button className="delete_button">삭제</button>
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
