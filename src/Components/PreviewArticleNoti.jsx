import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SmsOutlined from '@mui/icons-material/SmsOutlined';

import Styled from './PreviewArticle.styled';

const PreviewArticleNoti = ({ article, onClickArticle }) => {
  const previewMainText = article.content.substr(0, 30);

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
        {/* <text>{article.createdAt}</text> */}
        <text>{article.view_count}</text>
      </div>
    </Styled.PreviewArticleDiv>
  );
};

export default PreviewArticleNoti;
