import Styled from './PreviewArticle.styled';
import dayjs from 'dayjs';

const PreviewArticleNoti = ({ article, onClickArticle }) => {
  const mainTextLen = 30;
  const previewMainText =
    article.content.length > mainTextLen
      ? article.content.substr(0, mainTextLen) + '...'
      : article.content;

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
      <div className="middle">{previewMainText}</div>
      <div className="bottom">
        <text>{article.writer.nickname}</text>
        <h2>{getArticleTime(article.createdAt)}</h2>
        <text>조회수 {article.viewCount}</text>
      </div>
    </Styled.PreviewArticleDiv>
  );
};

export default PreviewArticleNoti;
