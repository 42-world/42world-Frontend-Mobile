import { useEffect, useState } from 'react';
import { useLocation, useParams, useSearchParams } from 'react-router-dom';
import { Body, Comment } from './Components';
import { Header } from '../../Components';

import Styled from './ArticlePage.styled';

const ArticlePage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const handleClick = () => {
    setIsLoading(true);
    setIsLoading(false);
  };
  const { id } = useParams();
  useEffect(() => {
    console.log('re render!');
  }, []);
  return (
    <>
      <Header />
      <Styled.ArticlePageDiv>
        <Body articleId={id} />
        <Comment articleId={id} handleClick={handleClick} />
      </Styled.ArticlePageDiv>
    </>
  );
};

export default ArticlePage;
