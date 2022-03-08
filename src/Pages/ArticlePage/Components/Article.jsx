import { useNavigate } from 'react-router-dom';

import '@toast-ui/editor/dist/toastui-editor.css';

import { getCategoryById, getProfile } from 'Utils';
import { useArticle, useLikeArticle, useDeleteArticle } from './hooks';
import { getArticleTime } from 'Utils/dayjsUtils';
import ArticleView from './ArticleView';

const Article = ({ articleId, currentUserId }) => {
  const navi = useNavigate();
  const { data } = useArticle(articleId);
  const likeArticle = useLikeArticle(articleId);
  const deleteArticle = useDeleteArticle(articleId);

  const handleClickEdit = () => {
    navi(`/article/${articleId}/edit`, { state: { article: data } });
  };

  const handleClickCategory = () => {
    navi(`/category/${data.categoryId}`);
  };

  const props = {
    handleClickCategory,
    category: getCategoryById(data.categoryId),
    title: data.title,
    writer: data.writer.nickname,
    time: getArticleTime(data.createdAt),
    viewCount: data.viewCount,
    isModifiable: data.writer.id === currentUserId,
    handleClickEdit,
    handleClickDelete: deleteArticle.mutate,
    profileSrc: getProfile.findProfileById(data.writer.character),
    content: data.content,
    isReactionPossible: data.categoryId !== 3,
    likeCount: data.likeCount,
    handleClickLike: likeArticle.mutate,
    isLike: data.isLike,
  };
  return <ArticleView {...props} />;
};

export default Article;
