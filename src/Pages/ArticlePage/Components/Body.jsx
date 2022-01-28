import { FavoriteBorder, SmsOutlined } from '@mui/icons-material';
import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import ArticleService from '../../../Network/ArticleService';
import { AuthContext } from '../../../App';
import GlobalStyled from '../../../Styled/Global.styled';
import dayjs from 'dayjs';

const Body = ({ articleId }) => {
  // articleId로 패칭 fetching
  const [article, setArticle] = useState();
  const navi = useNavigate();
  const handleClickEdit = () => {
    navi(`/article/${articleId}/edit`);
  };
  const handleClickDelete = () => {
    ArticleService.deleteArticles(articleId);
  };
  const { userId } = useContext(AuthContext);
  useEffect(() => {
    const fetch = async () => {
      const res = await ArticleService.getArticlesById(articleId);
      setArticle(res);
    };
    fetch();
  }, []);

  const getArticleTime = time =>
    dayjs(time).isSame(dayjs(), 'day')
      ? dayjs(time).format('HH:mm')
      : dayjs(time).format('MM/DD');

  // 로딩 중 어떻게 처리할지
  if (!article) return <></>;

  return (
    <div className="content_div">
      <GlobalStyled.BoardTitleDiv>
        <div className="board_name">{article.category.name}</div>
      </GlobalStyled.BoardTitleDiv>
      <div className="content_top">
        <div className="title">
          {article.title}
          <div className="info">
            <h2>{article.writer.nickname}</h2>
            <h2>{getArticleTime(article.createdAt)}</h2>
            <h2>조회수 {article.viewCount}</h2>
          </div>
        </div>
        {/* 내가 쓴 글인지 아닌지에 따라 (수정,삭제) 또는 (조회수)  */}
        {article.writer.Id === userId && (
          <div className="">
            <button onClick={handleClickEdit}>수정</button>
            <button onClick={handleClickDelete}>삭제</button>
          </div>
        )}
      </div>
      <div className="content_middle">{article.content}</div>
      <div className="content_bottom">
        <span className="comment_count">
          <SmsOutlined />
        </span>
        <span className="liked_count">
          <FavoriteBorder />
        </span>
      </div>
    </div>
  );
};

export default Body;
