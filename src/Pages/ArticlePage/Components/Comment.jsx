import { useContext, useState } from 'react';

import { AuthContext } from 'App';
import { getProfile } from 'Utils';
import { ReactionService } from 'Network';
import dayjs from 'dayjs';

import { FavoriteBorder } from '@mui/icons-material';
import FavoriteIcon from '@mui/icons-material/Favorite';

import Styled from '../ArticlePage.styled';

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
      <div className="comment_div">
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
        <Styled.CommentContent className="content" liked_count={likeCount}>
          <div className="text">{comment.content}</div>
          <span
            className="liked_count"
            onClick={() => handleClickLike(comment?.id)}
          >
            {isLike ? <FavoriteIcon /> : <FavoriteBorder />}
          </span>
        </Styled.CommentContent>
      </div>
    </>
  );
};

export default Comment;
