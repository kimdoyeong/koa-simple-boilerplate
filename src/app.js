import Koa from "koa";
import cors from "@koa/cors";

import routes from "./routes";
import { NotFoundError } from "./lib/errors";

export const app = new Koa();

app.use(cors());

app.use(async (ctx, next) => {
  try {
    await next();
    const status = ctx.status || 404;
    if (status === 404) {
      throw new NotFoundError();
    }
  } catch (e) {
    const { name, message } = e;
    const statusCode = e.statusCode || 500;

    ctx.body = {
      success: false,
      error_type: name,
      message,
      status_code: statusCode
    };
  }
});
routes.forEach(router => {
  app.use(router.routes()).use(router.allowedMethods());
});
