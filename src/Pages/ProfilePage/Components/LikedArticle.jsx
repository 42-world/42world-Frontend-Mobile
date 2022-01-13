import { Button, Box } from '@mui/material';
import { FavoriteBorder } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const LikedArticle = () => {
  const navigate = useNavigate();

  const handleLikedArticleClick = () => {
    navigate('/profile/liked-article');
  };
  return (
    <Button onClick={handleLikedArticleClick}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '60px',
        }}
      >
        <FavoriteBorder />
        좋아요
      </Box>
    </Button>
  );
};

export default LikedArticle;
