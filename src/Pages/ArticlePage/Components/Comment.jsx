import { useEffect, useState } from 'react';
import ArticleService from '../../../Network/ArticleService_old';
import { FavoriteBorder, SmsOutlined } from '@mui/icons-material';
import Styled from '../ArticlePage.styled';
import dayjs from 'dayjs';

const Comment = () => {
  //dayjs().tz('Asia/Seoul');
  // articleId로 패칭 fetching
  const comments = [
    {
      id: 0,
      content: '댓글 내용',
      articleId: 0,
      writerId: 0,
      liked_count: 0,
      writer: {
        id: 0,
        nickname: '꿈틀대는 지렁이',
        oauthToken: 'string',
        isAuthenticated: true,
        lastLogin: '2022-01-25T13:39:47.009Z',
        role: 'NOVICE',
        character: 0,
        createdAt: '2022-01-25T13:39:47.009Z',
        updatedAt: '2022-01-25T13:39:47.009Z',
        deletedAt: '2022-01-25T13:39:47.009Z',
      },
      createdAt: '2022-01-25T13:39:47.009Z',
      updatedAt: '2022-01-25T13:39:47.009Z',
      deletedAt: '2022-01-25T13:39:47.009Z',
    },
    {
      id: 0,
      content: '댓글 내용',
      articleId: 0,
      writerId: 0,
      liked_count: 2,
      writer: {
        id: 0,
        nickname: '체리가 올려진 케이크',
        oauthToken: 'string',
        isAuthenticated: true,
        lastLogin: '2022-01-25T13:39:47.009Z',
        role: 'NOVICE',
        character: 1,
        createdAt: '2022-01-25T13:39:47.009Z',
        updatedAt: '2022-01-25T13:39:47.009Z',
        deletedAt: '2022-01-25T13:39:47.009Z',
      },
      createdAt: '2022-01-25T13:39:47.009Z',
      updatedAt: '2022-01-25T13:39:47.009Z',
      deletedAt: '2022-01-25T13:39:47.009Z',
    },
    {
      id: 0,
      content:
        '댓글 내용댓글 내용댓글 내용댓글 내용댓글 내용댓글 내용댓글 내용댓글 내용댓글 내용댓글 내용댓글 내용댓글 내용댓글 내용댓글 내용댓글 내용댓글 내용댓글 내용댓글 내용댓글 내용댓글 내용댓글 내용',
      articleId: 0,
      writerId: 0,
      liked_count: 1,
      writer: {
        id: 0,
        nickname: '흥부놀부 동화속의 제비',
        oauthToken: 'string',
        isAuthenticated: true,
        lastLogin: '2022-01-25T13:39:47.009Z',
        role: 'NOVICE',
        character: 2,
        createdAt: '2022-01-25T13:39:47.009Z',
        updatedAt: '2022-01-25T13:39:47.009Z',
        deletedAt: '2022-01-25T13:39:47.009Z',
      },
      createdAt: '2022-01-25T13:39:47.009Z',
      updatedAt: '2022-01-25T13:39:47.009Z',
      deletedAt: '2022-01-25T13:39:47.009Z',
    },
  ];

  return (
    <div className="comment_list_div">
      {comments.map((comment, idx) => (
        <div className="comment_div" key={idx}>
          <div className="info">
            <Styled.ProfileImage width="2.4rem" imagePath="" />
            <div className="picture"></div>
            <div className="text">
              <h1>{comment.writer.nickname}</h1>
              <h2>{dayjs(comment.updatedAt).format('MM/DD HH:mm')}</h2>
            </div>
          </div>
          <Styled.CommentContent
            className="content"
            liked_count={comment.liked_count}
          >
            <div className="text">{comment.content}</div>
            <div className="liked_count_div">
              <FavoriteBorder />
            </div>
          </Styled.CommentContent>
        </div>
      ))}
    </div>
  );
};

export default Comment;
