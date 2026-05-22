import type { Request, Response, NextFunction } from "express";
import { AuthService } from "../services/AuthService.js";

export class AuthController {
  private authService = new AuthService();

  login = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { email, password } = req.body;
      const result = await this.authService.login(email, password);
      return res.status(200).json(result);
    } catch (error: unknown) {
      next(error);
    }
  };
}
