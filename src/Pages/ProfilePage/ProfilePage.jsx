import React from "react";
import { Info, Withdrawal, SignOut, Authenticate } from "./Components";

const ProfilePage = () => {
  return (
    <>
      {/* 각각이 다 모달로 뜨는 건가? */}
      <Info />
      <Authenticate />
      <SignOut />
      <Withdrawal />
    </>
  );
};

export default ProfilePage;
