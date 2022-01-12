import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

const PreviewArticle = ({ article, handleOnclick }) => {
  const tempNum = 5; //  좋아요, 댓글 수
  return (
    <ListItem button divider className="article" onClick={handleOnclick}>
      <ListItemText>
        {article}
        <img src="assets/like.svg" alt="like" />
        {tempNum}
        <img src="assets/comment.svg" alt="comment" />
        {tempNum}
      </ListItemText>
    </ListItem>
  );
};

export default PreviewArticle;
