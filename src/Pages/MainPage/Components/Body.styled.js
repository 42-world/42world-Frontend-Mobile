import styled from 'styled-components';

import List from '@mui/material/List';

import GlobalStyled from 'Styled/Global.styled';

const ListDivider = styled.div`
  box-sizing: border-box;
  padding: ${props => props.margin || '0'};
  background-color: ${props =>
    props.backgroundColor || GlobalStyled.theme.lineGray2};
`;

const StyledList = styled(List)`
  padding: 0;

  .fab_button {
    position: fixed;
    bottom: 1.8rem;
    right: 1.5rem;
    z-index: 100;
    background-color: ${GlobalStyled.theme.secondary};
    color: ${GlobalStyled.theme.buttonWhite};
    border-radius: 40%;
    cursor: 'pointer';
    @media (min-width: ${GlobalStyled.theme.mobileMinWidth}) {
      bottom: 1.8rem;
      left: calc(50% + 7rem);
    }
    &:hover {
      background-color: ${GlobalStyled.theme.primary};
    }
  }
`;
const BoardTitleDiv = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  background-color: ${GlobalStyled.theme.backgroundGray1};
  color: ${GlobalStyled.theme.textBlack};
  border-bottom: 1px solid ${GlobalStyled.theme.lineGray2};
  // padding: 0.65rem 1.2rem;
  padding: 0.65rem 1rem;
  align-items: center;
  cursor: pointer;
  justify-content: space-between;

  .board_name {
    font-size: 1.1rem;
    font-weight: 700;
    &::after {
      margin-left: 10px;
      content: '>';
    }
  }

  .board_count {
    font-size: 0.9rem;
    font-weight: 400;
    &::after {
      content: '${props => props && props.boardArticleCount} 개의 글';
    }
  }
`;

const CheckInHeader = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${GlobalStyled.theme.backgroundBlue1};
  flex-direction: row;
  align-items: center;
  padding: 0.5rem 1.2rem;
  p {
    font-size: 1rem;
    font-weight: 600;
  }
  a {
    text-decoration: none;
    outline: none;
    border: none;
  }
  button {
    padding: 0.2rem 0.5rem;
    background-color: ${GlobalStyled.theme.buttonBlue2};
  }
`;

const CheckInBody = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 0.5rem 1.2rem 1.8rem;
  background-color: ${GlobalStyled.theme.backgroundBlue1};

  .circular_progress_bar_div {
    width: 7.3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    h2 {
      font-size: 1.1rem;
      font-weight: 700;
      margin-bottom: 0.3rem;
      color: ${GlobalStyled.theme.textBlack};
    }

    .circular_progress_bar {
      svg {
        path {
          stroke-linecap: butt;
        }
        text {
          font-size: 0.9rem;
          font-weight: 600;
        }
      }
    }
  }

  .gaepo {
    .CircularProgressbar-trail {
      stroke: ${GlobalStyled.theme.backgroundGray3}80;
    }
    .CircularProgressbar-path {
      stroke: ${GlobalStyled.theme.primary};
    }
    .CircularProgressbar-text {
      fill: ${GlobalStyled.theme.textBlack};
      //fill: ${GlobalStyled.theme.primary};
    }
  }

  .seocho {
    .CircularProgressbar-trail {
      stroke: ${GlobalStyled.theme.backgroundGray3}80;
    }
    .CircularProgressbar-path {
      stroke: ${GlobalStyled.theme.primaryEcole};
    }
    .CircularProgressbar-text {
      fill: ${GlobalStyled.theme.textBlack};
      //fill: ${GlobalStyled.theme.primaryEcole};
    }
  }
`;

const Styled = {
  BoardTitleDiv,
  StyledList,
  ListDivider,
  CheckInHeader,
  CheckInBody,
};

export default Styled;
