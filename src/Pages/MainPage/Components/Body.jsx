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
  const [famousArticles, setFamousArticles] = useState([]);
  const [freeArticles, setFreeArticles] = useState([]);
  const [anonyArticles, setAnonyArticles] = useState([]);
  const [notiArticles, setNotiArticles] = useState([]);

  const navi = useNavigate();
  const handleChangeTab = clicked => {
    console.log('click' + clicked);
    setHighlight(clicked);
  };

  const moveArticles = (category, articleId) => {
    console.log(category, articleId);
    navi(`/article/${articleId}`);
  };

  useEffect(async () => {
    let articles = await ArticleService.getArticles(1);
    setFreeArticles(articles);
    articles = await ArticleService.getArticles(2);
    setAnonyArticles(articles);
    articles = await ArticleService.getArticles(3);
    setNotiArticles(articles);
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
          <Home notiArticles={notiArticles} />
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
