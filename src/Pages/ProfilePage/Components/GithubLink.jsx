import { useEffect, useState, useContext } from 'react';

import { AuthContext } from 'App';
import { UserService } from 'Network';

import { ArrowForwardIos } from '@mui/icons-material';

import CommonStyled from '../Common.styled';

const githubLink = 'https://github.com';

const GithubLink = () => {
  const auth = useContext(AuthContext);
  const [nickname, setNickName] = useState(
    auth.curUser ? auth.curUser.nickname : '',
  );
  const handleGithubLinkClick = () => {
    window.open(`${githubLink}/${nickname}`);
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
    <>
      <CommonStyled.CustomDiv onClick={handleGithubLinkClick}>
        <div>Github 로그인 계정 확인하기</div>
        <ArrowForwardIos />
      </CommonStyled.CustomDiv>
    </>
  );
};

export default GithubLink;
