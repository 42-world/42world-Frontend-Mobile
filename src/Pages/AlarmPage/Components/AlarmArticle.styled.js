import styled from 'styled-components';
import GlobalStyled from 'Styled/Global.styled';

const AlramArticlesDiv = styled.div`
  padding: 0;
`;

const AlramArticleDiv = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0.7rem 0.5rem;
  border-bottom: 1px solid #ddd;
  background-color: #fff;
  ${props => (props.isNotice ? `cursor: default;` : `cursor: pointer;`)}
  ${props =>
    props.isRead && `background-color: ${GlobalStyled.theme.textColorLight};`}
  ${props =>
    props.isNotice && `background-color: ${GlobalStyled.theme.primary}99;`}

  .left {
    word-break: keep-all;
    white-space: nowrap;
    min-width: 2.5rem;
    font-size: 0.7rem;
    font-weight: 400;
  }
  .middle {
    font-size: 0.8rem;
    font-weight: 500;
    margin-left: 0.8rem;
    margin-right: auto;
    //margin: 0 0.8rem;
  }
  .right {
    word-break: keep-all;
    white-space: nowrap;
    font-size: 0.7rem;
    font-weight: 300;
  }
`;

const Styled = { AlramArticlesDiv, AlramArticleDiv };

export default Styled;
