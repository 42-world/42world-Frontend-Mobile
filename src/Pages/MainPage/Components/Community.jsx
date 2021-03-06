import { Fragment } from 'react';
import { List } from '@mui/material';

import { PreviewArticle } from 'Components';

import Styled from './Body.styled';

const Community = ({
  bestArticles,
  freeArticles,
  anonyArticles,
  moveArticles,
  navi,
}) => {
  return (
    <>
      <List disablePadding={true} component="nav" aria-label="mailbox folders">
        {bestArticles &&
          bestArticles.map(article => {
            return (
              <Fragment key={article.id}>
                <PreviewArticle
                  key={article.id}
                  id={article.id}
                  article={article}
                  isBestArticle={true}
                  onClickArticle={() => moveArticles(article.id)}
                />
              </Fragment>
            );
          })}
      </List>
      <Styled.ListDivider /> {/*  margin="0.4rem"  */}
      <Styled.StyledList
        disablePadding={true}
        component="nav"
        aria-label="mailbox folders"
      >
        <Styled.BoardTitleDiv
          className="article"
          onClick={() => navi('/category/1')}
          boardArticleCount={freeArticles?.length}
        >
          <div className="board_name">자유게시판</div>
          <div className="board_count"></div>
        </Styled.BoardTitleDiv>

        {freeArticles &&
          freeArticles.slice(0, 3).map(article => {
            return (
              <PreviewArticle
                key={article.id}
                id={article.id}
                article={article}
                onClickArticle={() => moveArticles(article.id)}
              />
            );
          })}
      </Styled.StyledList>
      <Styled.ListDivider />
      {/* <Styled.StyledList
        disablePadding={true}
        component="nav"
        aria-label="mailbox folders"
      >
        <Styled.BoardTitleDiv
          className="article"
          onClick={() => navi('/category/2')}
          boardArticleCount={anonyArticles?.length}
        >
          <div className="board_name">익명게시판</div>
          <div className="board_count"></div>
        </Styled.BoardTitleDiv>

        {anonyArticles &&
          anonyArticles.slice(0, 3).map(article => {
            return (
              <PreviewArticle
                id={article.id}
                article={article}
                onClickArticle={() => moveArticles(article.id)}
              />
            );
          })}
      </Styled.StyledList> */}
    </>
  );
};

export default Community;
