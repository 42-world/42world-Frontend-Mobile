import { useState, useEffect, useContext, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import ArticleService from '../../Network/ArticleService';
import { AuthContext } from '../../App';
import { getCurCategory } from '../../Utils';

import { EditArticlePageHeader, EditArticlePageBody } from './Conponents';
import Styled from './EditArticlePage.styled';

const EditArticlePage = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const cateId = useRef(null);
  const articleId = useRef(null);
  const auth = useContext(AuthContext);

  const loca = useLocation();
  const navi = useNavigate();
  const pathArray = loca.pathname.split('/');

  const handleChangeTitle = e => {
    setTitle(e.target.value);
  };

  const handleChangeContent = e => {
    setContent(e.target.value);
  };

  const handleClickCancel = () => {
    navi(`/${pathArray[1]}/${pathArray[2]}`);
  };

  const handleClickSubmit = async () => {
    if (title === '') {
      alert('제목을 입력하세요!');
      return;
    }
    if (content === '') {
      alert('내용을 입력하세요!');
      return;
    }
    // 수정하려고 카테고리 아이디 API 받는 게 조회로 인식.
    navi(`/${pathArray[1]}/${pathArray[2]}`);
    // 이동한 뒤에 API 실행됨
    const result = await ArticleService.editArticles(+pathArray[2], {
      title: title,
      content: content,
      categoryId: articleId.current, // + 붙이면 number 타입
    });
  };

  useEffect(async () => {
    console.log(auth);
    const result = await ArticleService.getArticlesById(pathArray[2]);
    const article = result.data;
    cateId.current = getCurCategory(loca);
    articleId.current = article.categoryId;
    setTitle(article.title);
    setContent(article.content);
  }, []);

  return (
    <Styled.EditArticlePage>
      <EditArticlePageHeader
        onClickCancel={handleClickCancel}
        onClickSubmit={handleClickSubmit}
      />
      <EditArticlePageBody
        cateId={cateId.current}
        curLength={content.length}
        onChangeTitle={handleChangeTitle}
        title={title}
        onChangeContent={handleChangeContent}
        content={content}
      />
    </Styled.EditArticlePage>
  );
};

export default EditArticlePage;
