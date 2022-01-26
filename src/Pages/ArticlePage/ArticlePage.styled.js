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
    }

    &::after {
      content: '${props => {
        if (props.liked_count > 0) return props.liked_count;
        else return '';
      }}';
    }
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
  }
`;

const Styled = { ArticlePageDiv, ProfileImage, CommentContent };

export default Styled;