import { Header } from '../../Components';
import Body from './Components';

import Styled from './CategoryPage.styled.js';

const CategoryPage = () => {
  return (
    <>
      <Styled.MainHeader>
        <Header />
      </Styled.MainHeader>
      <Styled.MainBody>
        <Body />
      </Styled.MainBody>
    </>
  );
};

export default CategoryPage;
