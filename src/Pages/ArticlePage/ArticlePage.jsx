import { Suspense, useContext } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { useParams } from 'react-router-dom';

import { Header } from 'Components';
import { Article } from './Components';
import { Comments } from './Components';
import { Loading } from 'Components';

import Styled from './ArticlePage.styled';
import { ErrorPage } from 'Pages';
import { AuthContext } from 'App';
import CreateComment from './Components/CreateComment';

const ArticlePage = () => {
  const { curUser } = useContext(AuthContext);
  const { id } = useParams();

  return (
    <ErrorBoundary fallback={<ErrorPage />}>
      <Header />
      <Suspense fallback={<Loading />}>
        <Styled.ArticlePageDiv>
          <Article articleId={id} currentUserId={curUser.id} />
          <Comments articleId={id} currentUserId={curUser.id} />
          <CreateComment articleId={id} />
        </Styled.ArticlePageDiv>
      </Suspense>
    </ErrorBoundary>
  );
};

export default ArticlePage;
