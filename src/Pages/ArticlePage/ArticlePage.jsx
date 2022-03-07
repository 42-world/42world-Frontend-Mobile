import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { useParams } from 'react-router-dom';

import { Header } from 'Components';
import { Article } from './Components';
import { Loading } from 'Components';

import Styled from './ArticlePage.styled';
import { ErrorPage } from 'Pages';

const ArticlePage = () => {
  const { id } = useParams();

  return (
    <ErrorBoundary fallback={<ErrorPage />}>
      <Header />
      <Suspense fallback={<Loading />}>
        <Styled.ArticlePageDiv>
          <Article articleId={id} />
        </Styled.ArticlePageDiv>
      </Suspense>
    </ErrorBoundary>
  );
};

export default ArticlePage;
