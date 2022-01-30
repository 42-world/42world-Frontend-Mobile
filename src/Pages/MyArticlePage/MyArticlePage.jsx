import { Footer } from 'Components';
import { ProfileHeader } from 'Components';
import GlobalStyled from 'Styled/Global.styled';
import { MyArticle } from './Components';

const MyArticlePage = () => {
  return (
    <GlobalStyled.ProfileBackgroundDiv>
      <ProfileHeader title={'내가 쓴 글'} />
      <MyArticle />
      <Footer />
    </GlobalStyled.ProfileBackgroundDiv>
  );
};

export default MyArticlePage;
