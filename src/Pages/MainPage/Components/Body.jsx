import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BodyPreView from './BodyPreView';

import { PreviewArticle } from '../../../Components';
import ArticleService from '../../../Network/ArticleService_old';
import Styled from './Body.styled';

const Body = () => {
  const [highlight, setHighlight] = useState('recent');
  const [recentArticles, setRecentArticles] = useState(['최근글1', '최근글2']);
  const [famousArticles, setFamousArticles] = useState(['인기글1', '인기글2']);
  const [freeArticles, setFreeArticles] = useState(['자유글1', '자유글2']);
  const [anonyArticles, setAnonyArticles] = useState(['익명글1', '익명글2']);

  const navi = useNavigate();
  const handleChangeTab = clicked => {
    console.log('click' + clicked);
    setHighlight(clicked);
  };

  const moveArticles = (category, articleId) => {
    console.log(category, articleId);
    navi(`/article/${articleId}`);
  };

  useEffect(() => {
    const mockupData = ArticleService;
    console.log(mockupData.fetchAllArticle());
    setRecentArticles(mockupData.fetchAllArticle());
    setFamousArticles(mockupData.fetchAllArticle());
    setFreeArticles(mockupData.fetchAllArticle());
    setAnonyArticles(mockupData.fetchAllArticle());
  }, []);

  return (
    <div className="mainpage-body">
      <Styled.StyledList
        disablePadding="true"
        component="nav"
        aria-label="mailbox folders"
      >
        <BodyPreView
          onChangeTab={handleChangeTab}
          highlight={highlight}
          recentArticles={recentArticles}
          famousArticles={famousArticles}
          moveArticles={moveArticles}
        />
      </Styled.StyledList>

      <Styled.StyledList
        disablePadding="true"
        component="nav"
        aria-label="mailbox folders"
      >
        <Styled.BoardTitleDiv
          className="article"
          onClick={() => navi('/category/free')}
          boardArticleCount={freeArticles.length}
        >
          <div className="board_name">자유게시판</div>
          <div className="board_count"></div>
        </Styled.BoardTitleDiv>

        {freeArticles.map(article => {
          return (
            <PreviewArticle
              article={article}
              onClickArticle={() => moveArticles('free', article.id)}
            />
          );
        })}
      </Styled.StyledList>

      {/*<Styled.ListDivider margin="0.7rem" />*/}

      <Styled.StyledList
        disablePadding="true"
        component="nav"
        aria-label="mailbox folders"
      >
        <Styled.BoardTitleDiv
          className="article"
          onClick={() => navi('/category/anony')}
          boardArticleCount={anonyArticles.length}
        >
          <div className="board_name">익명게시판</div>
          <div className="board_count"></div>
        </Styled.BoardTitleDiv>

        {anonyArticles.map(article => {
          return (
            <PreviewArticle
              article={article}
              onClickArticle={() => moveArticles('annoy', article.id)}
            />
          );
        })}
      </Styled.StyledList>
    </div>
  );
};

export default Body;
