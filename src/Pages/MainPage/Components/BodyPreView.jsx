import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

import Styled from './BodyPreView.styled';

const BodyPreView = ({ onChangeTab, highlight }) => {
  const handleChange = (event, value) => {
    onChangeTab(value);
  };

  return (
    <>
      <ListItem className="preview" disablePadding={true}>
        <ListItemText>
          <Styled.StyledTabs
            value={highlight}
            onChange={handleChange}
            textColor="inherit"
            indicatorColor="secondary"
          >
            <Styled.StyledTab label="홈" value="home" />
            <Styled.StyledTab label="커뮤니티" value="community" />
          </Styled.StyledTabs>
        </ListItemText>
      </ListItem>
    </>
  );
};
// 인기글과 최신글은 별개의 카테고리로 지정되지 않는다.
export default BodyPreView;
