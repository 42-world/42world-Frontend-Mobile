import { useContext, useEffect } from 'react';
import {
  Info,
  Withdrawal,
  SignOut,
  Authenticate,
  Articles,
  GithubLink,
} from './Components';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../App';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import Styled from './ProfilePage.styled';
import GlobalStyled from '../../Styled/Global.styled';
import { ProfileHeader } from '../../Components';

const theme = createTheme({
  // mui Button 컬러 적용
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: '#ffffff',
        },
      },
    },
  },
});

const ProfilePage = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyled.ProfileBackgroundDiv>
        <ProfileHeader title={'내 정보'} />
        <Styled.CustomBox marginBottom="8px">
          <Info />
          <Articles />
        </Styled.CustomBox>
        <Styled.CustomBox marginBottom="8px">
          <Authenticate />
        </Styled.CustomBox>
        <Styled.CustomBox marginBottom="8px">
          <GithubLink />
        </Styled.CustomBox>
        <Styled.CustomBox>
          <SignOut />
        </Styled.CustomBox>
        <Styled.CustomBox>
          <Withdrawal />
        </Styled.CustomBox>
      </GlobalStyled.ProfileBackgroundDiv>
    </ThemeProvider>
  );
};

export default ProfilePage;
