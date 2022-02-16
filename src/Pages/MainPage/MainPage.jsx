import { Header, Footer } from 'Components';
import { MainBody } from './Components';

import Styled from './MainPage.styled';

// 프론트 -> github API -> 깃허브 인증 -> 쿼리 스트링으로 code가 날아옴 -> githubCallback API -> 서버에서 쿠키 보내줌.
const MainPage = () => {
  return (
    <>
      <Styled.MainHeader>
        <Header />
      </Styled.MainHeader>
      <Styled.MainBody>
        <MainBody />
      </Styled.MainBody>
      <Footer></Footer>
    </>
  );
};

export default MainPage;
