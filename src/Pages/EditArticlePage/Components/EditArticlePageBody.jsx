import { useState, useEffect, useContext, useRef } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';

import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import { getCategoryById } from 'Utils';
import { AuthContext } from 'App';
import { ArticleService, ImageService } from 'Network';

import GlobalStyled from 'Styled/Global.styled';

const EditArticlePageBody = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [categoryId, setCategoryId] = useState(0);

  const loca = useLocation();
  const navi = useNavigate();
  const { id } = useParams();

  const editorRef = useRef(null);

  const handleChangeTitle = e => {
    setTitle(e.target.value);
  };

  const handleChangeContent = e => {
    setContent(editorRef.current.getInstance().getMarkdown());
  };

  const handleClickCancel = () => {
    navi(-1);
  };

  const handleClickSubmit = async () => {
    setContent(editorRef.current.getInstance().getMarkdown());

    console.log(content);
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

  const handleFormSubmit = e => {
    e.preventDefault();
    handleClickSubmit();
  };

  const markdownEditorSetting = () => {
    const editor = editorRef.current;
    editor.getRootElement().classList.add('editor');
    editor.getInstance().removeHook('addImageBlobHook');
    editor.getInstance().addHook('addImageBlobHook', (blob, callback) => {
      (async () => {
        ImageService.uploadImage(blob).then(res => {
          callback(res);
        });
      })();
    });
  };

  useEffect(() => {
    if (loca.state) {
      const { article } = loca.state;
      setTitle(article.title);
      setContent(article.content);
      setCategoryId(article.categoryId);
      editorRef.current.getInstance().setMarkdown(article.content);
    } else {
      alert('없는 페이지입니다');
      navi('/');
    }
    markdownEditorSetting();
  }, []);
  return (
    <>
      <div className="header">
        <div>
          <ArrowBackIcon onClick={handleClickCancel} />
        </div>
        <div>
          <span>글 수정하기</span>
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
        <GlobalStyled.BoardTitleDiv>
          <div className="board_name">{getCategoryById(categoryId)}</div>
        </GlobalStyled.BoardTitleDiv>

        <form onSubmit={handleFormSubmit}>
          <input
            placeholder="제목을 입력하세요"
            onChange={handleChangeTitle}
            maxLength={30}
            value={title}
          />
          <Editor
            previewStyle="vertical"
            initialEditType="wysiwyg"
            placeholder="내용을 입력하세요"
            onChange={handleChangeContent}
            initialValue={content}
            ref={editorRef}
          />
        </form>
      </div>
    </>
  );
};

export default EditArticlePageBody;
