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
    <>
      <button onClick={handleOpenMenu}>메뉴</button>
      <button>알림</button>
      <button>마이페이지</button>
      <div>
        <form onSubmit={handleSubmitSearch}>
          <input
            onChange={handleChangeSearch}
            type="text"
            maxLength="12"
            className="search"
            value={search}
          />
        </form>
      </div>
    </>
  );
};
export default Header;
