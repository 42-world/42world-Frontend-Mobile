import { useEffect, useState } from 'react';
import { useLocation, useParams, useSearchParams } from 'react-router-dom';
import { Body, Header, Comment } from './Components';

const ArticlePage = () => {
  const { id } = useParams();
  return (
    <>
      <Header />
      <Body articleId={id} />
      <Comment articleId={id} />
    </>
  );
};

export default ArticlePage;
