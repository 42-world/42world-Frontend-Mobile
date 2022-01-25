import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Styled from './LoginPage.styled';
import qs from 'qs';

import AuthService from '../../Network/AuthService';

import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';
import CircularProgress from '@mui/material/CircularProgress';

const LoginPage = ({ isCallback }) => {
  const navi = useNavigate();
  const GithubLoginUrl = AuthService.getAuthUrl();
  const queryData = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });

  const handleLoginButton = () => {
    window.location.href = GithubLoginUrl;
  };

  useEffect(async () => {
    if (isCallback) {
      const github_code = queryData.code;
      if (!github_code) {
        alert('다시 로그인 하세요!'); // 임시
      }
      const result = await AuthService.getAuthAccessToken(github_code);
      navi('/');
      console.log(result);
    }
  }, []);

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
              <span>깃허브 계정으로 로그인 하기</span>
            </>
          )}
        </Button>
      </Styled.LoginPageBox>
    </Styled.LoginPageBackground>
  );
};

export default LoginPage;
