import styled, { css } from 'styled-components';
import GlobalStyled from 'Styled/Global.styled';

const ProfileImage = styled.img`
  ${props => (props.width ? `width: ${props.width};` : 'width: 2.5rem;')}
  ${props =>
    props.width ? `min-width: ${props.width};` : 'min-width: 2.5rem;'}
  ${props => (props.width ? `height: ${props.width};` : 'height: 2.5rem;')}
  border-radius: 10%;
  border: 0px;
`;

const CommentContent = styled.div`
  display: flex;
  ${props =>
    props.isMine
      ? css`
          flex-direction: row-reverse;
        `
      : css`
          flex-direction: row;
        `}
  align-items: flex-end;

  .text {
    padding: 0.5rem 0.8rem;
    ${props =>
      props.isMine
        ? css`
            background: ${GlobalStyled.theme.textColorMint};
            color: white;
          `
        : css`
            background: ${GlobalStyled.theme.textColorLightGray};
          `}
    border-radius: 0.5rem;
    font-size: 0.75rem;
    font-weight: 300;
    margin: 0 0.3rem;
  }

  .delete_button {
    background: none;
    border: none;
    font-size: 0.7rem;
    white-space: nowrap;
    margin-bottom: 0.2rem;
    margin-left: 1rem;
    margin-right: 0.2rem;
    color: ${GlobalStyled.theme.textColorSecondary};
  }

  .liked_count {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    margin-bottom: 0.2rem;
    margin-right: 1rem;
    font-size: 0.75rem;
    color: ${GlobalStyled.theme.likedCountColor};

    svg {
      width: 1rem;
      height: 1rem;
      margin-right: 0.1rem;
      cursor: pointer;
    }

    &::after {
      content: '${props => {
        if (props.liked_count > 0) return props.liked_count;
        else return '';
      }}';
    }
  }
`;

const CreateCommentDiv = styled.div`
  position: sticky;
  bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;

  width: 100%;
  margin: 1rem;

  @media (min-width: ${GlobalStyled.theme.mobileMinWidth}) {
    width: ${GlobalStyled.theme.desktopWidth};
  }

  form {
    width: 90%;
    background-color: ${GlobalStyled.theme.textColorLight};
    border-radius: 2rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 0.5rem 0.5rem 1rem;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.12), 0 3px 6px rgba(0, 0, 0, 0.19);

    input {
      width: 90%;
      color: ${GlobalStyled.theme.textColor};
      background-color: rgba(0, 0, 0, 0);
      border: none;
      &::placeholder {
        color: ${GlobalStyled.theme.textColorGray};
      }
      &:focus {
        outline: none;
        border: none;
      }
    }

    button {
      box-sizing: content-box;
      border: none;
      background: none;
      background-color: ${GlobalStyled.theme.primary};
      color: ${GlobalStyled.theme.textColorWhite};
      width: 40px;
      height: 40px;
      margin-left: 0.5rem;
      border-radius: 50%;
      box-shadow: none;

      &:hover {
        background-color: ${GlobalStyled.theme.primary};
      }
    }
  }
`;

const ArticleLikedDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-top: 1em;
  margin-bottom: 0.2rem;
  font-size: 0.95rem;
  color: ${GlobalStyled.theme.likedCountColor};

  svg {
    width: 2rem;
    height: 2rem;
    margin-right: 0.2rem;
    cursor: pointer;
  }

  &::after {
    content: '${props => {
      if (props.likedCount > 0) return props.likedCount;
      else return '';
    }}';
  }
`;

const ArticleCommentDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  color: ${GlobalStyled.theme.commentIconColor};
  font-size: 0.85rem;

  margin-top: 0.5rem;
  padding: 0.3rem 0.8rem 0.5rem 0.8rem;
  border-top: 1.5px solid ${GlobalStyled.theme.borderColor};

  svg {
    width: 1.3rem;
    height: 1.3rem;
    margin-top: 0.2rem;
    margin-right: 0.2rem;
  }

  &::after {
    content: '${props => {
      if (props.commentCount > 0) return props.commentCount;
      else return '';
    }}';
  }
`;

const ArticlePageDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .comment_list_div {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    }
  }

  .content_div {
    display: flex;
    flex-direction: column;
    width: 100%;

    .content_top {
      display: flex;
      flex-direction: row;
      align-items: flex-end;
      padding: 0.7rem;
      width: 100%;
      border-bottom: 1px solid ${GlobalStyled.theme.borderColor};

      .title {
        display: flex;
        flex-direction: column;
        width: 100%;

        h1 {
          font-size: 1rem;
          font-weight: 600;
          color: ${GlobalStyled.theme.textColor};
          margin-bottom: 0.2rem;
          padding-right: 0.5rem;
        }

        .info {
          display: flex;
          flex-direction: row;
          align-items: center;

          h2 {
            color: ${GlobalStyled.theme.textColorGray};
            font-size: 0.7rem;
            font-weight: 300;
            margin-right: 0.8rem;
          }

          .edit_article {
            display: flex;
            flex-direction: row;
            align-items: flex-end;
            margin: 0 0.5rem;
            margin-left: auto;

            button {
              padding: 0;
              border: none;
              width: max-content;
              background: none;
              cursor: pointer;
              margin: 0 0.3rem;
              font-size: 0.7rem;
              font-weight: 400;
            }
          }
        }
      }
    }

    .content_middle {
      padding: 0.7rem;
      font-size: 0.85rem;
      font-weight: 400;

      white-space: pre-wrap;
      white-space: -moz-pre-wrap;
      white-space: -pre-wrap;
      white-space: -o-pre-wrap;
      word-wrap: break-word;

      color: ${GlobalStyled.theme.textColor};
    }
  }
`;

const CommentDiv = styled.div`
  border-top: 1px solid #e6e6e6;
  padding: 0.5rem 0.8rem;
  width: 100%;
  display: flex;
  flex-direction: column;

  .info {
    margin-bottom: 0.4rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    ${props => props.isMine && `flex-direction: row-reverse;`}

    .text {
      margin: 0rem 0.7rem;
      ${props => props.isMine && `text-align: right;`}
      h1 {
        color: ${GlobalStyled.theme.textColor};
        font-size: 0.9rem;
        font-weight: 600;
        line-height: 1.1;
      }
      h2 {
        color: ${GlobalStyled.theme.textColorGray};
        font-size: 0.4rem;
        font-weight: 400;
      }
    }
  }

  .text {
    margin-left: 0.2rem;
    word-break: break-all;
  }
`;

const Styled = {
  ArticlePageDiv,
  ProfileImage,
  CommentContent,
  ArticleLikedDiv,
  ArticleCommentDiv,
  CreateCommentDiv,
  CommentDiv,
};

export default Styled;
