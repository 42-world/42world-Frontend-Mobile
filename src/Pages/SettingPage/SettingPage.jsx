import { Footer, ProfileHeader } from 'Components';
import { Setting } from './Components';

import GlobalStyled from 'Styled/Global.styled';

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
