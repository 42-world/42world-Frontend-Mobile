import styled from 'styled-components';

const AlramArticlesDiv = styled.div`
  padding: 1rem 0;
`;

const AlramArticleDiv = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0.2rem 0.45rem;
  border-bottom: 1px solid #e6e6e6;
  background-color: #fff;
  ${props => (props.isNotice ? `cursor: default;` : `cursor: pointer;`)}
  ${props => props.isRead && `color: gray;`}

  .left {
    word-break: keep-all;
    white-space: nowrap;
    font-size: 0.9rem;
    font-weight: 300;
  }
  .middle {
    font-size: 0.9rem;
    font-weight: 500;
    margin: 0 0.8rem;
  }
  .right {
    word-break: keep-all;
    white-space: nowrap;
    font-size: 0.9rem;
    font-weight: 300;
  }
`;

const Styled = { AlramArticlesDiv, AlramArticleDiv };

export default Styled;
