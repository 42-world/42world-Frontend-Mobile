import React from 'react';
import Styled from './Loading.styled';
import { CircularProgress } from '@mui/material';

const Loading = () => {
  return (
    <Styled.LoadingBox>
      <CircularProgress />
    </Styled.LoadingBox>
  );
};

export default Loading;
