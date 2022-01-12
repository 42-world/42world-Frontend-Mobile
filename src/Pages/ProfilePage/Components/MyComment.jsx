import { Button, Box } from "@mui/material";
import { SmsOutlined } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const MyComment = () => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate("/profile/my-comment");
  };

  return (
    <Button onClick={onClick}>
      <Box
        sx={{
          margin: "0px 8vw",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "60px",
        }}
      >
        <SmsOutlined />내 댓글
      </Box>
    </Button>
  );
};

export default MyComment;
