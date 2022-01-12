import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import BodyPreView from "./BodyPreView";
import PreviewArticle from "./PreviewArticle";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

import ArticleService from "../../../Network/ArticleService";

const Body = () => {
  const [highlight, setHighlight] = useState("recent");
  const [recentArticles, setRecentArticles] = useState(["최근글1", "최근글2"]);
  const [famousArticles, setFamousArticles] = useState(["인기글1", "인기글2"]);
  const [freeArticles, setFreeArticles] = useState(["자유글1", "자유글2"]);
  const [anonyArticles, setAnonyArticles] = useState(["익명글1", "익명글2"]);

  const navi = useNavigate();
  const handleToggle = clicked => {
    if (highlight !== clicked) setHighlight(clicked);
  };

  const moveArticles = (category, articleId) => {
    console.log(category, articleId);
    navi(`category/${category}/${articleId}`);
  };

  const moveCategoty = dst => {
    navi(dst);
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
      <List component="nav" aria-label="mailbox folders">
        <BodyPreView
          handleToggle={handleToggle}
          highlight={highlight}
          recentArticles={recentArticles}
          famousArticles={famousArticles}
          moveArticles={moveArticles}
        />
      </List>

      <List component="nav" aria-label="mailbox folders">
        <ListItem
          button
          divider
          className="article"
          onClick={() => moveCategoty("/category/free")}
        >
          <ListItemText>
            자유게시판 -> {freeArticles.length}개의 글
          </ListItemText>
        </ListItem>

        {freeArticles.map(article => {
          return (
            <PreviewArticle
              article={article}
              handleOnclick={() => moveArticles("free", article.id)}
            />
          );
        })}
      </List>
      <List component="nav" aria-label="mailbox folders">
        <ListItem
          button
          divider
          className="article"
          onClick={() => moveCategoty("/category/anony")}
        >
          <ListItemText>
            익명게시판 -> {anonyArticles.length}개의 글
          </ListItemText>
        </ListItem>

        {anonyArticles.map(article => {
          return (
            <PreviewArticle
              article={article}
              handleOnclick={() => moveArticles("annoy", article.id)}
            />
          );
        })}
      </List>
    </div>
  );
};

export default Body;
