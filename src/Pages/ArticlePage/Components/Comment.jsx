import React, { useContext, useState } from 'react';
import ReactionService from 'Network/ReactionService';
import Styled from '../ArticlePage.styled';
import { FavoriteBorder } from '@mui/icons-material';
import FavoriteIcon from '@mui/icons-material/Favorite';

import dayjs from 'dayjs';
import { AuthContext } from 'App';
import { getProfileImg } from 'Utils/profileList';

const Comment = ({ articleId, comment, isLikeInitial, likeCountInitial }) => {
  const [isLike, setIsLike] = useState(isLikeInitial);
  const [likeCount, setLikeCount] = useState(likeCountInitial);
  const auth = useContext(AuthContext);

  const getArticleTime = time =>
    dayjs(time).isSame(dayjs(), 'day')
      ? dayjs(time).format('HH:mm')
      : dayjs(time).format('MM/DD');

  const handleClickLike = async id => {
    const res = await ReactionService.createCommentReactionHeart(articleId, id);

    setIsLike(res.isLike);
    setLikeCount(res.likeCount);
  };
  return (
    <>
      <div className="comment_div" key={comment?.id}>
        <div className="info">
          <Styled.ProfileImage
            width="2.4rem"
            src={getProfileImg(auth.curUser.character)}
          />
          <div className="picture"></div>
          <div className="text">
            <h1>{comment?.writer?.nickname}</h1>
            <h2>{getArticleTime(comment?.updatedAt)}</h2>
          </div>
        </div>
        <Styled.CommentContent
          onClick={() => handleClickLike(comment?.id)}
          className="content"
          liked_count={likeCount}
        >
          <div className="text">{comment.content}</div>
          <span className="liked_count">
            {isLike ? <FavoriteIcon /> : <FavoriteBorder />}
          </span>
        </Styled.CommentContent>
      </div>
    </>
  );
};

export default Comment;
