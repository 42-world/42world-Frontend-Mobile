import { useState, useEffect, useContext } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

import { AuthContext } from 'App';
import { ArticleService } from 'Network';

import { EditArticlePageHeader, EditArticlePageBody } from './Conponents';

import Styled from './EditArticlePage.styled';

const EditArticlePage = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [categoryId, setCategoryId] = useState(0);

  const loca = useLocation();
  const navi = useNavigate();
  const { id } = useParams();

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
    const result = await ArticleService.editArticles(id, {
      title: title,
      content: content,
      categoryId: categoryId, // + 붙이면 number 타입
    });
    navi(-1);
  };

  useEffect(() => {
    if (loca.state) {
      const { article } = loca.state;
      setTitle(article.title);
      setContent(article.content);
      setCategoryId(article.categoryId);
    } else {
      alert('없는 페이지입니다');
      navi('/');
    }
  }, []);
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
