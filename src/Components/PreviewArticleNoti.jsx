// import ListItem from '@mui/material/ListItem';
// import ListItemText from '@mui/material/ListItemText';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SmsOutlined from '@mui/icons-material/SmsOutlined';

import Styled from './PreviewArticle.styled';

const PreviewArticleNoti = ({ article, onClickArticle }) => {
  const previewMainText = article.content.substr(0, 30);
  const created = article.createdAt.substr(0, 10);
  console.log(created);
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
