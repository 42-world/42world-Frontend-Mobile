import { useEffect, useState } from 'react';

import Fab from '@mui/material/Fab';
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';

import ArticleService from '../../../Network/ArticleService';
import CommentService from '../../../Network/CommentService';
import { FavoriteBorder, SmsOutlined } from '@mui/icons-material';
import Styled from '../ArticlePage.styled';
import dayjs from 'dayjs';

const Comment = ({ articleId }) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const handleCreateComment = newComment => {
    setIsLoading(true);
    setComments(prev => prev.concat(newComment));
    setIsLoading(false);
    console.log(comments);
    // 임시 방편
    // window.location.replace(`/article/${articleId}`);
  };

  useEffect(() => {
    const fetch = async () => {
      console.log('Change!');
      const res = await ArticleService.getArticlesCommentsById(articleId);
      setComments(res);
    };
    fetch();
  }, [isLoading]);

  const getArticleTime = time =>
    dayjs(time).isSame(dayjs(), 'day')
      ? dayjs(time).format('HH:mm')
      : dayjs(time).format('MM/DD');

  if (!comments) return <></>;
  // articleId로 패칭 fetching
  return (
    <div className="comment_list_div">
      <Styled.ArticleCommentDiv
        className="comment_count"
        commentCount={comments.length}
      >
        <SmsOutlined />
      </Styled.ArticleCommentDiv>
      {!isLoading &&
        comments.map((comment, idx) => (
          <>
            <div className="comment_div" key={idx}>
              <div className="info">
                <Styled.ProfileImage width="2.4rem" imagePath="" />
                <div className="picture"></div>
                <div className="text">
                  <h1>{comment.writer.nickname}</h1>
                  <h2>{getArticleTime(comment.updatedAt)}</h2>
                </div>
              </div>
              <Styled.CommentContent
                className="content"
                liked_count={comment.liked_count}
              >
                <div className="text">{comment.content}</div>
                <span className="liked_count">
                  <FavoriteBorder />
                </span>
              </Styled.CommentContent>
            </div>
          </>
        ))}

      <Styled.CreateCommentDiv>
        <CreateComment
          articleId={articleId}
          handleCreateComment={handleCreateComment}
        />
      </Styled.CreateCommentDiv>
    </div>
  );
};

const CreateComment = ({ articleId, handleCreateComment }) => {
  const [input, setInput] = useState('');
  const handleChange = e => {
    setInput(e.target.value);
  };
  const handleClickSubmit = async e => {
    e.preventDefault();
    if (input === '') {
      alert('내용을 입력하세요!');
      return;
    }

    const res = await CommentService.createComments({
      content: input,
      articleId: +articleId,
    });
    if (res) {
      console.log('submit!');
      handleCreateComment(res);
      setInput('');
    }
  };
  return (
    <form onSubmit={handleClickSubmit}>
      <input
        value={input}
        onChange={handleChange}
        placeholder="댓글을 입력하세요"
      />
      <Fab className="fab_button" type="submit">
        <ArrowUpwardRoundedIcon />
      </Fab>
    </form>
  );
};

export default Comment;
