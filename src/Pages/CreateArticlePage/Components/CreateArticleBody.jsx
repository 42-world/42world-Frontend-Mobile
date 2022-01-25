import { useState, useEffect } from 'react';
import { getCurCategory } from '../../../Utils';
import { useLocation, useNavigate } from 'react-router-dom';
import ArticleService from '../../../Network/ArticleService';

import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const CreateArticleBody = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [curCate, setCurCate] = useState('');

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
    console.log(pathArray[2]);
    const result = await ArticleService.createArticles({
      title: title,
      content: content,
      categoryId: +pathArray[2], // + 붙이면 number 타입
    });
    console.log(result);
    navi(`/${pathArray[1]}/${pathArray[2]}`);
  };

  useEffect(() => {
    console.log(loca);
    setCurCate(getCurCategory(loca));
  }, []);
  return (
    <>
      <div className="header">
        <div>
          <ArrowBackIcon onClick={handleClickCancel} />
        </div>
        <div>
          <span>글 작성하기</span>
        </div>
        <div>
          <Button
            onClick={handleClickSubmit}
            variant="outlined"
            className="submit_button"
          >
            완료
          </Button>
        </div>
      </div>
      <div className="body">
        <div className="category">{curCate}</div>
        <input
          placeholder="제목을 입력하세요"
          onChange={handleChangeTitle}
          maxLength={42}
        />
        <textarea
          placeholder="내용을 입력하세요"
          onChange={handleChangeContent}
          maxLength={4200}
        />
        <div>{content.length}/4200</div>
      </div>
    </>
  );
};

export default CreateArticleBody;
