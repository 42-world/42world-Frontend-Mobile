import { useState, useEffect } from "react";
import { useSearchParams, useLocation } from "react-router-dom";
import { Body, MenuModal } from "./Components";
import { Header } from "../../Components";

import Styled from "./MainPage.styled";

const MainPage = () => {
  const [isModal, setIsModal] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const loca = useLocation();

  const handleOpenMenu = () => {
    if (loca.search === "") {
      setSearchParams("mode=drawer");
      setIsModal(true);
    } else {
      setSearchParams("");
      setIsModal(false);
    }
  };
  useEffect(() => {
    if (loca.search === "?mode=drawer") {
      setIsModal(true);
    }
  }, []);

  return (
    <>
      <Styled.MenuModal>
        <MenuModal
          open={isModal}
          handleClose={handleOpenMenu}
          isSearch={false}
        />
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
{
  /* <Styled.MenuModal>
       <CSSTransition
          in={isModal}
          timeout={300}
          classNames="alert"
          unmountOnExit
        > 

       </CSSTransition>
      </Styled.MenuModal> */
}
