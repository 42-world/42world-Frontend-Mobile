import { useParams } from 'react-router-dom';

import { Header } from 'Components';
import { Body } from './Components';

import Styled from './ArticlePage.styled';

const ArticlePage = () => {
  const { id } = useParams();

  return (
    <>
      <Header />
      <Styled.ArticlePageDiv>
        <Body articleId={id} />
        {/* {categoryId !== 3 && <CommentContainer articleId={id} />} */}
      </Styled.ArticlePageDiv>
    </>
  );
};

export default ArticlePage;
