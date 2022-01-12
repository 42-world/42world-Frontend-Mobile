import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Styled from "./Header.styled";

const Header = () => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate("/");
  };
  return (
    <Styled.HFlexBox>
      <Button onClick={onClick}>
        <ArrowBackIcon />
      </Button>
      <Styled.TitleDiv>내 정보</Styled.TitleDiv>
      {/* layout을 어떻게 해결해야 할 지.. */}
      <Button style={{ color: "transparent" }}>
        <ArrowBackIcon />
      </Button>
    </Styled.HFlexBox>
  );
};

export default Header;
