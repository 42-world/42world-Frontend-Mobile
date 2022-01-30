import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Body, CommentContainer } from './Components';
import { Header } from '../../Components';

import Styled from './ArticlePage.styled';
import ArticleService from 'Network/ArticleService';
const ArticlePage = () => {
  const { id } = useParams();
  const [categoryId, setCategoryId] = useState(0);
  const getCate = async () => {
    const result = await ArticleService.getArticlesById(id);
    setCategoryId(result.categoryId);
  };
  useEffect(() => {
    getCate();
  }, []);

  return (
    <>
      <Header />
      <Styled.ArticlePageDiv>
        <Body articleId={id} categoryId={categoryId} />
        <CommentContainer articleId={id} />
      </Styled.ArticlePageDiv>
    </>
  );
};

export default ArticlePage;
