import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams, useLocation } from 'react-router-dom';
import qs from 'qs';

import BodyPreView from './BodyPreView';
import Community from './Community';
import Home from './Home';

import BestService from '../../../Network/BestService';
import ArticleService from '../../../Network/ArticleService';
import Styled from './Body.styled';

import Divider from '@mui/material/Divider';
import CreateIcon from '@mui/icons-material/Create';
import Fab from '@mui/material/Fab';

const MainBody = () => {
  const navi = useNavigate();
  const location = useLocation();
  const queryData = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });
  const [highlight, setHighlight] = useState(queryData.category || 'home');
  const [searchParams, setSearchParams] = useSearchParams();
  const [freeArticles, setFreeArticles] = useState([]);
  const [anonyArticles, setAnonyArticles] = useState([]);
  const [notiArticles, setNotiArticles] = useState([]);
  const [bestArticles, setBestArticles] = useState([]);

  const handleChangeTab = clicked => {
    setHighlight(clicked);
    setSearchParams(`category=${clicked}`);
  };

  const moveArticles = articleId => {
    navi(`/article/${articleId}`);
  };

  const handleClickWrite = () => {
    navi('/create');
  };

  useEffect(() => {
    const getFreeArticles = async () => {
      const response = await ArticleService.getArticles(1);
      setFreeArticles(response.data);
    };

    const getAnonyArticles = async () => {
      const response = await ArticleService.getArticles(2);
      setAnonyArticles(response.data);
    };

    const getNotiArticles = async () => {
      const response = await ArticleService.getArticles(3);
      setNotiArticles(response.data);
    };

    const getBestArticles = async () => {
      const response = await BestService.getBestArticle(3);
      setBestArticles(response);
    };
    getBestArticles();
    getFreeArticles();
    getAnonyArticles();
    getNotiArticles();
  }, []);

  return (
    <div className="mainpage-body">
      <Styled.StyledList
        disablePadding={true}
        component="nav"
        aria-label="mailbox folders"
      >
        <BodyPreView onChangeTab={handleChangeTab} highlight={highlight} />
        <Divider />
        {/*<Styled.ListDivider margin="0.7rem" />*/}
        <div className="articles">
          {highlight === 'home' ? (
            <Home notiArticles={notiArticles} />
          ) : (
            <Community
              bestArticles={bestArticles}
              freeArticles={freeArticles}
              anonyArticles={anonyArticles}
              moveArticles={moveArticles}
              navi={navi}
            />
          )}
        </div>
        <Fab
          className="fab_button"
          onClick={handleClickWrite}
          style={{ backgroundColor: '#53b7ba' }}
        >
          <CreateIcon />
        </Fab>
      </Styled.StyledList>
    </div>
  );
};

export default MainBody;
