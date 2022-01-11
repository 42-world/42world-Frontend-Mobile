import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import BodyPreView from "./BodyPreView";
import PreviewArticle from "./PreviewArticle";

const Body = () => {
  const [highlight, setHighlight] = useState("recent");
  const [recentArticles, setRecentArticles] = useState(["최근글1", "최근글2"]);
  const [famousArticles, setFamousArticles] = useState(["인기글1", "인기글2"]);
  const [freeArticles, setFreeArticles] = useState(["자유글1", "자유글2"]);
  const [anonyArticles, setAnonyArticles] = useState(["익명글1", "익명글2"]);

  const navi = useNavigate();

  const handleToggle = (clicked) => {
    if (highlight !== clicked) setHighlight(clicked);
  };

  const moveArticles = (category, articleId) => {
    console.log(category, articleId);
    navi(`category/${category}/${articleId}`);
  };
  return (
    <div className="mainpage-body">
      <BodyPreView
        handleToggle={handleToggle}
        highlight={highlight}
        recentArticles={recentArticles}
        famousArticles={famousArticles}
        moveArticles={moveArticles}
      />

      <div>
        <Link to="/category/free">
          <div>자유게시판 -> </div>
        </Link>
        {freeArticles.map((article, i) => {
          return (
            <PreviewArticle
              article={article}
              handleOnclick={() => moveArticles("free", i)}
            />
          ); // 해당 글의 id가 인자로 넘어가야함
        })}
      </div>
      <div>
        <Link to="/category/anony">
          <div>익명게시판 -> </div>
        </Link>

        {anonyArticles.map((article, i) => {
          return (
            <PreviewArticle
              article={article}
              handleOnclick={() => moveArticles("annoy", i)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
