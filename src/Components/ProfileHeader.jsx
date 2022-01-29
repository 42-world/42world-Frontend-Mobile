import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Styled from './ProfileHeader.styled';

const ProfileHeader = ({ title }) => {
  const navigate = useNavigate();
  const handleBackButtonClick = () => {
    navigate(-1);
  };
  return (
    <Styled.ProfileHeaderDiv>
      <ArrowBackIcon onClick={handleBackButtonClick} />
      <Styled.ProfileHeaderTitleDiv>{title}</Styled.ProfileHeaderTitleDiv>
      <ArrowBackIcon id="unvisible" />
    </Styled.ProfileHeaderDiv>
  );
};

export default ProfileHeader;
