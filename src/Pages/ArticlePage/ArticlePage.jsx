import React from 'react';
import { useParams } from 'react-router-dom';
import { Body, CommentContainer } from './Components';
import { Header } from '../../Components';

import Styled from './ArticlePage.styled';

const ArticlePage = () => {
  const { id } = useParams();

  // const [isLoading, setIsLoading] = useState(false);
  // const handleClick = () => {
  //   setIsLoading(true);
  //   setIsLoading(false);
  // };

  return (
    <>
      <Header />
      <Styled.ArticlePageDiv>
        <Body articleId={id} />
        <CommentContainer articleId={id} />
      </Styled.ArticlePageDiv>
    </>
  );
};

export default ArticlePage;
