import { ProfileHeader } from "../../Components";
import { Auth } from "./Components";
import GlobalStyled from "../../Styled/Global.styled";

const AuthPage = () => {
  return (
    <GlobalStyled.ProfileBackgroundDiv>
      <ProfileHeader title={"인증하기"} />
      <Auth />
    </GlobalStyled.ProfileBackgroundDiv>
  );
};

export default AuthPage;
