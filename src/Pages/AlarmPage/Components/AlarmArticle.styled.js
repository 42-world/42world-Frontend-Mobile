import styled from 'styled-components';

const AlramArticlesDiv = styled.div`
  padding: 1rem 0;
`;

const AlramArticleDiv = styled.div`
  cursor: pointer;
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0.2rem 0.45rem;
  border-bottom: 1px solid #e6e6e6;
  background-color: #fff;
  ${props => props.isRead && `color: gray;`}

  .left {
    font-size: 0.9rem;
    font-weight: 300;
  }
  .middle {
    font-size: 0.9rem;
    font-weight: 500;
  }
  .right {
    font-size: 0.9rem;
    font-weight: 300;
  }
`;

const Styled = { AlramArticlesDiv, AlramArticleDiv };

export default Styled;
