import request from "supertest";
import { app } from "./app";

describe("App", () => {
  it("throws NotFoundError", async () => {
    const res = await request(app.callback()).get("/404-not-found");
    expect(res.status).toBe(404);
    expect(res.body.error_type).toBe("NotFoundError");
  });
});
