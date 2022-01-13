import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Styled from "./ProfileHeader.styled";

const ProfileHeader = ({ title }) => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate(-1);
  };
  return (
    <Styled.ProfileHeaderDiv>
      <Button onClick={onClick}>
        <ArrowBackIcon />
      </Button>
      <Styled.ProfileHeaderTitleDiv>{title}</Styled.ProfileHeaderTitleDiv>
      <Button disabled></Button>
    </Styled.ProfileHeaderDiv>
  );
};

export default ProfileHeader;
