import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SmsOutlined from '@mui/icons-material/SmsOutlined';
const PreviewArticle = ({ article, handleOnclick }) => {
  return (
    <ListItem button divider className="article" onClick={handleOnclick}>
      <ListItemText>
        {article.title}
        <FavoriteBorderIcon />
        {article.view_count}
        <SmsOutlined />
        {article.view_count}
      </ListItemText>
    </ListItem>
  );
};

export default PreviewArticle;
