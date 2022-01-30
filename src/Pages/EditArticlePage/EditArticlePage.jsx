import { useState, useEffect, useContext, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import ArticleService from '../../Network/ArticleService';
import { AuthContext } from '../../App';
import { getCategoryByUrl } from '../../Utils';

import { EditArticlePageHeader, EditArticlePageBody } from './Conponents';
import Styled from './EditArticlePage.styled';

const EditArticlePage = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [categoryId, setCategoryId] = useState(0);

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
    navi(-1);
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
    // 이동한 뒤에 API 실행됨
    const result = await ArticleService.editArticles(+pathArray[2], {
      title: title,
      content: content,
      categoryId: categoryId, // + 붙이면 number 타입
    });
    navi(-1);
  };

  useEffect(() => {
    const getArticle = async () => {
      const response = await ArticleService.getArticlesById(pathArray[2]);
      const article = response;
      setTitle(article.title);
      setContent(article.content);
      setCategoryId(article.categoryId);
    };
    getArticle();
  }, [setTitle, setContent, categoryId]);

  return (
    <Styled.EditArticlePage>
      <EditArticlePageHeader
        onClickCancel={handleClickCancel}
        onClickSubmit={handleClickSubmit}
      />
      <EditArticlePageBody
        categoryId={categoryId}
        curLength={content.length}
        onChangeTitle={handleChangeTitle}
        title={title}
        onChangeContent={handleChangeContent}
        content={content}
        onSubmit={handleClickSubmit}
      />
    </Styled.EditArticlePage>
  );
};

export default EditArticlePage;
