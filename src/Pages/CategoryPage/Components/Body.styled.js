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

const Styled = { StyledList };

export default Styled;
