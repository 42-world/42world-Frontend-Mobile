import { useState } from "react";

const Header = ({ handleOpenMenu }) => {
  const [search, setSearch] = useState("");

  const handleSubmitSearch = (e) => {
    e.preventDefault();
    console.log(search);
    setSearch("");
  };
  const handleChangeSearch = (e) => {
    setSearch(e.currentTarget.value);
  };
  return (
    <div className="mainpage-header">
      <img src="assets/menu.svg" onClick={handleOpenMenu} alt="menu" />
      <img src="assets/headerLogo.svg" alt="header-logo" />
      <img src="assets/alarmNo.svg" alt="alarm" />
      <img src="assets/myPage.svg" alt="my-page" />

      <div>
        <form onSubmit={handleSubmitSearch}>
          <input
            onChange={handleChangeSearch}
            type="text"
            maxLength="12"
            className="search"
            value={search}
          />
          <button onClick={handleSubmitSearch}>검색</button>
        </form>
      </div>
    </div>
  );
};
export default Header;
