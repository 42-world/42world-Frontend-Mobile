import { getArticleTime } from 'Utils/dayjsUtils';

import Styled from './PreviewArticle.styled';

const PreviewArticleNoti = ({ article, onClickArticle }) => {
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
      </div>
    </Styled.PreviewArticleDiv>
  );
};

export default PreviewArticleNoti;
