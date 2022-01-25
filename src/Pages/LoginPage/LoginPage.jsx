import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import qs from 'qs';

import AuthService from '../../Network/AuthService';

import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';

const LoginPage = ({ isCallback }) => {
  const navi = useNavigate();
  const GithubLoginUrl = AuthService.getAuthUrl();
  const queryData = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });
  console.log(queryData);

  useEffect(async () => {
    if (isCallback) {
      const github_code = queryData.code;
      if (!github_code) {
        alert('다시 로그인 하세요!'); // 임시
      }
      const result = await AuthService.getAuthAccessToken(github_code);
      //   navi('/');

      console.log(result);
    }
  }, []);

  return (
    <>
      {isCallback ? (
        <CircularProgress />
      ) : (
        <a href={GithubLoginUrl}>
          <Button variant="contained">깃허브 로그인</Button>
        </a>
      )}
    </>
  );
};

export default LoginPage;
