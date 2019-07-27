export default class ServerError extends Error {
  constructor() {
    this.name = "ServerError";
    this.message = "서버에서 오류가 발생했습니다.";
    this.statusCode = 500;
  }
}
