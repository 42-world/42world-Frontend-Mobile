import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import GlobalStyled from '../../../Styled/Global.styled';
import Styled from './Header.styled';

const Header = () => {
  const navigate = useNavigate();
  const handleClickBackButton = () => {
    navigate(-1);
  };
  const handleClickLogo = () => {
    navigate('/');
  };
  return (
    <Styled.HeaderStyleDiv>
      <Button onClick={handleClickBackButton}>
        <ArrowBackIcon />
      </Button>
      <div>
        <img
          src={GlobalStyled.assets.headerLogo}
          alt="header-logo"
          onClick={handleClickLogo}
        />
      </div>
      <div>
        <NotificationsIcon
          sx={{ color: GlobalStyled.theme.textLight }}
          // onClick={handleOpenNoti}
        />
        <AccountCircleIcon
          sx={{ color: GlobalStyled.theme.textLight }}
          onClick={() => navigate('/profile')}
        />
      </div>
    </Styled.HeaderStyleDiv>
  );
};

export default Header;
