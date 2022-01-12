import { Box } from "@mui/material";
import React from "react";
import {
  Header,
  Info,
  Withdrawal,
  SignOut,
  Authenticate,
  Articles,
} from "./Components";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Styled from "./ProfilePage.styled";

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
        <Header />
        <Styled.CustomedBox marginBottom="8px">
          <Info />
          <Articles />
        </Styled.CustomedBox>
        <Styled.CustomedBox marginBottom="8px">
          <Authenticate />
        </Styled.CustomedBox>
        <Styled.CustomedBox>
          <SignOut />
        </Styled.CustomedBox>
        <Styled.CustomedBox>
          <Withdrawal />
        </Styled.CustomedBox>
      </Styled.BackgroundDiv>
    </ThemeProvider>
  );
};

export default ProfilePage;
