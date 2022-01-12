import { ArrowForwardIos } from "@mui/icons-material";
import CommonStyled from "../Common.styled";
import { useNavigate } from "react-router-dom";

const Authenticate = () => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate("/profile/auth");
  };
  return (
    <>
      <CommonStyled.CustomDiv onClick={onClick}>
        <div>인증하기</div>
        <ArrowForwardIos />
      </CommonStyled.CustomDiv>
    </>
  );
};

export default Authenticate;
