import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Menu = styled.div`
  display: flex;
  flex-direction: row;
`;

const initDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

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
    <>
      <initDiv>
        <div>
          <Menu>
            <div onClick={() => handleToggle("recent")}>최신글</div>
            <div onClick={() => handleToggle("famous")}>인기글</div>
          </Menu>
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
          {freeArticles.map((article, i) => {
            return <div onClick={() => moveArticles("free", i)}>{article}</div>; // 해당 글의 id가 인자로 넘어가야함
          })}
        </div>
        <div>
          <Link to="/category/anony">
            <div>익명게시판 -> </div>
          </Link>

          {anonyArticles.map((article, i) => {
            return (
              <div onClick={() => moveArticles("anony", i)}>{article}</div>
            );
          })}
        </div>
      </initDiv>
    </>
  );
};

export default Body;
