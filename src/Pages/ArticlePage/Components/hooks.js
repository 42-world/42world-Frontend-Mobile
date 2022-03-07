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
  return useQuery(['getCommentsById', articleId], async () => {
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
        await queryClient.invalidateQueries(['getCommentsById', articleId]);
        if (lastComment.current) lastComment.current.scrollIntoView();
      },
    },
  );
}
