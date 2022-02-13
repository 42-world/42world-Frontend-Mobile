import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import dayjs from 'dayjs';

import Styled from './AlarmArticle.styled.js';
import NotificationService from '../../../Network/NotificationService';

import Pagination from '@mui/material/Pagination';

const alarmType = (context, type) => {
  let message;
  switch (type) {
    case 'NEW_COMMENT': {
      message = '글에 답글이 달렸어요.';
      break;
    }
    default:
      message = '글을 확인해보세요.';
  }
  return '"' + context + '"' + message;
};

const AlarmBody = () => {
  const [alarmArticles, setAlarmArticles] = useState([]);
  const [curPage, setCurPage] = useState(1);
  const [curPageArticles, setCurPageArticles] = useState([]);

  const navi = useNavigate();
  const mainTextLen = 10;
  const pageMaxArticles = 19;
  const maxPages = Math.ceil(alarmArticles.length / pageMaxArticles); // 소수점으로 떨어질 경우 올림.
  // console.log('총 개수 : ', alarmArticles.length, '페이지 개수 : ', maxPages);

  const handleChangePage = (event, value) => {
    setCurPage(value);
  };

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

  const changePageArticles = () => {
    const pageIndex = (curPage - 1) * pageMaxArticles;
    // console.log('pageIndex : ', pageIndex);
    // console.log(alarmArticles.slice(pageIndex, pageIndex + pageMaxArticles));
    setCurPageArticles(
      alarmArticles.slice(pageIndex, pageIndex + pageMaxArticles),
    );
  };

  useEffect(() => {
    const getArticles = async () => {
      const response = await NotificationService.getNotifications(); // 알람 API 필요
      setAlarmArticles(response.reverse());
    };
    getArticles();
    changePageArticles();
  }, []);

  useEffect(() => {
    changePageArticles();
  }, [alarmArticles, curPage]);

  return (
    <Styled.AlramArticlesDiv>
      <Styled.AlramArticleDiv>
        <div className="left">공지</div>
        <div className="middle">42월드 많이 이용해주세요!</div>
        <div className="right">01/30 00:00</div>
      </Styled.AlramArticleDiv>
      {curPageArticles &&
        curPageArticles.map(article => {
          return (
            <Styled.AlramArticleDiv
              key={article.id}
              button
              divider
              className="article"
              onClick={() => moveArticles(article.userId)}
            >
              <div className="left">새 댓글</div>
              <div className="middle">{previewMainText(article)}</div>
              <div className="right">{getArticleTime(article.createdAt)}</div>
            </Styled.AlramArticleDiv>
          );
        })}
      <Pagination
        count={maxPages}
        page={curPage}
        siblingCount={2}
        onChange={handleChangePage}
        showFirstButton
        showLastButton
        shape="rounded"
        // size="small"
      />
    </Styled.AlramArticlesDiv>
  );
};

export default AlarmBody;
