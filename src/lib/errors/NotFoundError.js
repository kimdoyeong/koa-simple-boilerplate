export default class NotFoundError extends Error {
  constructor() {
    super("페이지를 찾을 수 없습니다.");
    this.name = "NotFoundError";
    this.status = 404;
  }
}
