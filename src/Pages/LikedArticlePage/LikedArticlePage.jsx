import { Footer, ProfileHeader } from 'Components';
import { LikedArticle } from './Components';

import GlobalStyled from 'Styled/Global.styled';

const LikedArticlePage = () => {
  return (
    <GlobalStyled.ProfileBackgroundDiv>
      <ProfileHeader title={'좋아요 누른 글'} />
      <LikedArticle />
      <Footer />
    </GlobalStyled.ProfileBackgroundDiv>
  );
};

export default LikedArticlePage;
