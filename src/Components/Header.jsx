import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import Styled from './Header.styled';

const SearchBar = () => {
  const [search, setSearch] = useState('');
  const navi = useNavigate();
  const handleSubmitSearch = e => {
    e.preventDefault();
    console.log(search); // 검색 창으로 이동해야 함.
    navi(`/search?keyword=${search}`);
    setSearch('');
  };
  const handleChangeSearch = e => {
    setSearch(e.currentTarget.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmitSearch}>
        <input
          onChange={handleChangeSearch}
          type="text"
          className="search"
          value={search}
          placeholder="게시물 제목 검색"
        />
        <button onClick={handleSubmitSearch}>검색</button>
      </form>
    </div>
  );
};

const Header = ({ onClickMenu, onClickNoti, onClickSearch, isSearch }) => {
  const navi = useNavigate();
  return (
    <div className="mainpage-header">
      <Styled.HeaderStyleDiv>
        <div>
          <MenuIcon sx={{ color: 'white' }} onClick={onClickMenu} />
        </div>
        <div>
          <img
            src="assets/headerLogo.svg"
            alt="header-logo"
            onClick={() => navi('/')}
          />
        </div>
        {/* <SearchIcon sx={{ color: 'white' }} onClick={() => navi('/search')} /> */}
        <div>
          <SearchIcon sx={{ color: 'white' }} onClick={onClickSearch} />
          <NotificationsIcon sx={{ color: 'white' }} onClick={onClickNoti} />
          <AccountCircleIcon
            sx={{ color: 'white' }}
            onClick={() => navi('/profile')}
          />
        </div>
      </Styled.HeaderStyleDiv>
      {isSearch && <SearchBar />}
    </div>
  );
};
export default Header;
