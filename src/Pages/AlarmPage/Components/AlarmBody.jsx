import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import NotificationService from 'Network/NotificationService';
import dayjs from 'dayjs';

import Styled from './AlarmArticle.styled.js';

const alarmType = (context, type) => {
  let message;
  switch (type) {
    case 'NEW_COMMENT': {
      message = ' 글에 답글이 달렸어요.';
      break;
    }
    default:
      message = ' 글을 확인해보세요.';
  }
  return '"' + context + '"' + message;
};

const AlarmBody = () => {
  const [alarmArticles, setAlarmArticles] = useState([]);

  const navi = useNavigate();
  const mainTextLen = 10;

  const moveArticles = articleId => {
    alert('구현 중입니다!');
    // navi(`/article/${articleId}`);
  };

  const previewMainText = article => {
    const context =
      article.content.length > mainTextLen
        ? article.content.substr(0, mainTextLen) + '...'
        : article.content;
    return alarmType(context, article.type);
  };

  const getArticleTime = time => dayjs(time).format('MM/DD HH:mm');

  const readAlarm = async () => {
    const read = await NotificationService.readAllNotifications();
  };

  useEffect(() => {
    const getArticles = async () => {
      const response = await NotificationService.getNotifications(); // 알람 API 필요
      setAlarmArticles(response.reverse());
    };
    getArticles();
    readAlarm(); // 글을 받아온 후 알림을 읽는다. 다음 번 불러올 때 이번에 읽어온 글의 isRead가 true가 된다.
  }, []);

  return (
    <Styled.AlramArticlesDiv>
      <Styled.AlramArticleDiv isNotice={true}>
        <div className="left">공지</div>
        <div className="middle">42월드 많이 이용해주세요!</div>
        <div className="right">01/30 00:00</div>
      </Styled.AlramArticleDiv>
      {alarmArticles &&
        alarmArticles.map(article => {
          return (
            <Styled.AlramArticleDiv
              key={article.id}
              className="article"
              isRead={article.isRead}
              isNotice={false}
              onClick={() => moveArticles(article.userId)}
            >
              <div className="left">새 댓글</div>
              <div className="middle">{previewMainText(article)}</div>
              <div className="right">{getArticleTime(article.createdAt)}</div>
            </Styled.AlramArticleDiv>
          );
        })}
    </Styled.AlramArticlesDiv>
  );
};

export default AlarmBody;
