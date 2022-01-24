import styled from 'styled-components';
import ListItem from '@mui/material/ListItem';

const MainHeader = styled.div``;

const MainBody = styled.div`
  .mainpage-body {
    .preview {
      display: flex;
      flex-direction: row;
      .highlight {
        font-weight: bold;
        text-decoration: underline;
      }
    }
  }
`;

export default { MainHeader, MainBody };
