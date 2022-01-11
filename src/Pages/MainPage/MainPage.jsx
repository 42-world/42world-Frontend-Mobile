import { useState } from "react";
import { useSearchParams, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Header, Body, MenuModal } from "./Components";
import "./MainPage.scss";

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
      <CSSTransition
        in={isModal}
        timeout={300}
        classNames="alert"
        unmountOnExit
      >
        <MenuModal handleOpenMenu={handleOpenMenu} />
      </CSSTransition>

      <Header handleOpenMenu={handleOpenMenu} />
      <Body />
    </>
  );
};

export default MainPage;
