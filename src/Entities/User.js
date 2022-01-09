/**
 * id: number
 * nickname: string
 * is_authenticated: bool
 * role: enum
 * charactor: string(url)
 */
export default class User {
  constructor(
    id, //
    nickname,
    is_authenticated,
    role,
    charactor
  ) {
    this.id = id;
    this.nickname = nickname;
    this.is_authenticated = is_authenticated;
    this.role = role;
    this.charactor = charactor;
  }
}
