import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { PreviewArticleAlarm } from '../../../Components';

import ArticleService from '../../../Network/ArticleService';

const AlarmBody = () => {
  const [alarmArticles, setAlarmArticles] = useState();
  const navi = useNavigate();

  const moveArticles = articleId => {
    navi(`/article/${articleId}`);
  };

  useEffect(() => {
    const getArticles = async () => {
      const response = await ArticleService.getArticles(1); // 알람 API 필요

      setAlarmArticles(response.data);
    };
    getArticles();
  }, [setAlarmArticles]);

  return (
    <>
      <div className="alarm">
        <div className="left">공지</div>
        <div className="middle">42월드 많이 이용해주세요!</div>
        <div className="right">2022-01-26</div>
      </div>
      <div>
        {alarmArticles &&
          alarmArticles.map(article => {
            return (
              <PreviewArticleAlarm
                article={article}
                onClickArticle={() => moveArticles(article.id)}
              />
              // 인기글 가져오기, 지금은 보류.
            );
          })}
      </div>
    </>
  );
};

export default AlarmBody;
