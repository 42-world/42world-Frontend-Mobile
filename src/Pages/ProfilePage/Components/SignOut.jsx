import CommonStyled from '../Common.styled';
import AuthService from '../../../Network/AuthService';
import { AuthContext } from '../../../App';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const SignOut = () => {
  const auth = useContext(AuthContext);
  const navi = useNavigate();
  const handleSignOut = async () => {
    const result = await AuthService.signOut();
    auth.setIsLoading(true);

    navi('/login');
  };
  return (
    <CommonStyled.CustomDiv onClick={handleSignOut}>
      <div>로그아웃</div>
    </CommonStyled.CustomDiv>
  );
};

export default SignOut;
