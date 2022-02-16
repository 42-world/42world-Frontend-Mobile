import { Footer, ProfileHeader } from 'Components';
import {
  Info,
  SignOut,
  Authenticate,
  Articles,
  GithubLink,
} from './Components';

import { createTheme, ThemeProvider } from '@mui/material/styles';

import GlobalStyled from 'Styled/Global.styled';
import Styled from './ProfilePage.styled';

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
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyled.ProfileBackgroundDiv isProfile={true}>
          <ProfileHeader title={'내 정보'} />
          <Styled.CustomBox marginBottom="16px">
            <Info />
            <Articles />
          </Styled.CustomBox>
          <Styled.CustomBox marginBottom="16px">
            <Authenticate />
          </Styled.CustomBox>
          <Styled.CustomBox marginBottom="16px">
            <GithubLink />
          </Styled.CustomBox>
          <Styled.CustomBox>
            <SignOut />
          </Styled.CustomBox>
          <Footer isProfile={true} />
        </GlobalStyled.ProfileBackgroundDiv>
      </ThemeProvider>
    </>
  );
};

export default ProfilePage;
