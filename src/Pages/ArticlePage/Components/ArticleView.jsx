import { Viewer } from '@toast-ui/react-editor';

import { FavoriteBorder } from '@mui/icons-material';
import FavoriteIcon from '@mui/icons-material/Favorite';

import GlobalStyled from 'Styled/Global.styled';
import Styled from '../ArticlePage.styled';

const ArticleView = ({
  handleClickCategory,
  category,
  title,
  writer,
  time,
  viewCount,
  isModifiable,
  handleClickEdit,
  handleClickDelete,
  profileSrc,
  content,
  isReactionPossible,
  likeCount,
  handleClickLike,
  isLike,
}) => {
  return (
    <Styled.ArticleViewDiv>
      <GlobalStyled.BoardTitleDiv onClick={handleClickCategory}>
        <div className="board_name">{category}</div>
      </GlobalStyled.BoardTitleDiv>
      <div className="content_top">
        <div className="title">
          <h1>{title}</h1>
          <div className="info">
            <h2>{writer}</h2>
            <h2>{time}</h2>
            <h2>조회수 {viewCount}</h2>
            {isModifiable && (
              <div className="edit_article">
                <button onClick={handleClickEdit}>수정</button>
                <button onClick={handleClickDelete}>삭제</button>
              </div>
            )}
          </div>
        </div>
        <Styled.ProfileImage
          width="2.5rem"
          src={profileSrc}
        ></Styled.ProfileImage>
      </div>
      <Viewer initialValue={content} />
      {isReactionPossible && (
        <Styled.ArticleReactionDiv likedCount={likeCount}>
          <span onClick={handleClickLike}>
            {isLike ? <FavoriteIcon /> : <FavoriteBorder />}
          </span>
        </Styled.ArticleReactionDiv>
      )}
    </Styled.ArticleViewDiv>
  );
};

export default ArticleView;
