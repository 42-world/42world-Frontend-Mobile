import React from "react";
import {
  Info,
  Withdrawal,
  SignOut,
  Authenticate,
  Articles,
} from "./Components";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Styled from "./ProfilePage.styled";
import { ProfileHeader } from "../Components";

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: "#ffffff",
        },
      },
    },
    MuiButtonGroup: {
      styleOverrides: {
        root: {
          borderColor: "#ffffff",
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          color: "#ffffff",
        },
      },
    },
  },
});

const ProfilePage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Styled.BackgroundDiv>
        <ProfileHeader title={"내 정보"} />
        <Styled.CustomBox marginBottom="8px">
          <Info />
          <Articles />
        </Styled.CustomBox>
        <Styled.CustomBox marginBottom="8px">
          <Authenticate />
        </Styled.CustomBox>
        <Styled.CustomBox>
          <SignOut />
        </Styled.CustomBox>
        <Styled.CustomBox>
          <Withdrawal />
        </Styled.CustomBox>
      </Styled.BackgroundDiv>
    </ThemeProvider>
  );
};

export default ProfilePage;
