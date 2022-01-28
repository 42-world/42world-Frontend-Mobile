import styled from 'styled-components';
import GlobalStyled from '../../Styled/Global.styled';

const ProfileImage = styled.div`
  ${props =>
    props.imagePath
      ? `background-image: url(${props.imagePath});`
      : 'background: #ddd;'}
  ${props => (props.width ? `width: ${props.width};` : 'width: 2.5rem;')}
  ${props => (props.width ? `height: ${props.width};` : 'height: 2.5rem;')}
  border-radius: 10%;
`;

const CommentContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;

  .text {
    padding: 0.5rem 0.8rem;
    background: rgba(196, 196, 196, 0.5);
    border-radius: 0.5rem;
    font-size: 0.75rem;
    font-weight: 300;
    margin-right: 0.3rem;
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
  position: fixed;
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

      &:hover {
        background-color: ${GlobalStyled.theme.secondary};
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

const ArticlePageDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .comment_list_div {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    .comment_div {
      border-bottom: 1px solid #e6e6e6;
      padding: 0.5rem;
      width: 100%;
      display: flex;
      flex-direction: column;

      .info {
        margin-bottom: 0.4rem;
        display: flex;
        flex-direction: row;
        align-items: center;

        .text {
          margin-left: 0.7rem;
          h1 {
            font-size: 0.9rem;
            font-weight: 600;
            line-height: 1.1;
          }
          h2 {
            font-size: 0.4rem;
            font-weight: 400;
          }
        }
      }
    }
  }

  .content_div {
    display: flex;
    flex-direction: column;
    width: 100%;

    .content_top {
      display: flex;
      flex-direction: row;
      padding: 0.7rem;
      border-bottom: 1px solid ${GlobalStyled.theme.borderColor};

      .title {
        display: flex;
        flex-direction: column;
        margin-right: auto;

        h1 {
          font-size: 1rem;
          font-weight: 600;
          color: ${GlobalStyled.theme.textColor};
          margin-bottom: 0.2rem;
        }

        .info {
          display: flex;
          flex-direction: row;

          h2 {
            color: ${GlobalStyled.theme.textColorSecondary};
            font-size: 0.7rem;
            font-weight: 300;
            margin-right: 0.8rem;
          }
        }
      }

      .edit_article {
        display: flex;
        flex-direction: row;
        align-items: flex-end;
        margin: 0 0.5rem;

        button {
          padding: 0;
          border: none;
          background: none;
          cursor: pointer;
          margin: 0.25rem;
          font-size: 0.7rem;
          font-weight: 400;
        }
      }
    }

    .content_middle {
      display: flex;
      padding: 0.7rem;
      font-size: 0.85rem;
      font-weight: 400;
      color: ${GlobalStyled.theme.textColor};
    }

    .content_bottom {
    }
  }
`;

const Styled = {
  ArticlePageDiv,
  ProfileImage,
  CommentContent,
  ArticleLikedDiv,
  CreateCommentDiv,
};

export default Styled;
