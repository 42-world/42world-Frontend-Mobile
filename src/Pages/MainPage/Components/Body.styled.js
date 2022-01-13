import styled from 'styled-components';
import List from '@mui/material/List';

const ListDivider = styled.div`
  box-sizing: border-box;
  padding: ${props => props.margin || '0'};
  background-color: ${props => props.backgroundColor || '#ccc'};
`;

const StyledList = styled(List)`
  padding: 0;
`;

const BoardTitleDiv = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  //background-color: #eee;
  padding: 0.65rem 1.2rem;
  align-items: center;
  cursor: pointer;
  justify-content: space-between;

  .board_name {
    font-size: 1.1rem;
    font-weight: 700;
    &::after {
      content: ' >';
    }
  }

  .board_count {
    font-size: 0.9rem;
    font-weight: 400;
    color: #999;
    &::after {
      content: ' 개의 글';
    }
  }
`;

const Styled = { BoardTitleDiv, StyledList, ListDivider };

export default Styled;
