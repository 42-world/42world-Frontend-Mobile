/**
 * id: number
 * category_id: number
 * writer_id: number
 * title: string
 * content: string
 * view_count: number
 */
export default class Article {
  constructor(
    id, //
    category_id,
    writer_id,
    title,
    content,
    view_count,
    comment_count,
    liked_count,
  ) {
    this.id = id;
    this.category_id = category_id;
    this.writer_id = writer_id;
    this.title = title;
    this.content = content;
    this.view_count = view_count;
    this.comment_count = comment_count;
    this.liked_count = liked_count;
  }
}
