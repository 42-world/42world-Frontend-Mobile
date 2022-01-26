import Styled from './PreviewArticle.styled';

const PreviewArticleNoti = ({ article, onClickArticle }) => {
  const previewMainText = article.content.substr(0, 30);
  const created = article.createdAt.substr(0, 10);

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
        <text>{created}</text>
        <text>조회수 {article.viewCount}</text>
      </div>
    </Styled.PreviewArticleDiv>
  );
};

export default PreviewArticleNoti;
