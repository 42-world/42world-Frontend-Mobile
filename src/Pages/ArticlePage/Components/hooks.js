import { ArticleService, ReactionService, CommentService } from 'Network';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router';

export function useArticle(articleId) {
  return useQuery(
    ['getArticleById', articleId],
    async () => await ArticleService.getArticleById(articleId),
    { suspense: true },
  );
}

export function useComments(articleId, order, page, take) {
  return useQuery(['getCommentsByArticleId', articleId], async () => {
    return await ArticleService.getArticlesCommentsById(
      articleId,
      order,
      page,
      take,
    );
  });
}

export function useLikeArticle(articleId) {
  const queryClient = useQueryClient();
  return useMutation(
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
}

export function useDeleteArticle(articleId) {
  const navigate = useNavigate();
  return useMutation(
    async () => await ArticleService.deleteArticles(articleId),
    {
      onSuccess: () => {
        navigate(-1);
      },
    },
  );
}

// 좀 보기 싫긴 함..
export function useCreateComment(input, articleId, lastComment) {
  const queryClient = useQueryClient();
  return useMutation(
    async () => {
      return await CommentService.createComments({
        content: input,
        articleId: +articleId,
      });
    },
    {
      onSuccess: async () => {
        await queryClient.invalidateQueries([
          'getCommentsByArticleId',
          articleId,
        ]);
        if (lastComment.current) lastComment.current.scrollIntoView();
      },
    },
  );
}

export function useLikeComment(commentId, articleId) {
  const queryClient = useQueryClient();
  return useMutation(
    async () =>
      await ReactionService.createCommentReactionHeart(articleId, commentId),
    {
      // onMutate: () => {
      //   return { id: commentId };
      // },
      // onSuccess: (result, _, { id }) => {
      //   queryClient.setQueryData(
      //     ['getCommentsByArticleId', articleId],
      //     data => {
      //       console.log(data.data.find(comment => comment.id === id)['isLike']);
      //       return { ...data };
      //     },
      //   );
      // },
      onSuccess: () => {
        // 새로 fetch
        queryClient.invalidateQueries(['getCommentsByArticleId', articleId]);
      },
    },
  );
}

export function useDeleteComment(commentId, articleId) {
  const queryClient = useQueryClient();
  return useMutation(
    async () => await CommentService.deleteComments(commentId),
    {
      onMutate: () => {
        return { id: commentId };
      },
      onSuccess: (_, __, { id }) => {
        // 새로 fetch
        queryClient.invalidateQueries(['getCommentsByArticleId', articleId]);

        // 얘는 캐시된 데이터만 프론트 자체적으로 업데이트
        // meta 정보가 새로 업데이트 돼야 해서 아마 새로 fetch해와야할듯..?
        // queryClient.setQueryData(
        //   ['getCommentsByArticleId', articleId],
        //   data => {
        //     const newData = data.data.filter(comment => comment.id !== id);
        //     console.log(data.meta);
        //     data.meta.totalCount -= 1;
        //     return { data: newData, meta: data.meta };
        //   },
        // );
      },
    },
  );
}
