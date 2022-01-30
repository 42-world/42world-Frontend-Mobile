import { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Styled from './LoginPage.styled';
import qs from 'qs';

import AuthService from '../../Network/AuthService';

import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';
import CircularProgress from '@mui/material/CircularProgress';
import { AuthContext } from '../../App';

const LoginPage = ({ isCallback }) => {
  const auth = useContext(AuthContext);
  const navi = useNavigate();
  const GithubLoginUrl = AuthService.getAuthUrl();
  const queryData = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });

  const handleLoginButton = () => {
    window.location.href = GithubLoginUrl;
  };
  useEffect(() => {
    const getAuth = async () => {
      if (isCallback) {
        const github_code = queryData.code;
        if (!github_code) {
          alert('다시 로그인 하세요!'); // 임시
          navi('/login');
        }
        const result = await AuthService.getAuthAccessToken(github_code);
        auth.setIsLoading(true);
        navi('/');
      }
    };
    getAuth();
  }, []);

  useEffect(() => {
    if (!isCallback && (auth.state === 200 || auth.state === 403)) navi('/');
  }, [auth.state]);

  return (
    <Styled.LoginPageBackground>
      <Styled.LoginPageBox>
        <h1>42WORLD</h1>
        <Button
          disabled={isCallback}
          variant="contained"
          onClick={handleLoginButton}
        >
          {isCallback ? (
            <CircularProgress />
          ) : (
            <>
              <GitHubIcon />
              <span>GitHub 계정으로 로그인 하기</span>
            </>
          )}
        </Button>
      </Styled.LoginPageBox>
    </Styled.LoginPageBackground>
  );
};

export default LoginPage;
