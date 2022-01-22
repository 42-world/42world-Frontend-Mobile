import { useEffect } from 'react';
import { Body } from './Components';
import { Header } from '../../Components';
import AuthService from '../../Network/AuthService';
import Styled from './MainPage.styled';

// 프론트 -> github API -> 깃허브 인증 -> 쿼리 스트링으로 code가 날아옴 -> githubCallback API -> 서버에서 쿠키 보내줌.
const MainPage = () => {
  useEffect(async () => {
    const redi = await AuthService.github();
    const result = await AuthService.githubCallback(
      '?code=d0de243fa3ab9f232c6a',
    );
    console.log('result :', result);
  }, []);
  return (
    <>
      <Styled.MainHeader>
        <Header />
      </Styled.MainHeader>
      <Styled.MainBody>
        <Body />
      </Styled.MainBody>
    </>
  );
};

export default MainPage;
