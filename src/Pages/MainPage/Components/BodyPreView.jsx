import { PreviewArticle } from "../../../Components";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

const BodyPreView = ({
  handleToggle,
  highlight,
  recentArticles,
  famousArticles,
  moveArticles,
}) => {
  const handleChange = (event, value) => {
    console.log(event, value);
    if (value !== null) handleToggle(value);
  };
  return (
    <>
      <ListItem className="preview">
        <ListItemText>
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
        </ListItemText>
      </ListItem>
      <div className="articles">
        {highlight === "recent"
          ? recentArticles.map((article) => {
              return (
                <PreviewArticle
                  article={article}
                  handleOnclick={() => moveArticles("temp", article.id)}
                />
              );
            })
          : famousArticles.map((article) => {
              return (
                <PreviewArticle
                  article={article}
                  handleOnclick={() => moveArticles("temp", article.id)}
                />
              );
            })}
      </div>
    </>
  );
};
// 인기글과 최신글은 별개의 카테고리로 지정되지 않는다.
export default BodyPreView;
