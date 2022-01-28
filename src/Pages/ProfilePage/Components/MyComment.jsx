import { Button, Box } from '@mui/material';
import { SmsOutlined } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const MyComment = () => {
  const navigate = useNavigate();

  const handleCommentClick = () => {
    navigate('/profile/my-comment');
  };

  return (
    <Button onClick={handleCommentClick}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '70px',
        }}
      >
        <SmsOutlined />내 댓글
      </Box>
    </Button>
  );
};

export default MyComment;
