import { useState, useEffect, useRef } from 'react';
import { getCategoryId } from '../../../Utils';
import { useNavigate } from 'react-router-dom';
import TextareaAutosize from 'react-textarea-autosize';

import '@toast-ui/editor/dist/toastui-editor.css';

import { Editor } from '@toast-ui/react-editor';

import ArticleService from '../../../Network/ArticleService';

import GlobalStyled from '../../../Styled/Global.styled';

import LoadingButton from '@mui/lab/LoadingButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';

const CreateArticleBody = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [curCate, setCurCate] = useState(0);
  const cateList = ['자유 게시판', '익명 게시판'];
  const [isSending, setIsSending] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const navi = useNavigate();
  const open = Boolean(anchorEl);

  const editorRef = useRef(null);

  const handleClickPopper = event => {
    setAnchorEl(event.currentTarget);
  };

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
    editorRef.current.getInstance().removeToolbarItem('heading');
    console.log(editorRef.current.getInstance());
    //if (title === '') {
    //  alert('제목을 입력하세요!');
    //  return;
    //}
    //if (content === '') {
    //  alert('내용을 입력하세요!');
    //  return;
    //}

    // 이동한 뒤에 API 실행됨
    //setIsSending(true);
    //const categoryId = getCategoryId(curCate);
    //const result = await ArticleService.createArticles({
    //  title: title,
    //  content: content,
    //  categoryId: categoryId, // + 붙이면 number 타입
    //});
    //setIsSending(false);
    //navi(-1);
  };

  const markdownEditorSetting = () => {
    const editor = editorRef.current;
    editor.getRootElement().classList.add('editor');
  };

  useEffect(() => {
    setCurCate(cateList[0]);

    markdownEditorSetting();
  }, []);

  const handleClick = () => {
    console.log(editorRef.current.getInstance());
  };

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
          <LoadingButton
            loading={isSending}
            onClick={handleClickSubmit}
            variant="outlined"
            className="submit_button"
          >
            완료
          </LoadingButton>
        </div>
      </div>
      <div className="body">
        <GlobalStyled.BoardTitleDiv>
          <FormControl className="category_form" fullWidth>
            <NativeSelect
              defaultValue={0}
              onChange={e => {
                setCurCate(cateList[e.target.value]);
              }}
            >
              {cateList.map((cate, idx) => {
                return <option value={idx}>{cate}</option>;
              })}
            </NativeSelect>
          </FormControl>
        </GlobalStyled.BoardTitleDiv>
        <form>
          <input
            placeholder="제목을 입력하세요"
            onChange={handleChangeTitle}
            maxLength={30}
          />

          <Editor
            className="editor"
            previewStyle="vertical"
            initialEditType="wysiwyg"
            initialValue="hello"
            ref={editorRef}
          />
        </form>
      </div>
    </>
  );
};

export default CreateArticleBody;
