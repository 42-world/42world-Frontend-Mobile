import { Body } from './Components';
import { Header } from '../../Components';

import Styled from './MainPage.styled';

const MainPage = () => {
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
