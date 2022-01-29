import CommonStyled from '../Common.styled';
import AuthService from '../../../Network/AuthService';
import { AuthContext } from '../../../App';
import { useContext } from 'react';

const SignOut = () => {
  const auth = useContext(AuthContext);

  const handleSignOut = () => {
    auth.setIsLoading(true);
    AuthService.signOut();
  };
  return (
    <CommonStyled.CustomDiv onClick={handleSignOut}>
      <div>로그아웃</div>
    </CommonStyled.CustomDiv>
  );
};

export default SignOut;
