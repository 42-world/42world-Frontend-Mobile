import { Footer, ProfileHeader } from 'Components';
import { MyComment } from './Components';

import GlobalStyled from 'Styled/Global.styled';

const MyCommentPage = () => {
  return (
    <GlobalStyled.ProfileBackgroundDiv>
      <ProfileHeader title={'내 댓글'} />
      <MyComment />
      <Footer />
    </GlobalStyled.ProfileBackgroundDiv>
  );
};

export default MyCommentPage;
