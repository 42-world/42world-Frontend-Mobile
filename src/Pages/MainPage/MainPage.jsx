import { useEffect } from 'react';
import { Body } from './Components';
import { Header } from '../../Components';
import UserService from '../../Network/UserService';
import Styled from './MainPage.styled';

// 프론트 -> github API -> 깃허브 인증 -> 쿼리 스트링으로 code가 날아옴 -> githubCallback API -> 서버에서 쿠키 보내줌.
const MainPage = () => {
  useEffect(async () => {
    // const redi = await AuthService.github();
    // const result = await AuthService.githubCallback(
    //   '?code=d0de243fa3ab9f232c6a',
    // );
    // console.log('result :', result);
    // const result = await UserService.getUser();
    // console.log(result);
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
