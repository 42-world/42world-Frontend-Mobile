import { useNavigate } from 'react-router-dom';
import { PreviewArticleNoti } from '../../../Components';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Styled from './Body.styled';
import CheckInService from '../../../Network/CheckInService';
import { useCallback, useEffect, useState } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Home = ({ notiArticles }) => {
  const [checkInStatus, setCheckInStatus] = useState({
    max: {
      gaepo: 1,
      seocho: 1,
    },
    now: {
      gaepo: 0,
      seocho: 0,
    },
  });
  const navi = useNavigate();

  const moveArticles = articleId => {
    navi(`/article/${articleId}`);
  };

  const getCheckInText = (now, max) => (now ? now + '/' + max : 'No Data');

  useEffect(() => {
    const getCheckInStatus = async () => {
      const response = await CheckInService.curCheckInStatus();
      setCheckInStatus(response);
    };
    getCheckInStatus();
  }, []);

  return (
    <Box>
      <Styled.CheckInHeader>
        <p>클러스터 현황</p>
        <a href="https://cluster.42seoul.io/submit">
          <Button variant="contained">체크인</Button>
        </a>
      </Styled.CheckInHeader>
      <Styled.CheckInBody>
        <div className="circular_progress_bar_div gaepo">
          <h2>개포</h2>
          <div className="circular_progress_bar">
            <CircularProgressbar
              maxValue={checkInStatus.max.gaepo ? checkInStatus.max.gaepo : 1}
              text={getCheckInText(
                checkInStatus.now.gaepo,
                checkInStatus.max.gaepo,
              )}
              value={checkInStatus.now.gaepo}
              strokeWidth={12}
            />
          </div>
        </div>
        <div className="circular_progress_bar_div seocho">
          <h2>서초</h2>
          <div className="circular_progress_bar">
            <CircularProgressbar
              maxValue={checkInStatus.max.seocho ? checkInStatus.max.seocho : 1}
              text={getCheckInText(
                checkInStatus.now.seocho,
                checkInStatus.max.seocho,
              )}
              value={checkInStatus.now.seocho}
              strokeWidth={12}
            />
          </div>
        </div>
      </Styled.CheckInBody>
      <Styled.StyledList
        disablePadding={true}
        component="nav"
        aria-label="mailbox folders"
      >
        <Styled.BoardTitleDiv
          className="article"
          boardArticleCount={notiArticles?.length}
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
