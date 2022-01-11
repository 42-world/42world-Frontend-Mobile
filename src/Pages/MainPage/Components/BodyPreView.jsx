import Article from "./Article";

const BodyPreView = ({
  handleToggle,
  highlight,
  recentArticles,
  famousArticles,
  moveArticles
}) => {
  return (
    <>
      <div className="preview">
        <div
          onClick={() => handleToggle("recent")}
          className={highlight === "recent" && "highlight"}
        >
          최신글
        </div>
        <div
          onClick={() => handleToggle("famous")}
          className={highlight === "famous" && "highlight"}
        >
          인기글
        </div>
      </div>

      <div className="articles">
        {highlight === "recent"
          ? recentArticles.map((article, i) => {
              return <Article article={article}  handleOnclick={() => moveArticles("temp", i)}/>;
            })
          : famousArticles.map((article, i) => {
              return <Article article={article}  handleOnclick={() => moveArticles("temp", i)}/>;
            })}
      </div>
    </>
  );
};

export default BodyPreView;
