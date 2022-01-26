import Styled from './PreviewArticle.styled';

const getCategoryName = id => {
  switch (id) {
    case 1:
      return '자유 게시판';
    case 2:
      return '익명 게시판';
    case 3:
      return '42born2code 공지';
    default:
      return '';
  }
};

const PreviewArticleAlarm = ({ article, onClickArticle }) => {
  const previewMainText = article.content.substr(0, 30);
  const created = article.createdAt.substr(0, 10);
  const categoryName = getCategoryName(article.categoryId);
  return (
    <Styled.PreviewArticleDiv
      button
      divider
      className="article"
      onClick={onClickArticle}
      article={article}
    >
      <div className="alarm">
        <div className="left">{categoryName}</div>
        <div className="middle">{previewMainText}</div>
        <div className="right">{created}</div>
      </div>
    </Styled.PreviewArticleDiv>
  );
};

export default PreviewArticleAlarm;
