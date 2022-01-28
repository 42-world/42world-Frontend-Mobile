import { FavoriteBorder, SmsOutlined } from '@mui/icons-material';
import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import ArticleService from '../../../Network/ArticleService';
import { AuthContext } from '../../../App';

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
      const response = await ArticleService.getArticlesById(articleId);

      setArticle(response.data);
    };
    fetch();
  }, []);

  // 로딩 중 어떻게 처리할지
  if (!article) return <></>;
  return (
    <div style={{ background: 'green' }}>
      <div>
        <div>{article.title}</div>
        {/* 내가 쓴 글인지 아닌지에 따라 (수정,삭제) 또는 (조회수)  */}
        {article.writeId === userId ? (
          <>
            <button onClick={handleClickEdit}>수정</button>
            <button onClick={handleClickDelete}>삭제</button>
          </>
        ) : (
          <div>조회수 {article.viewCount}</div>
        )}
      </div>
      <div>{article.content}</div>
      <div>
        <span>
          <SmsOutlined />
          {article.likeCount}
        </span>
        <span>
          <FavoriteBorder />
          {article.commentCount}
        </span>
      </div>
    </div>
  );
};

export default Body;
