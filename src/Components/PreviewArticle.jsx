import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

const PreviewArticle = ({ article, handleOnclick }) => {
  return (
    <ListItem button divider className="article" onClick={handleOnclick}>
      <ListItemText>
        {article.title}
        <img src="assets/like.svg" alt="like" />
        {article.view_count}
        <img src="assets/comment.svg" alt="comment" />
        {article.view_count}
      </ListItemText>
    </ListItem>
  );
};

export default PreviewArticle;
