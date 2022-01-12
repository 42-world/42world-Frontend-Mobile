import { Box } from "@mui/material";
import Article from "./Article";

const Articles = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Article type="좋아요" />
      <hr style={{ height: "36px" }} />
      <Article type="내가 쓴 글" />
      <hr style={{ height: "36px" }} />
      <Article type="내 댓글" />
    </Box>
  );
};

export default Articles;
