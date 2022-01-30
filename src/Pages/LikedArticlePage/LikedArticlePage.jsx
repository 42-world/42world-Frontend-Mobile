import { Footer } from 'Components';
import { ProfileHeader } from 'Components';
import GlobalStyled from 'Styled/Global.styled';
import { LikedArticle } from './Components';

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
