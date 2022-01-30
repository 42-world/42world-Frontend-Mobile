import styled from 'styled-components';
import GlobalStyled from '../../../Styled/Global.styled';

const MyCommentsDiv = styled.div`
  padding: 0.5rem 0;
  max-height: 80%;
  overflow-y: auto;
`;

const MyCommentDiv = styled.div`
  cursor: pointer;
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-bottom: 1px solid #e6e6e6;
  background-color: #fff;
  min-height: 6rem;
  padding: 0.5rem 1rem;

  .top {
    color: ${GlobalStyled.theme.textColorGray};
    font-size: 0.6rem;
  }
  .middle {
    // 쌍따옴표 없으면 previewText 안 쓰고 css로만 해결 가능
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 0.9rem;
  }
  .bottom {
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.75rem;
    color: ${GlobalStyled.theme.textColorGray};

    *:nth-child(1) {
      font-weight: bold;
    }

    *:nth-child(2) {
      width: 60%;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
`;

const Styled = { MyCommentsDiv, MyCommentDiv };

export default Styled;
