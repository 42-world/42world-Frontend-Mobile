import { FavoriteBorder, SmsOutlined } from '@mui/icons-material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import ArticleService from '../../../Network/ArticleService';
import { AuthContext } from '../../../App';
import GlobalStyled from '../../../Styled/Global.styled';
import dayjs from 'dayjs';
import Styled from '../ArticlePage.styled';
import ReactionService from 'Network/ReactionService';

const Body = ({ articleId, categoryId }) => {
  // articleId로 패칭 fetching
  const [article, setArticle] = useState();
  const [isLike, setIsLike] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const navi = useNavigate();
  const handleClickEdit = () => {
    navi(`/article/${articleId}/edit`);
  };
  const handleClickDelete = () => {
    ArticleService.deleteArticles(articleId);
    // navi(`/category/${categoryId}`);
    navi(-1);
  };
  const { userId } = useContext(AuthContext);
  useEffect(() => {
    const fetch = async () => {
      const res = await ArticleService.getArticlesById(articleId);
      setArticle(res);
      setIsLike(res.isLike);
      setLikeCount(res.likeCount);
    };

    fetch();
  }, []);

  const getArticleTime = time =>
    dayjs(time).isSame(dayjs(), 'day')
      ? dayjs(time).format('HH:mm')
      : dayjs(time).format('MM/DD');

  const handleClickLike = async () => {
    const data = await ReactionService.createArticleReactionHeart(articleId);
    setIsLike(data.isLike);
    setLikeCount(data.likeCount);
  };

  // 로딩 중 어떻게 처리할지
  if (!article) return <></>;

  return (
    <div className="content_div">
      <GlobalStyled.BoardTitleDiv>
        <div className="board_name">{article.category.name}</div>
      </GlobalStyled.BoardTitleDiv>
      <div className="content_top">
        <div className="title">
          <h1>{article.title}</h1>
          <div className="info">
            <h2>{article.writer.nickname}</h2>
            <h2>{getArticleTime(article.createdAt)}</h2>
            <h2>조회수 {article.viewCount}</h2>
            {article.writer.Id === userId && (
              <div className="edit_article">
                <button onClick={handleClickEdit}>수정</button>
                <button onClick={handleClickDelete}>삭제</button>
              </div>
            )}
          </div>
        </div>
        <Styled.ProfileImage width="2.5rem" imagePath=""></Styled.ProfileImage>
      </div>
      <div className="content_middle">{article.content}</div>
      <div className="content_bottom">
        <Styled.ArticleLikedDiv
          onClick={handleClickLike}
          likedCount={likeCount || 0}
        >
          {isLike ? <FavoriteIcon /> : <FavoriteBorder />}
        </Styled.ArticleLikedDiv>
      </div>
    </div>
  );
};

export default Body;
