import { useState } from "react";
import { Button, Box, Dialog } from "@mui/material";
import {
  ArticleOutlined,
  FavoriteBorder,
  SmsOutlined,
} from "@mui/icons-material";

const Article = ({ type }) => {
  const articles = ["글1", "글2", "글3"];
  const [isClick, setIsClick] = useState(false);

  const onClick = () => {
    setIsClick(!isClick);
  };
  let icon;
  if (type === "좋아요") {
    icon = <FavoriteBorder />;
  } else if (type === "내가 쓴 글") {
    icon = <ArticleOutlined />;
  } else if (type === "내 댓글") {
    icon = <SmsOutlined />;
  }
  return (
    <>
      <Button onClick={onClick}>
        <Box
          sx={{
            margin: "0px 10px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "60px",
          }}
        >
          {icon}
          {type}
        </Box>
      </Button>
      <Dialog open={isClick}>
        <div>
          <button onClick={onClick}>뒤로</button>
        </div>
        <div>
          {articles.map((article, idx) => (
            <div key={idx}>{article}</div>
          ))}
        </div>
      </Dialog>
    </>
  );
};

export default Article;
