import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SmsOutlined from '@mui/icons-material/SmsOutlined';
import dayjs from 'dayjs';

import Styled from './PreviewArticle.styled';

const PreviewArticle = ({ article, onClickArticle }) => {
  const getArticleTime = time =>
    dayjs(time).isSame(dayjs(), 'day')
      ? dayjs(time).format('HH:mm')
      : dayjs(time).format('MM/DD');
  return (
    <Styled.PreviewArticleDiv
      button
      divider
      className="article"
      onClick={onClickArticle}
      article={article}
    >
      <div className="top">{article.title}</div>
      <div className="middle">{article.content}</div>
      <div className="bottom">
        {article.writer && <h2>{article.writer.nickname}</h2>}
        <h2>{getArticleTime(article.createdAt)}</h2>
        <h2>조회수 {article.viewCount}</h2>

        <div className="liked_icon">
          <FavoriteBorderIcon />
        </div>
        <div className="comment_icon">
          <SmsOutlined />
        </div>
      </div>
    </Styled.PreviewArticleDiv>
  );
};

export default PreviewArticle;
