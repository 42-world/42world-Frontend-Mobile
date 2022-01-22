import { useEffect } from 'react';
import { Body } from './Components';
import { Header } from '../../Components';
import AuthService from '../../Network/AuthService';
import Styled from './MainPage.styled';

const MainPage = () => {
  useEffect(async () => {
    const result = await AuthService.github();
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
