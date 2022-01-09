import { useState } from "react";
import { useSearchParams, useLocation } from "react-router-dom";
import { Header, Body, MenuModal } from "./Components";
import styled from "styled-components";

const MainPage = () => {
  const [isModal, setIsModal] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const loca = useLocation();

  const handleOpenMenu = () => {
    if (loca.search === "") {
      setSearchParams("mode=drawer");
      setIsModal(true);
      console.log(isModal);
    } else {
      setSearchParams("");
      setIsModal(false);
      console.log(isModal);
    }
  };

  return (
    <>
      {loca.search && (
        <>
          <MenuModal handleOpenMenu={handleOpenMenu} />
        </>
      )}
      <Header handleOpenMenu={handleOpenMenu} />
      <Body />
    </>
  );
};

export default MainPage;
