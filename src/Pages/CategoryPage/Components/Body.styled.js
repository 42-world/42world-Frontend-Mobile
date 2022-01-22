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
`;

const BoardTitleDiv = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  background-color: #53b7ba;
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
