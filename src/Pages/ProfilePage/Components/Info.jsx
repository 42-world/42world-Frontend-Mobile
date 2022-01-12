import { ArrowForwardIos, Person } from "@mui/icons-material";
import Styled from "./Info.styled";
import { useNavigate } from "react-router-dom";

const Info = () => {
  const email = "euimin3070@gmail.com";
  const navigate = useNavigate();

  const onClick = () => {
    navigate("/profile/setting");
  };
  return (
    <Styled.InfoBox onClick={onClick}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={{ margin: "4px" }}>
          <Person fontSize="large" />
        </div>
        <div>
          <Styled.NameDiv>{email.slice(0, email.indexOf("@"))}</Styled.NameDiv>
          <Styled.EmailDiv>{email}</Styled.EmailDiv>
        </div>
      </div>
      <ArrowForwardIos />
    </Styled.InfoBox>
  );
};

export default Info;
