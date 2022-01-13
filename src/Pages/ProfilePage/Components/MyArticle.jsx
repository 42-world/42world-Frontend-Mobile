import { Button, Box } from "@mui/material";
import { ArticleOutlined } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const MyArticle = () => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate("/profile/my-article");
  };
  return (
    <Button onClick={onClick}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "60px",
        }}
      >
        <ArticleOutlined />
        내가 쓴 글
      </Box>
    </Button>
  );
};

export default MyArticle;
