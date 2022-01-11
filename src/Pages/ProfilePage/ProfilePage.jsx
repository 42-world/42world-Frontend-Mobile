import React from "react";
import {
  Header,
  Info,
  Withdrawal,
  SignOut,
  Authenticate,
  Articles,
} from "./Components";

const ProfilePage = () => {
  return (
    <>
      {/* 각각이 다 모달로 뜨는 건가? */}
      <Header />
      <Info />
      <Articles type="좋아요 누른 글" />
      <Articles type="내가 쓴 글" />
      <Articles type="내가 쓴 댓글" />
      <Authenticate />
      <SignOut />
      <Withdrawal />
    </>
  );
};

export default ProfilePage;
