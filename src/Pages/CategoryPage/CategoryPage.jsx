import { Header } from 'Components';
import CategoryBody from './Components';

import Styled from './CategoryPage.styled.js';

const CategoryPage = () => {
  return (
    <>
      <Styled.MainHeader>
        <Header />
      </Styled.MainHeader>
      <Styled.MainBody>
        <CategoryBody />
      </Styled.MainBody>
    </>
  );
};

export default CategoryPage;
