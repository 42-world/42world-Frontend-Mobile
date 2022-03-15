import React from 'react';

import { FavoriteBorder } from '@mui/icons-material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CloseIcon from '@mui/icons-material/Close';

import Styled from '../ArticlePage.styled';

const CommentView = ({
  isMine,
  profileSrc,
  writer,
  time,
  likeCount,
  content,
  handleClickDelete,
  handleClickLike,
  isLike,
}) => {
  return (
    <Styled.CommentViewDiv isMine={isMine}>
      <div className="info">
        <Styled.ProfileImage width="2.4rem" src={profileSrc} />
        <div className="picture"></div>
        <div className="text">
          <h1>{writer}</h1>
          <h2>
            {time}
            {isMine && (
              <button className="delete_button" onClick={handleClickDelete}>
                <CloseIcon />
              </button>
            )}
          </h2>
        </div>
      </div>
      <Styled.CommentContent liked_count={likeCount} isMine={isMine}>
        <div className="text">{content}</div>
        <span className="liked_count" onClick={handleClickLike}>
          {isLike ? <FavoriteIcon /> : <FavoriteBorder />}
        </span>
      </Styled.CommentContent>
    </Styled.CommentViewDiv>
  );
};

export default React.memo(CommentView);
