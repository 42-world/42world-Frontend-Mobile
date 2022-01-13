import { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { Body } from './Components';
import { Header, MenuModal, NotiModal } from '../../Components';

import Styled from './MainPage.styled';

const MainPage = () => {
  const [isMenuModal, setIsMenuModal] = useState(false);
  const [isNotiModal, setIsNotiModal] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const loca = useLocation();

  const handleOpenMenu = () => {
    if (loca.search === '') {
      setSearchParams('mode=menu');
      setIsMenuModal(true);
    } else {
      setSearchParams('');
      setIsMenuModal(false);
    }
  };
  const handleOpenNoti = () => {
    if (loca.search === '') {
      setSearchParams('mode=noti');
      setIsNotiModal(true);
    } else {
      setSearchParams('');
      setIsNotiModal(false);
    }
  };
  const handleToggleSearch = () => {
    if (isSearch) setIsSearch(false);
    else setIsSearch(true);
  };
  useEffect(() => {
    if (loca.search === '?mode=menu') {
      setIsMenuModal(true);
    }
    if (loca.search === '?mode=noti') {
      setIsNotiModal(true);
    }
  }, []);

  return (
    <>
      <Styled.MenuModal>
        <MenuModal open={isMenuModal} handleClose={handleOpenMenu} />
        <NotiModal open={isNotiModal} handleClose={handleOpenNoti} />
      </Styled.MenuModal>

      <Styled.MainHeader>
        <Header
          handleOpenMenu={handleOpenMenu}
          handleOpenNoti={handleOpenNoti}
          handleToggleSearch={handleToggleSearch}
          isSearch={isSearch}
        />
      </Styled.MainHeader>
      <Styled.MainBody>
        <Body />
      </Styled.MainBody>
    </>
  );
};

export default MainPage;
