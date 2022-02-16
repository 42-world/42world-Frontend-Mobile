import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams, useLocation } from 'react-router-dom';

import qs from 'qs';

import MenuModal from './MenuModal';
// import NotiModal from './NotiModal';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';

import GlobalStyled from 'Styled/Global.styled';
import Styled from './Header.styled';

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
  const location = useLocation();
  const queryData = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });
  const [isMenuModal, setIsMenuModal] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isArticle, setIsArticle] = useState(false);
  const loca = useLocation();

  const handleOpenMenu = (anchor, open) => {
    if (!queryData.mode) {
      setSearchParams({ ...queryData, mode: 'menu' });
      setIsMenuModal(true);
    } else {
      delete queryData.mode;
      setSearchParams({ ...queryData });
      setIsMenuModal(false);
    }
    // if (loca.search === '') {
    //   setSearchParams('mode=menu');
    //   setIsMenuModal(true);
    // } else {
    //   setSearchParams('');
    //   setIsMenuModal(false);
    // }
  };
  const handleBackButton = () => {
    navi(-1);
  };

  // const handleToggleSearch = () => {
  //   setIsSearch(!isSearch);
  // };

  useEffect(() => {
    if (queryData.mode === 'menu') {
      setIsMenuModal(true);
    }
  }, [queryData.mode]);
  useEffect(() => {
    if (loca.pathname.includes('article')) {
      setIsArticle(true);
    }
  }, [loca]);

  const navi = useNavigate();

  return (
    <div className="mainpage-header">
      <Styled.HeaderStyleDiv>
        <div>
          {!isArticle && (
            <MenuIcon
              sx={{ color: GlobalStyled.theme.headerIconColor }}
              onClick={handleOpenMenu}
            />
          )}
          {isArticle && (
            <ArrowBackIosRoundedIcon
              sx={{ color: GlobalStyled.theme.headerIconColor }}
              onClick={handleBackButton}
            />
          )}
        </div>
        <div>
          <img
            className="header-logo"
            src={GlobalStyled.assets.headerLogo}
            alt="header-logo"
            onClick={() => navi('/')}
          />
        </div>
        <div>
          {/*<SearchIcon
            sx={{ color: GlobalStyled.theme.headerIconColor }}
            onClick={handleToggleSearch}
          />*/}
          <AccountCircleIcon
            sx={{ color: GlobalStyled.theme.headerIconColor }}
            onClick={() => navi('/profile')}
          />
          <NotificationsIcon
            sx={{ color: GlobalStyled.theme.headerIconColor }}
            onClick={() => navi('/alarm')}
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
      {/* <SearchIcon sx={{ color: GlobalStyled.theme.headerIconColor }} onClick={() => navi('/search')} /> */}
      <SwipeableDrawer
        anchor="left"
        open={isMenuModal}
        onClose={handleOpenMenu}
        onOpen={handleOpenMenu}
      >
        <MenuModal open={isMenuModal} onClickCloseModal={handleOpenMenu} />
      </SwipeableDrawer>
    </div>
  );
};
export default Header;
