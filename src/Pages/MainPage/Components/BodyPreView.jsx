import { PreviewArticle } from '../../../Components';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const BodyPreView = ({
  onChangeTab,
  highlight,
  recentArticles,
  famousArticles,
  moveArticles,
}) => {
  const handleChange = (event, value) => {
    onChangeTab(value);
    console.log(highlight);
  };

  return (
    <>
      <ListItem className="preview">
        <ListItemText>
          <Tabs value={highlight} onChange={handleChange}>
            <Tab label="최신글" value="recent" />
            <Tab label="인기글" value="famous" />
          </Tabs>
        </ListItemText>
      </ListItem>
      <div className="articles">
        {highlight === 'recent'
          ? recentArticles.map(article => {
              return (
                <PreviewArticle
                  article={article}
                  onClickArticle={() => moveArticles('recent', article.id)}
                />
              );
            })
          : famousArticles.map(article => {
              return (
                <PreviewArticle
                  article={article}
                  onClickArticle={() => moveArticles('famous', article.id)}
                />
                // 임시로 url 세팅.
              );
            })}
      </div>
    </>
  );
};
// 인기글과 최신글은 별개의 카테고리로 지정되지 않는다.
export default BodyPreView;
