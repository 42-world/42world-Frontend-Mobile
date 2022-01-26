import { useNavigate } from 'react-router-dom';
import { PreviewArticleNoti } from '../../../Components';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Styled from './Body.styled';

const Home = ({ notiArticles }) => {
  const navi = useNavigate();

  const moveArticles = articleId => {
    navi(`/article/${articleId}`);
  };

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
          <h2>0/200</h2>
        </div>
        <div>
          <h2>서초</h2>
          <h2>0/200</h2>
        </div>
      </Styled.CheckInBody>
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
