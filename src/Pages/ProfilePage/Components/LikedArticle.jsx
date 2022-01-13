import { Button, Box } from "@mui/material";
import { FavoriteBorder } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const LikedArticle = () => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate("/profile/liked-article");
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
        <FavoriteBorder />
        좋아요
      </Box>
    </Button>
  );
};

export default LikedArticle;
