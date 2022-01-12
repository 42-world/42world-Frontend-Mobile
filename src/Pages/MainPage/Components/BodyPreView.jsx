import PreviewArticle from "./PreviewArticle";

import ListItem from "@mui/material/ListItem";
import ToggleButton from "@mui/material/ToggleButton";

import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

const BodyPreView = ({
  handleToggle,
  highlight,
  recentArticles,
  famousArticles,
  moveArticles
}) => {
  const handleChange = (event, value) => {
    console.log(event, value);
    handleToggle(value);
  };
  return (
    <>
      <ListItem className="preview">
        <ToggleButtonGroup
          color="primary"
          value={highlight}
          exclusive
          onChange={handleChange}
        >
          <ToggleButton
            value="recent"
            className={highlight === "recent" && "highlight"}
          >
            최신글
          </ToggleButton>
          <ToggleButton
            value="famous"
            className={highlight === "famous" && "highlight"}
          >
            인기글
          </ToggleButton>
        </ToggleButtonGroup>
      </ListItem>

      <div className="articles">
        {highlight === "recent"
          ? recentArticles.map((article, i) => {
              return (
                <PreviewArticle
                  article={article}
                  handleOnclick={() => moveArticles("temp", i)}
                />
              );
            })
          : famousArticles.map((article, i) => {
              return (
                <PreviewArticle
                  article={article}
                  handleOnclick={() => moveArticles("temp", i)}
                />
              );
            })}
      </div>
    </>
  );
};

export default BodyPreView;
