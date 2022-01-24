import { PreviewArticle } from '../../../Components';

import Styled from './Body.styled';

const Community = ({
  famousArticles,
  freeArticles,
  anonyArticles,
  moveArticles,
  navi,
}) => {
  return (
    <>
      <Styled.StyledList
        disablePadding="true"
        component="nav"
        aria-label="mailbox folders"
      >
        {famousArticles.map(article => {
          return (
            <PreviewArticle
              article={article}
              onClickArticle={() => moveArticles('famous', article.id)}
            />
            // 임시로 url 세팅.
          );
        })}
      </Styled.StyledList>

      <Styled.StyledList
        disablePadding="true"
        component="nav"
        aria-label="mailbox folders"
      >
        <Styled.BoardTitleDiv
          className="article"
          onClick={() => navi('/category/free')}
          boardArticleCount={freeArticles.length}
        >
          <div className="board_name">자유게시판</div>
          <div className="board_count"></div>
        </Styled.BoardTitleDiv>

        {freeArticles.map(article => {
          return (
            <PreviewArticle
              article={article}
              onClickArticle={() => moveArticles('free', article.id)}
            />
          );
        })}
      </Styled.StyledList>

      <Styled.StyledList
        disablePadding="true"
        component="nav"
        aria-label="mailbox folders"
      >
        <Styled.BoardTitleDiv
          className="article"
          onClick={() => navi('/category/anony')}
          boardArticleCount={anonyArticles.length}
        >
          <div className="board_name">익명게시판</div>
          <div className="board_count"></div>
        </Styled.BoardTitleDiv>

        {anonyArticles.map(article => {
          return (
            <PreviewArticle
              article={article}
              onClickArticle={() => moveArticles('annoy', article.id)}
            />
          );
        })}
      </Styled.StyledList>
    </>
  );
};

export default Community;
