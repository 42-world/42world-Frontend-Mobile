import { FavoriteBorder, SmsOutlined } from '@mui/icons-material';
import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import ArticleService from '../../../Network/ArticleService';
import { AuthContext } from '../../../App';
import GlobalStyled from '../../../Styled/Global.styled';
import dayjs from 'dayjs';

// import { useEffect, useState } from 'react';
// import ArticleService from '../../../Network/ArticleService_old';

const Body = ({ articleId }) => {
  //const [article, setArticle] = useState();
  const navi = useNavigate();

  const handleClickEdit = () => {
    navi(`/article/${articleId}/edit`);
  };

  const handleClickDelete = () => {
    ArticleService.deleteArticles(articleId);
  };

  const { userId } = useContext(AuthContext);

  //useEffect(() => {
  //  const fetch = async () => {
  //    const res = await ArticleService.getArticlesById(articleId);
  //    setArticle(res.data);
  //  };
  //  fetch();
  //}, []);

  const article = {
    id: 0,
    title: '제목',
    content: '글 내용',
    viewCount: 0,
    categoryId: 0,
    category: {
      id: 0,
      name: '자유 게시판',
      createdAt: '2022-01-25T13:39:46.985Z',
      updatedAt: '2022-01-25T13:39:46.985Z',
      deletedAt: '2022-01-25T13:39:46.985Z',
    },
    writerId: 0,
    writer: {
      id: 0,
      nickname: 'string',
      oauthToken: 'string',
      isAuthenticated: true,
      lastLogin: '2022-01-25T13:39:46.985Z',
      role: 'NOVICE',
      character: 5,
      createdAt: '2022-01-25T13:39:46.985Z',
      updatedAt: '2022-01-25T13:39:46.985Z',
      deletedAt: '2022-01-25T13:39:46.985Z',
    },
    commentCount: 0,
    likeCount: 0,
    createdAt: '2022-01-25T13:39:46.985Z',
    updatedAt: '2022-01-25T13:39:46.985Z',
    deletedAt: '2022-01-25T13:39:46.985Z',
  };

  const getArticleTime = time =>
    dayjs(time).isSame(dayjs(), 'day')
      ? dayjs(time).format('HH:mm')
      : dayjs(time).format('MM/DD');

  return (
    <div className="content_div">
      <GlobalStyled.BoardTitleDiv>
        <div className="board_name">{article.category.name}</div>
      </GlobalStyled.BoardTitleDiv>
      <div className="content_top">
        <div className="title">
          {article.title}
          <div className="info">
            <h2>{article.writer.nickname}</h2>
            <h2>{getArticleTime(article.createdAt)}</h2>
            <h2>조회수 {article.viewCount}</h2>
          </div>
        </div>
        {/* 내가 쓴 글인지 아닌지에 따라 (수정,삭제) 또는 (조회수)  */}
        {/*{article.writer.id === userId && (*/}
        {true && (
          <div className="">
            <button onClick={handleClickEdit}>수정</button>
            <button onClick={handleClickDelete}>삭제</button>
          </div>
        )}
      </div>
      <div className="content_middle">{article.content}</div>
      <div className="content_bottom">
        <span className="comment_count">
          <SmsOutlined />
        </span>
        <span className="liked_count">
          <FavoriteBorder />
        </span>
      </div>
    </div>
  );
};

export default Body;
