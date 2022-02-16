import { CircularProgress } from '@mui/material';

import Styled from './Loading.styled';

const Loading = () => {
  return (
    <Styled.LoadingBox>
      <CircularProgress />
    </Styled.LoadingBox>
  );
};

export default Loading;
