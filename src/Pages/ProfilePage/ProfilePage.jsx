import React from "react";
import {
  Info,
  Withdrawal,
  SignOut,
  Authenticate,
  Articles,
} from "./Components";
import Styled from "./ProfilePage.styled";
import { ProfileHeader } from "../Components";

const ProfilePage = () => {
  return (
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
  );
};

export default ProfilePage;
