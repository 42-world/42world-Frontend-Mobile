import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { AuthContext } from 'App';
import { getProfile } from 'Utils';
import { UserService } from 'Network';

import { ArrowForwardIos } from '@mui/icons-material';

import Styled from './Info.styled';

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
        <div style={{ width: '36px', display: 'flex', alignItems: 'center' }}>
          <img
            src={getProfile.findProfileById(character)}
            alt="profile_img"
            style={{ width: '100%' }}
          />
        </div>
        <div className="middle" style={{ marginLeft: '10px' }}>
          <div className="name">{nickname}</div>
          <div className="welcome-message"> 님, 안녕하세요!</div>
        </div>
      </div>
      <ArrowForwardIos />
    </Styled.InfoDiv>
  );
};

export default Info;
