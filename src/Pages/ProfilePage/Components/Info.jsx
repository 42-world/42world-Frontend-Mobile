import { ArrowForwardIos } from '@mui/icons-material';
import UserService from 'Network/UserService';
import Styled from './Info.styled';
import { useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from 'App';
import { getProfileImg } from 'Utils/profileList';

const Info = () => {
  const navigate = useNavigate();
  const auth = useContext(AuthContext);
  const curUser = auth.curUser;
  const [nickname, setNickName] = useState(curUser ? curUser.nickname : '');
  const [character, _] = useState(curUser ? curUser.character : 0);

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
    <Styled.InfoDiv onClick={handleSettingClick}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ margin: '4px 12px 4px 4px', width: '36px' }}>
          <img
            src={getProfileImg(character)}
            alt="profile_img"
            style={{ width: '100%' }}
          />
        </div>
        <div className="middle">
          <div className="name">{nickname}</div>
          <div className="welcome-message"> 님, 안녕하세요!</div>
        </div>
      </div>
      <ArrowForwardIos />
    </Styled.InfoDiv>
  );
};

export default Info;
