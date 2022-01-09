import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

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

  const changeBoard = (dest) => {
    navi(dest);
  };
  return (
    <>
      <div>
        <div onClick={() => handleToggle("recent")}>최신글</div>
        <div onClick={() => handleToggle("famous")}>인기글</div>
        <div>
          {highlight === "recent"
            ? recentArticles.map((article) => {
                return <div>{article}</div>;
              })
            : famousArticles.map((article) => {
                return <div>{article}</div>;
              })}
        </div>
      </div>
      <div>
        <Link to="/category/free">
          <div>자유게시판 -> </div>
        </Link>
        {freeArticles.map((article) => {
          return <div>{article}</div>;
        })}
      </div>
      <div>
        <Link to="/category/anony">
          <div>익명게시판 -> </div>
        </Link>

        {anonyArticles.map((article) => {
          return <div>{article}</div>;
        })}
      </div>
    </>
  );
};

export default Body;
