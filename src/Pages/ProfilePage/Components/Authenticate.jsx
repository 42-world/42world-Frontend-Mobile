import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { AuthContext } from 'App';

import { ArrowForwardIos } from '@mui/icons-material';

import CommonStyled from '../Common.styled';

const Authenticate = () => {
  const navigate = useNavigate();
  const auth = useContext(AuthContext);

  const handleAuthClick = () => {
    if (auth.state !== 200) {
      navigate('/profile/auth');
    }
  };
  return (
    <>
      <CommonStyled.CustomDiv
        style={auth.state !== 200 ? { cursor: 'pointer' } : {}}
        onClick={handleAuthClick}
      >
        {auth.state !== 200 ? (
          <>
            <div style={{ color: '#53B7BA' }}>인증하기</div>
            <ArrowForwardIos style={{ color: '#53B7BA' }} />
          </>
        ) : (
          <div>인증완료</div>
        )}
      </CommonStyled.CustomDiv>
    </>
  );
};

export default Authenticate;
