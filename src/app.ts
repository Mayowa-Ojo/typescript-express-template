import express from "express";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";
import type { Request, Response } from "express";

import { stream } from "~config/logger.config";
import { notFoundError, errorHandler } from "~middleware/error.middleware";

const app = express();

app.use(helmet());
app.use(cors({
   methods: ["GET", "POST", "PATCH", "PUT", "DELETE"],
   origin: "*"
}));
app.use(morgan("dev", {
   stream,
   skip: (_req, res) => res.statusCode < 200 || res.statusCode >= 400
}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (_req: Request, res: Response) => {
   res.status(200).json({
      ok: true,
      message: "welcome message",
      data: {}
   });
});

app.use(notFoundError);
app.use(errorHandler);

export default app;