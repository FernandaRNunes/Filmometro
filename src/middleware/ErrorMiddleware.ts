import type { Request, Response, NextFunction } from "express";

export const errorMiddleware = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  return res.status(400).json({
    message: error.message,
  });
};
