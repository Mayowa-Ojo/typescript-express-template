import type { NextFunction, Request, Response } from "express";

import type { IResponseError } from "~declarations/index.d";
import logger from "~config/logger.config";

export const notFoundError = (_req: Request, res:Response) => {
   res.status(404).json({
      ok: false,
      message: "the requested resource doesn't exist",
      data: null
   });
}

export const errorHandler = (error: IResponseError, req: Request, res:Response, _next: NextFunction) => {
   const status = error.statusCode || error.status || 500;
   const message = error.message || "Internal server error";

   logger.error(`${status} | ${req.method} | ${req.originalUrl} | ${req.ip} | ${message}`);

   res.status(status).json({
      ok: false,
      message,
      data: null
   });
}
