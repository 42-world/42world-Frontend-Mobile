import { ProfileHeader } from 'Components';
import { AlarmBody } from './Components';

import GlobalStyled from 'Styled/Global.styled';

const AlarmPage = () => {
  return (
    <GlobalStyled.ProfileBackgroundDiv>
      <ProfileHeader title={'알림센터'} />
      <AlarmBody />
    </GlobalStyled.ProfileBackgroundDiv>
  );
};

export default AlarmPage;
