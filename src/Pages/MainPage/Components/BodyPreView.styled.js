import styled from 'styled-components';

import { Tab, Tabs } from '@mui/material';

const StyledTabs = styled(Tabs)`
  && {
    line-height: 1;
    min-height: 1rem;
  }
`;

const StyledTab = styled(Tab)`
  && {
    box-sizing: border-box;
    cursor: pointer;
    font-size: 0.9rem;
    font-weight: bold;
    padding: 0.5rem 0.4rem;
    margin: 0rem 0.5rem;
    line-height: 1.5;
    min-height: 1rem;
    min-width: max-content;
  }
  &:first-child {
    margin-left: 0.7rem;
  }
`;

const Styled = { StyledTabs, StyledTab };

export default Styled;
