import type { UserRole } from "../../entities/Usuarios.js";

declare global {
  namespace Express {
    interface Request {
      user_id?: number;
      user_role?: UserRole;
    }
  }
}

export {};
