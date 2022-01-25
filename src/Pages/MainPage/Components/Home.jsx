import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import Styled from './Body.styled';
import { PreviewArticle } from '../../../Components';

const Home = ({ notiArticles }) => {
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
        >
          <div className="board_name">42born2code 공지</div>
          <div className="board_count"></div>
        </Styled.BoardTitleDiv>

        {notiArticles.map(article => {
          return <PreviewArticle article={article} />;
        })}
      </Styled.StyledList>
    </Box>
  );
};
export default Home;
