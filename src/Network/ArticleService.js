// # 게시글 /articles

import { Article, Comment } from '../Entities';

// - 가져오기
//     - 카테고리별 게시글 목록 GET /articles?category=”anonymous”
//     - 게시글 상세 GET /articles/:id
//         - 조회수 갱신까지 같이 한다. <❗️추후 수정 여지 있음❗️>
//     - 댓글 가져오기 GET /articles/:id/comments
// - 추가하기 POST /articles
// - 수정하기
//     - 본문 / 제목 수정하기 PUT /articles/:id
// - 지우기 DELETE /articles/:id

const generateRandomArticle = () => {
  const id = 1;
  const category_id = 1;
  const writer_id = 1;
  const title = 'this is title';
  const content = 'this is content';
  const view_count = 1;
  const comment_count = 2;
  const liked_count = 3;

  return new Article(
    id,
    category_id,
    writer_id,
    title,
    content,
    view_count,
    comment_count,
    liked_count,
  );
};

const generateRandomComment = () => {
  const id = 1;
  const article_id = 1;
  const writer_id = 1;
  const content = 'this is comment';

  return new Comment(id, article_id, writer_id, content);
};

const ArticleService = {
  fetchAllArticle: category_id => {
    return [
      generateRandomArticle(),
      generateRandomArticle(),
      generateRandomArticle(),
      generateRandomArticle(),
      generateRandomArticle(),
    ];
  },
  fetchArticle: id => {
    return generateRandomArticle();
  },
  fetchArticleComments: id => {
    return [
      generateRandomComment(),
      generateRandomComment(),
      generateRandomComment(),
    ];
  },
  createArticle: (title, content) => {
    return true;
  },
  updateArticle: (id, title, content) => {
    return true;
  },
  deleteArticle: id => {
    return true;
  },
};

export default ArticleService;
