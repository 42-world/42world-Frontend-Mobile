import { ArrowForwardIos, Person } from '@mui/icons-material';
import Styled from './Info.styled';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../../App';

const Info = () => {
  const navigate = useNavigate();
  const auth = useContext(AuthContext);

  const handleSettingClick = () => {
    navigate('/profile/setting');
  };

  return (
    <Styled.InfoBox onClick={handleSettingClick}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ margin: '4px' }}>
          <Person fontSize="large" />
        </div>
        <div>
          <Styled.NameDiv>{auth.curUser.nickname}</Styled.NameDiv>
        </div>
      </div>
      <ArrowForwardIos />
    </Styled.InfoBox>
  );
};

export default Info;
