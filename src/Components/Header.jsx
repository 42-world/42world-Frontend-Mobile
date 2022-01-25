import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams, useLocation } from 'react-router-dom';

import MenuModal from './MenuModal';
// import NotiModal from './NotiModal';

import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';

import Styled from './Header.styled';
import GlobalStyled from '../Styled/Global.styled';

// const SearchBar = () => {
//   const [search, setSearch] = useState('');
//   const navi = useNavigate();

//   const handleSubmitSearch = e => {
//     e.preventDefault();
//     // console.log(search); // 검색 창으로 이동해야 함.
//     navi(`/search?keyword=${search}`);
//     setSearch('');
//   };

//   const handleChangeSearch = e => {
//     setSearch(e.currentTarget.value);
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmitSearch}>
//         <input
//           onChange={handleChangeSearch}
//           type="text"
//           className="search"
//           value={search}
//           placeholder="게시물 제목 검색"
//         />
//         <button onClick={handleSubmitSearch}>검색</button>
//       </form>
//     </div>
//   );
// };

const Header = () => {
  const [isMenuModal, setIsMenuModal] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const loca = useLocation();

  const handleOpenMenu = (anchor, open) => {
    if (loca.search === '') {
      setSearchParams('mode=menu');
      setIsMenuModal(true);
    } else {
      setSearchParams('');
      setIsMenuModal(false);
    }
  };

  // const handleOpenNoti = () => {
  //   if (loca.search === '') {
  //     setSearchParams('mode=noti');
  //     setIsNotiModal(true);
  //   } else {
  //     setSearchParams('');
  //     setIsNotiModal(false);
  //   }
  // };

  const handleToggleSearch = () => {
    setIsSearch(!isSearch);
  };
  useEffect(() => {
    if (loca.search === '?mode=menu') {
      setIsMenuModal(true);
    }
  }, []);

  const navi = useNavigate();

  return (
    <div className="mainpage-header">
      <Styled.HeaderStyleDiv>
        <div>
          <MenuIcon
            sx={{ color: GlobalStyled.theme.textLight }}
            onClick={handleOpenMenu}
          />
        </div>
        <div>
          <img
            src={GlobalStyled.assets.headerLogo}
            alt="header-logo"
            onClick={() => navi('/')}
          />
        </div>
        <div>
          <SearchIcon
            sx={{ color: GlobalStyled.theme.textLight }}
            onClick={handleToggleSearch}
          />
          <NotificationsIcon
            sx={{ color: GlobalStyled.theme.textLight }}
            onClick={() => navi('/alarm')}
          />
          <AccountCircleIcon
            sx={{ color: GlobalStyled.theme.textLight }}
            onClick={() => navi('/profile')}
          />
        </div>
        {/*{isSearch && <SearchBar />}*/}
      </Styled.HeaderStyleDiv>
      <div
        style={{
          display: 'block',
          height: GlobalStyled.theme.headerHeight,
        }}
      ></div>
      {/* <SearchIcon sx={{ color: GlobalStyled.theme.textLight }} onClick={() => navi('/search')} /> */}

      <SwipeableDrawer
        anchor="left"
        open={isMenuModal}
        onClose={handleOpenMenu}
        onOpen={handleOpenMenu}
      >
        <MenuModal open={isMenuModal} onClickCloseModal={handleOpenMenu} />
      </SwipeableDrawer>
      {/*<Styled.MenuModal>*/}
      {/*<MenuModal open={isMenuModal} onClickCloseModal={handleOpenMenu} />*/}
      {/*<NotiModal open={isNotiModal} onClickCloseModal={handleOpenNoti} />*/}
      {/*</Styled.MenuModal>*/}
    </div>
  );
};
export default Header;
