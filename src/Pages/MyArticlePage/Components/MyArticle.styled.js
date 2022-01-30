import styled from 'styled-components';

const MyArticlesDiv = styled.div`
  padding: 0.5rem 0;
  max-height: 80%;
  overflow-y: auto;
`;

const MyArticleDiv = styled.div`
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

  .article_board {
    font-size: 0.9rem;
    font-weight: 700;
    width: 40%;
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

  .liked_icon {
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

const Styled = { MyArticlesDiv, MyArticleDiv };

export default Styled;
