import { useContext, Suspense } from 'react';
import { useNavigate } from 'react-router-dom';

import { useQuery, useMutation, useQueryClient } from 'react-query';
import '@toast-ui/editor/dist/toastui-editor.css';

import { AuthContext } from 'App';
import { getCategoryById, getProfile } from 'Utils';
import { ArticleService, ReactionService } from 'Network';
import { getArticleTime } from 'Utils/dayjsUtils';
import ArticleView from './ArticleView';

import { CommentContainer } from '.';

import Loading from 'Components/Loading';

const Article = ({ articleId, categoryId }) => {
  const { curUser } = useContext(AuthContext);
  const navi = useNavigate();
  const queryClient = useQueryClient();
  const { data } = useQuery(
    ['getArticleById', articleId],
    async () => await ArticleService.getArticleById(articleId),
  );
  const likeMutate = useMutation(
    async () => await ReactionService.createArticleReactionHeart(articleId),
    {
      onSuccess: result => {
        queryClient.setQueryData(['getArticleById', articleId], data => {
          return {
            ...data,
            isLike: result.isLike,
            likeCount: result.likeCount,
          };
        });
      },
    },
  );
  const deleteMutate = useMutation(
    async () => await ArticleService.deleteArticles(articleId),
    {
      onSuccess: () => {
        navi(-1);
      },
    },
  );

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
    isModifiable: data.writer.id === curUser.id,
    handleClickEdit,
    handleClickDelete: deleteMutate.mutate,
    profileSrc: getProfile.findProfileById(data.writer.character),
    content: data.content,
    isReactionPossible: categoryId !== 3,
    likeCount: data.likeCount,
    handleClickLike: likeMutate.mutate,
    isLike: data.isLike,
  };
  return (
    <>
      <ArticleView {...props} />
      <Suspense fallback={<Loading />}>
        {data.categoryId !== 3 && <CommentContainer articleId={articleId} />}
      </Suspense>
    </>
  );
};

export default Article;
