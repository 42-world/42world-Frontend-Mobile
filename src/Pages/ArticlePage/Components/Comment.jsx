import React from 'react';

import { getProfile } from 'Utils';
import { getArticleTime } from 'Utils/dayjsUtils';
import CommentView from './CommentView';

import { useDeleteComment, useLikeComment } from './hooks';

const Comment = ({ currentUserId, articleId, comment }) => {
  const likeComment = useLikeComment(comment.id, articleId);
  const deleteComment = useDeleteComment(comment.id, articleId);

  const props = {
    isMine: currentUserId === comment.writer.id,
    profileSrc: getProfile.findProfileById(comment.writer.character),
    writer: comment.writer.nickname,
    time: getArticleTime(comment.createdAt),
    likeCount: comment.likeCount,
    content: comment.content,
    handleClickDelete: deleteComment.mutate,
    handleClickLike: likeComment.mutate,
    isLike: comment.isLike,
  };
  return <CommentView {...props} />;
};

export default React.memo(Comment);
