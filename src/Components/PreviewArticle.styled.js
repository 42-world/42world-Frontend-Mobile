import styled from 'styled-components';
import GlobalStyled from '../Styled/Global.styled';

const PreviewArticleDiv = styled.div`
  cursor: pointer;
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0.9rem 0.3rem 0.9rem;
  border-bottom: 1px solid #e6e6e6;
  background-color: ${GlobalStyled.theme.previewArticleBackgroundColor};

  .top {
    display: inline-block;
    font-size: 0.95rem;
    font-weight: 700;
    align-items: left;
    margin-bottom: 0.15rem;
    width: 100%;

    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .middle {
    display: inline-block;
    font-size: 0.75rem;
    font-weight: 400;
    align-items: left;
    width: 100%;

    word-break: break-all;

    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .bottom {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: left;
    width: 100%;

    h2 {
      font-size: 0.6rem;
      font-weight: 400;
      color: rgba(0, 0, 0, 0.5);
      margin-right: 0.5rem;
      width: max-content;
      //padding-top: 0.5rem;
    }

    div {
      margin-left: 0.5rem;
      font-size: 0.9rem;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 0.3rem;
      svg {
        width: 1.4rem;
        margin-right: 0.1rem;
      }
    }

    .liked_icon {
      margin-left: auto;
      margin-bottom: 0.1rem;
      color: ${GlobalStyled.theme.likedIconColor};
      &::after {
        content: '${props => {
          if (props.article.likeCount > 0) return props.article.likeCount;
          else return '';
        }}';
      }
    }

    .comment_icon {
      color: ${GlobalStyled.theme.commentIconColor};
      &::after {
        content: '${props => {
          if (props.article.commentCount > 0) return props.article.commentCount;
          else return '';
        }}';
      }
    }
  }
`;

const Styled = { PreviewArticleDiv };

export default Styled;
