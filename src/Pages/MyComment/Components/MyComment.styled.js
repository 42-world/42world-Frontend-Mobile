import styled from 'styled-components';

const MyCommentsDiv = styled.div`
  padding: 1rem 0;
`;

const MyCommentDiv = styled.div`
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
  min-height: 1.96rem;

  .article_board {
    font-size: 0.9rem;
    font-weight: 700;
    width: 35%;
    display: inline-block;
  }
  .article_title {
    font-size: 0.9rem;
    font-weight: 400;
    display: inline-block;
    width: 100%;
  }
  div {
    display: flex;
    align-items: center;
    margin-right: 0.3rem;
  }
`;

const Styled = { MyCommentsDiv, MyCommentDiv };

export default Styled;
