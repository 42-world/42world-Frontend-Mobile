/**
 * id: number
 * article_id: number
 * writer_id: number
 * content: string
 */
export default class Comment {
  constructor(
    id, //
    article_id,
    writer_id,
    content
  ) {
    this.id = id;
    this.article_id = article_id;
    this.writer_id = writer_id;
    this.content = content;
  }
}
