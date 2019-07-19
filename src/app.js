import Koa from "koa";
import cors from "@koa/cors";

import routes from "./routes";
import { code, getError, throwError } from "./lib/errors";

export const app = new Koa();

app.use(cors());

app.use(async (ctx, next) => {
  try {
    await next();
    const status = ctx.status || 404;
    if (status === 404) {
      ctx.throw(...throwError(code.NOT_FOUND));
    }
  } catch (e) {
    let errorCode = code.SERVER_ERROR;

    if (e.errorCode) {
      errorCode = e.errorCode;
    }

    const { statusCode, message } = getError(errorCode);
    if (!ctx.status) {
      if (statusCode) {
        ctx.status(statusCode);
      } else {
        ctx.status(500);
      }
    }

    ctx.body = {
      success: false,
      error_type: errorCode,
      message,
      status_code: statusCode
    };
  }
});
routes.forEach(router => {
  app.use(router.routes()).use(router.allowedMethods());
});
