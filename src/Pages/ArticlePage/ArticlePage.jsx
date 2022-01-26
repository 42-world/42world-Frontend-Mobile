import { useEffect, useState } from 'react';
import { useLocation, useParams, useSearchParams } from 'react-router-dom';
import { Body, Comment } from './Components';
import { Header } from '../../Components';

import Styled from './ArticlePage.styled';

const ArticlePage = () => {
  const { id } = useParams();
  return (
    <>
      <Header />
      <Styled.ArticlePageDiv>
        <Body articleId={id} />
        <Comment articleId={id} />
      </Styled.ArticlePageDiv>
    </>
  );
};

export default ArticlePage;
