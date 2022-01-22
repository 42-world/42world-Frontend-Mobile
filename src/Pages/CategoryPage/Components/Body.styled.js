import styled from 'styled-components';
import List from '@mui/material/List';
import GlobalStyled from '../../../Styled/Global.styled';

const StyledList = styled(List)`
  && {
    padding: 0;
  }

  .scroll_loading_progress {
    margin: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      color: ${GlobalStyled.theme.primary};
    }
  }

  .fab_button {
    position: fixed;
    bottom: 1.8rem;
    right: 1.5rem;
    z-index: 100;
    background-color: ${GlobalStyled.theme.primary};
    color: ${GlobalStyled.theme.textLight};
    border-radius: 40%;
    cursor: 'pointer';
    @media (min-width: ${GlobalStyled.theme.mobileMinWidth}) {
      bottom: 1.8rem;
      left: calc(50% + 7rem);
    }
    &:hover {
      background-color: ${GlobalStyled.theme.secondary};
    }
  }
`;

const BoardTitleDiv = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  background-color: ${GlobalStyled.theme.primary};
  padding: 0.65rem 1.2rem;
  align-items: center;
  justify-content: space-between;

  .board_name {
    font-size: 1.1rem;
    font-weight: 700;
  }
`;

const Styled = { BoardTitleDiv, StyledList };

export default Styled;
