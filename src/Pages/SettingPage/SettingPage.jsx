import { Footer } from 'Components';
import { ProfileHeader } from '../../Components';
import GlobalStyled from '../../Styled/Global.styled';
import { Setting } from './Components';

const SettingPage = () => {
  return (
    <GlobalStyled.ProfileBackgroundDiv>
      <ProfileHeader title={'프로필 설정'} />
      <Setting />
      <Footer />
    </GlobalStyled.ProfileBackgroundDiv>
  );
};

export default SettingPage;
