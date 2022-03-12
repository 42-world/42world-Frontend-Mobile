import styled from 'styled-components';
import GlobalStyled from 'Styled/Global.styled';

import ListItem from '@mui/material/ListItem';

const MenuModal = styled.div`
  display: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 400;
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
  .category_form {
    * {
      border: none !important;
      border-bottom: none !important;
    }
    *:hover {
      border: none !important;
      border-bottom: none !important;
    }
    *::before {
      border: none !important;
      border-bottom: none !important;
    }
    *::after {
      border: none !important;
      border-bottom: none !important;
    }

    select {
      color: ${GlobalStyled.theme.textWhite};
      font-size: 1.1rem;
      font-weight: 700;
      padding-top: 0;
      padding-bottom: 0;
    }
    svg {
      color: ${GlobalStyled.theme.textWhite};
    }
  }
`;

const CusListItem = styled(ListItem)`
  && {
    background-color: red;
  }
`;
const Styled = { MenuModal, MainHeader, MainBody, CusListItem };

export default Styled;
