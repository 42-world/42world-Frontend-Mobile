import styled from 'styled-components';

const PreviewArticleDiv = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0.2rem 0.45rem;
  border-bottom: 1px solid #e6e6e6;

  div {
    display: flex;
    align-items: center;
    margin-right: 0.5rem;
  }

  .favorite_icon {
    &::after {
      content: '${props => {
        if (props.article.liked_count > 0) return props.article.liked_count;
        else return '';
      }}';
    }
  }

  .comment_icon {
    &::after {
      content: '${props => {
        if (props.article.comment_count > 0) return props.article.comment_count;
        else return '';
      }}';
    }
  }
`;

const Styled = { PreviewArticleDiv };

export default Styled;
