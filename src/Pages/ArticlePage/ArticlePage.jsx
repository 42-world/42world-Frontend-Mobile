import { useEffect, useState } from 'react';
import { useLocation, useParams, useSearchParams } from 'react-router-dom';
import { Body, Comment } from './Components';
import { Header } from '../../Components';
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
