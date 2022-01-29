import { ArrowForwardIos } from '@mui/icons-material';
import CommonStyled from '../Common.styled';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../../App';

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
      <CommonStyled.CustomDiv onClick={handleAuthClick}>
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
