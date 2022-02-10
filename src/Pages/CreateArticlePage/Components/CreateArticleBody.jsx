import { useState, useEffect } from 'react';
import { getCategoryId } from '../../../Utils';
import { useNavigate } from 'react-router-dom';
import TextareaAutosize from 'react-textarea-autosize';

import ArticleService from '../../../Network/ArticleService';

import GlobalStyled from '../../../Styled/Global.styled';

import LoadingButton from '@mui/lab/LoadingButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import Popover from '@mui/material/Popover';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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
    if (title === '') {
      alert('제목을 입력하세요!');
      return;
    }
    if (content === '') {
      alert('내용을 입력하세요!');
      return;
    }
    // 이동한 뒤에 API 실행됨
    setIsSending(true);
    const categoryId = getCategoryId(curCate);
    const result = await ArticleService.createArticles({
      title: title,
      content: content,
      categoryId: categoryId, // + 붙이면 number 타입
    });
    setIsSending(false);
    navi(-1);
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    handleClickSubmit();
  };

  useEffect(() => {
    setCurCate(cateList[0]);
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
          <div className="board_name" onClick={handleClickPopper}>
            {curCate}
            <ExpandMoreIcon />
          </div>
          <Popover
            open={open}
            anchorEl={anchorEl}
            onClose={() => {
              setAnchorEl(null);
            }}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
          >
            <List>
              {cateList.map(cate => {
                //if (cate !== curCate)
                return (
                  <ListItem>
                    <ListItemButton
                      onClick={() => {
                        setCurCate(cate);
                      }}
                    >
                      {cate}
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
          </Popover>
        </GlobalStyled.BoardTitleDiv>
        <form onSubmit={handleFormSubmit}>
          <input
            placeholder="제목을 입력하세요"
            onChange={handleChangeTitle}
            maxLength={30}
          />
          <TextareaAutosize
            placeholder="내용을 입력하세요"
            onChange={handleChangeContent}
            maxLength={4200}
          />
          <p>{content.length}/4200</p>
        </form>
      </div>
    </>
  );
};

export default CreateArticleBody;
