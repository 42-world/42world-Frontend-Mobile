import React from 'react';

import { useArticle, useComments } from './hooks';
import Comment from './Comment';
import { SmsOutlined } from '@mui/icons-material';

import Styled from '../ArticlePage.styled';

const Comments = ({ articleId, currentUserId }) => {
  const {
    data: { categoryId },
  } = useArticle(articleId);
  const {
    data: { meta, data },
  } = useComments(articleId, 'ASC', 1, 1000);

  return (
    <div className="comment_list_div">
      <Styled.ArticleCommentDiv
        className="comment_count"
        commentCount={meta.totalCount}
      >
        <SmsOutlined />
      </Styled.ArticleCommentDiv>
      {categoryId !== 3 &&
        data.map(comment => (
          <Comment
            currentUserId={currentUserId}
            key={comment.id}
            articleId={articleId}
            comment={comment}
          />
        ))}
    </div>
  );
};

export default React.memo(Comments);
