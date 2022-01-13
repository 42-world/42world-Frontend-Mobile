import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import List from '@mui/material/List';

import { PreviewArticle } from '../../Components';
import ArticleService from '../../Network/ArticleService';

// *로 받을 거면 검증 해주어야 함
const CategoryPage = () => {
  const [articles, setArticles] = useState([]);
  const loca = useLocation();
  const navi = useNavigate();
  const parse = loca.pathname.split('/');
  console.log(parse);
  console.log(parse[2]);

  const moveArticles = id => {
    navi(`/article/${id}`);
  };

  useEffect(() => {
    const mockupData = ArticleService;
    setArticles(mockupData.fetchAllArticle());
  }, []);

  return (
    <List component="nav" aria-label="mailbox folders">
      {articles.map(article => {
        return (
          <PreviewArticle
            article={article}
            onClickArticle={() => moveArticles(article.id)}
          />
        );
      })}
    </List>
  );
};

export default CategoryPage;
