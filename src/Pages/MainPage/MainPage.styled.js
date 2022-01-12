import styled from "styled-components";

const MenuModal = styled.div`
  display: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 400;
  bgcolor: background.paper;
  border: 2px solid #000;
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
