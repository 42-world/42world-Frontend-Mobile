import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { PreviewArticle } from '../../../Components';

import ArticleService from '../../../Network/ArticleService';

const AlarmBody = () => {
  const [alarmArticles, setAlarmArticles] = useState();
  const navi = useNavigate();

  const moveArticles = articleId => {
    navi(`/article/${articleId}`);
  };

  useEffect(async () => {
    let articles = await ArticleService.getArticles(1); // 인기글 API 필요
    setAlarmArticles(articles);
  }, []);

  return (
    <div>
      <div className="board_name">공지</div>
      {alarmArticles &&
        alarmArticles.map(article => {
          return (
            <PreviewArticle
              article={article}
              onClickArticle={() => moveArticles(article.id)}
            />
            // 인기글 가져오기, 지금은 보류.
          );
        })}
    </div>
  );
};

export default AlarmBody;
