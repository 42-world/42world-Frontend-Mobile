import { Footer, ProfileHeader } from 'Components';
import { MyArticle } from './Components';

import GlobalStyled from 'Styled/Global.styled';

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
