import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentIcon from '@mui/icons-material/Comment';

const PreviewArticle = ({ article, handleOnclick }) => {
  return (
    <ListItem button divider className="article" onClick={handleOnclick}>
      <ListItemText>
        {article.title}
        <FavoriteIcon />
        {article.view_count}
        <CommentIcon />
        {article.view_count}
      </ListItemText>
    </ListItem>
  );
};

export default PreviewArticle;
