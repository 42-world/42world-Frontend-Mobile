import ListItemText from '@mui/material/ListItemText';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SmsOutlined from '@mui/icons-material/SmsOutlined';

import Styled from './PreviewArticle.styled';

const PreviewArticle = ({ article, onClickArticle }) => {
  return (
    <Styled.PreviewArticleDiv
      button
      divider
      className="article"
      onClick={onClickArticle}
      article={article}
    >
      <ListItemText>{article.title}</ListItemText>
      <div className="liked_icon">
        <FavoriteBorderIcon />
      </div>
      <div className="comment_icon">
        <SmsOutlined />
        {/*{article.comment_count}*/}
      </div>
      {/*{article.liked_count}*/}
    </Styled.PreviewArticleDiv>
  );
};

export default PreviewArticle;
