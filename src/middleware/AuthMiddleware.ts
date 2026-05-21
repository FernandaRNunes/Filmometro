import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import type { UserRole } from "../entities/Usuarios.js";

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { authorization } = req.headers;

  if (!authorization) {
    throw new Error("Token não fornecido");
  }
  const token = authorization.split(" ")[1];
  if (!token) {
    throw new Error("Token inválido");
  }
  try {
    type TokenPayload = {
      id: number;
      role: UserRole;
    };
    const payload = jwt.verify(
      token,
      process.env.JWT_SECRET as string
    ) as jwt.JwtPayload & TokenPayload;

    req.user_id = payload.id;
    req.user_role = payload.role;
    next();
  } catch {
    throw new Error("Token inválido ou expirado");
  }
};
