import { useNavigate } from 'react-router-dom';
import { PreviewArticleNoti } from '../../../Components';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Styled from './Body.styled';
import CheckInService from '../../../Network/CheckInService';
import { useCallback, useEffect, useState } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import MyInfoAccordion from './MyInfoAccordion';

const Home = ({ notiArticles }) => {
  const [checkInStatus, setCheckInStatus] = useState({
    gaepo: 0,
    seocho: 0,
  });
  const navi = useNavigate();

  const moveArticles = articleId => {
    navi(`/article/${articleId}`);
  };
  const getCheckInStatus = useCallback(async () => {
    const response = await CheckInService.curCheckInStatus();

    setCheckInStatus(response);
  }, [setCheckInStatus]);

  useEffect(() => {
    getCheckInStatus();
  }, []);

  return (
    <Box>
      <Styled.CheckInHeader>
        <text>클러스터 현황</text>
        <a href="https://cluster.42seoul.io/submit">
          <Button variant="contained">체크인</Button>
        </a>
      </Styled.CheckInHeader>
      <Styled.CheckInBody>
        <div>
          <h2>개포</h2>
          <div style={{ width: 100, height: 100 }}>
            <CircularProgressbar
              maxValue={225}
              text={checkInStatus.gaepo + '명'}
              value={checkInStatus.gaepo}
              strokeWidth={10}
            />
          </div>
        </div>
        <div>
          <h2>서초</h2>
          <div style={{ width: 100, height: 100 }}>
            <CircularProgressbar
              maxValue={225}
              text={checkInStatus.seocho + '명'}
              value={checkInStatus.seocho}
              strokeWidth={10}
            />
          </div>
        </div>
      </Styled.CheckInBody>
      <MyInfoAccordion />
      <Styled.StyledList
        disablePadding="true"
        component="nav"
        aria-label="mailbox folders"
      >
        <Styled.BoardTitleDiv
          className="article"
          boardArticleCount={notiArticles.length}
          onClick={() => navi('/category/3')}
        >
          <div className="board_name">42born2code 공지</div>
          <div className="board_count"></div>
        </Styled.BoardTitleDiv>

        {notiArticles &&
          notiArticles.map(article => {
            return (
              <PreviewArticleNoti
                article={article}
                onClickArticle={() => moveArticles(article.id)}
                key={article.id}
              />
            );
          })}
      </Styled.StyledList>
    </Box>
  );
};
export default Home;
