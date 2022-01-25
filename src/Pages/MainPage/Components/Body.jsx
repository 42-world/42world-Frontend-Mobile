import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BodyPreView from './BodyPreView';

import Community from './Community';
import Home from './Home';

import Styled from './Body.styled';
import ArticleService from '../../../Network/ArticleService';

import Divider from '@mui/material/Divider';

const Body = () => {
  const [highlight, setHighlight] = useState('home');
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
    // const mockupData = ArticleService;
    // console.log(mockupData.fetchAllArticle());
    // setFamousArticles(ArticleService.categoriesId());
    setFreeArticles(!ArticleService.getArticles(1));
    console.log(ArticleService);
    setAnonyArticles(!ArticleService.getArticles(2));
    console.log(ArticleService);
  }, []);

  return (
    <div className="mainpage-body">
      <Styled.StyledList
        disablePadding="true"
        component="nav"
        aria-label="mailbox folders"
      >
        <BodyPreView onChangeTab={handleChangeTab} highlight={highlight} />
      </Styled.StyledList>
      <Divider />
      {/*<Styled.ListDivider margin="0.7rem" />*/}
      <div className="articles">
        {highlight === 'home' ? (
          <Home />
        ) : (
          <Community
            famousArticles={famousArticles}
            freeArticles={freeArticles}
            anonyArticles={anonyArticles}
            moveArticles={moveArticles}
            navi={navi}
          />
        )}
      </div>
    </div>
  );
};

export default Body;
