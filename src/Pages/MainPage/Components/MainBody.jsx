import { useState, useEffect, useCallback } from 'react';
import { useNavigate, useSearchParams, useLocation } from 'react-router-dom';
import BodyPreView from './BodyPreView';
import Community from './Community';
import Home from './Home';
import Styled from './Body.styled';
import ArticleService from '../../../Network/ArticleService';
import qs from 'qs';

import Divider from '@mui/material/Divider';

const MainBody = () => {
  const navi = useNavigate();
  const location = useLocation();
  const queryData = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });
  const [highlight, setHighlight] = useState(queryData.category || 'home');
  const [searchParams, setSearchParams] = useSearchParams();
  const [famousArticles, setFamousArticles] = useState([]);
  const [freeArticles, setFreeArticles] = useState([]);
  const [anonyArticles, setAnonyArticles] = useState([]);
  const [notiArticles, setNotiArticles] = useState([]);

  const handleChangeTab = clicked => {
    setHighlight(clicked);
    setSearchParams(`category=${clicked}`);
  };

  const moveArticles = articleId => {
    navi(`/article/${articleId}`);
  };
  const getFreeArticles = useCallback(async () => {
    const response = await ArticleService.getArticles(1);

    setFreeArticles(response.data);
  }, [setFreeArticles]);

  const getAnonyArticles = useCallback(async () => {
    const response = await ArticleService.getArticles(1);

    setAnonyArticles(response.data);
  }, [setAnonyArticles]);

  const getNotiArticles = useCallback(async () => {
    const response = await ArticleService.getArticles(1);

    setNotiArticles(response.data);
  }, [setNotiArticles]);

  useEffect(async () => {
    getFreeArticles();
    getAnonyArticles();
    getNotiArticles();
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

export default MainBody;
