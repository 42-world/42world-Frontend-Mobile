/**
 * id: number
 * user_id: number
 * type: "NEW_COMMENT" | "FROM_ADMIN"
 * content: string
 * time: Date
 * is_read: boolean
 */
export default class Notification {
  constructor(
    id, //
    user_id,
    type,
    content,
    time,
    is_read
  ) {
    this.id = id;
    this.user_id = user_id;
    this.type = type;
    this.content = content;
    this.time = time;
    this.is_read = is_read;
  }
}
