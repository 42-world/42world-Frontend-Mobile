import { useEffect, useState } from 'react';
import ArticleService from '../../../Network/ArticleService_old';

const Comment = () => {
  // articleId로 패칭 fetching
  const comments = [
    {
      id: 0,
      content: '댓글 내용',
      articleId: 0,
      writerId: 0,
      writer: {
        id: 0,
        nickname: '닉네임',
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
      writer: {
        id: 0,
        nickname: '닉네임',
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
      content: '댓글 내용',
      articleId: 0,
      writerId: 0,
      writer: {
        id: 0,
        nickname: '닉네임',
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
    <div style={{ background: 'skyblue' }}>
      {comments.map((comment, idx) => (
        <div key={idx}>
          <img src={'#'} />
          <div>{comment.writer.nickname}</div>
          <div>{comment.updatedAt}</div>
          <div>{comment.content}</div>
        </div>
      ))}
    </div>
  );
};

export default Comment;
