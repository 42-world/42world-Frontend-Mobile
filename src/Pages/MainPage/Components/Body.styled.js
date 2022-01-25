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
  background-color: #53b7ba;
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
    color: rgba(0, 0, 0, 0.5);
    &::after {
      content: '${props => props.boardArticleCount} 개의 글';
    }
  }
`;

const CheckInHeader = styled.div`
  display: flex;
  justify-content: space-around;
`;

const CheckInBody = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Styled = {
  BoardTitleDiv,
  StyledList,
  ListDivider,
  CheckInHeader,
  CheckInBody,
};

export default Styled;
