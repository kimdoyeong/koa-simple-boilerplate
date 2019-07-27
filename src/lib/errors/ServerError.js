export default class ServerError extends Error {
  constructor() {
    super("서버에서 오류가 발생했습니다.");
    this.name = "ServerError";
    this.statusCode = 500;
  }
}
