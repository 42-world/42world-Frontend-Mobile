import { FavoriteBorder, SmsOutlined } from '@mui/icons-material';
// import { useEffect, useState } from 'react';
// import ArticleService from '../../../Network/ArticleService_old';

const Body = ({ articleId }) => {
  // articleId로 패칭 fetching
  //   const [article, setArticle] = useState();
  //   useEffect(() => {
  //     const mockup = ArticleService.fetchArticle();
  //     setArticle(mockup);
  //   }, []);
  const article = {
    id: 0,
    title: '제목',
    content: '글 내용',
    viewCount: 0,
    categoryId: 0,
    category: {
      id: 0,
      name: 'string',
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
  return (
    <div style={{ background: 'green' }}>
      <div>
        <div>{article.title}</div>
        {/* 내가 쓴 글인지 아닌지에 따라 (수정,삭제) 또는 (조회수)  */}
      </div>
      <div>{article.content}</div>
      <div>
        <span>
          <SmsOutlined />
          {article.likeCount}
        </span>
        <span>
          <FavoriteBorder />
          {article.commentCount}
        </span>
      </div>
    </div>
  );
};

export default Body;
