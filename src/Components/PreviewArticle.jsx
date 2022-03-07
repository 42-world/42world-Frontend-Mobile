import { getArticleTime, isNewArticle } from 'Utils/dayjsUtils';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SmsOutlined from '@mui/icons-material/SmsOutlined';

import Styled from './PreviewArticle.styled';

const PreviewArticle = ({ article, isBestArticle, onClickArticle }) => {
  return (
    <Styled.PreviewArticleDiv
      button
      divider
      className="article"
      onClick={onClickArticle}
      article={article}
    >
      <div className="top">
        {isBestArticle && <img src="/assets/hot.svg" />}
        {isNewArticle(article.createdAt) && <img src="/assets/new.svg" />}
        {article.title}
      </div>
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
