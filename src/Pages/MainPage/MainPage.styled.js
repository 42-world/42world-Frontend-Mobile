import styled from "styled-components";

const MenuModal = styled.div`
  display: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: ;translate(-50%, -50%);
  width: 400;
  bgcolor: background.paper;
  border: 2px solid #000;
  width: 100%;
  height : 100%;

  // .alert-enter {
  //   opacity: 0;
  //   transform: scale(0.9);
  // }
  // .alert-enter-active {
  //   opacity: 1;
  //   transform: translateX(0);
  //   transition: opacity 300ms, transform 300ms;
  // }
  // .alert-exit {
  //   opacity: 1;
  // }
  // .alert-exit-active {
  //   opacity: 0;
  //   transform: scale(0.9);
  //   transition: opacity 300ms, transform 300ms;
  // }
`;
const MainHeader = styled.div`
  background-color: rgba(42, 45, 56, 1);
`;
const MainBody = styled.div`
  .mainpage-body {
    .preview {
      display: flex;
      flex-direction: row;
      .highlight {
        font-weight: bold;
        text-decoration: underline;
      }
    }
  }
`;
export default { MenuModal, MainHeader, MainBody };
