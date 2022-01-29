import { ArrowForwardIos, Person } from '@mui/icons-material';
import UserService from '../../../Network/UserService';
import Styled from './Info.styled';
import { useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../App';

const Info = () => {
  const navigate = useNavigate();
  const auth = useContext(AuthContext);
  const [nickname, setNickName] = useState(
    auth.curUser.nickname ? auth.curUser.nickname : '',
  );

  const handleSettingClick = () => {
    navigate('/profile/setting');
  };

  useEffect(() => {
    if (nickname === '') {
      const fetch = async () => {
        const res = await UserService.getNoviceProfile();
        setNickName(res.nickname);
      };
      fetch();
    }
  }, []);

  return (
    <Styled.InfoBox onClick={handleSettingClick}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ margin: '4px' }}>
          <Person fontSize="large" />
        </div>
        <div>
          <Styled.NameDiv>{nickname}</Styled.NameDiv>
        </div>
      </div>
      <ArrowForwardIos />
    </Styled.InfoBox>
  );
};

export default Info;
