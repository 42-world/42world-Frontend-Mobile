import { ArrowForwardIos, Person } from '@mui/icons-material';
import Styled from './Info.styled';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import UserService from '../../../Network/UserService';

const Info = () => {
  const navigate = useNavigate();
  const [nickname, setNickname] = useState();

  const handleSettingClick = () => {
    navigate('/profile/setting');
  };
  useEffect(() => {
    const fetch = async () => {
      const { nickname } = await UserService.getMe();
      setNickname(nickname);
    };

    fetch();
  }, []);
  if (!nickname) return <></>;
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
