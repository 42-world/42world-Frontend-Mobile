// import ListItem from '@mui/material/ListItem';
// import ListItemText from '@mui/material/ListItemText';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SmsOutlined from '@mui/icons-material/SmsOutlined';

import Styled from './PreviewArticle.styled';

const PreviewArticle = ({ article, onClickArticle }) => {
  const mainTextLen = 70;
  const previewMainText =
    article.content.length > mainTextLen
      ? article.content.substr(0, mainTextLen) + '...'
      : article.content;
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
        <h2>{article.writer.nickname}</h2>
        <h2>{created}</h2>
        <h2>조회수 {article.viewCount}</h2>

        <div className="favorite_icon">
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
