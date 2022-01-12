import { useState } from "react";
import { useSearchParams, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Header, Body, MenuModal } from "./Components";

import Styled from "./MainPage.styled";

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
      <Styled.MenuModal>
      <CSSTransition
        in={isModal}
        timeout={300}
        classNames="alert"
        unmountOnExit
      >
        <MenuModal handleOpenMenu={handleOpenMenu} />
      </CSSTransition>
      </Styled.MenuModal>
      
      <Styled.MainHeader>
      <Header handleOpenMenu={handleOpenMenu} />
      </Styled.MainHeader>
      <Styled.MainBody>
      <Body />
      </Styled.MainBody>
    </>
  );
};

export default MainPage;
