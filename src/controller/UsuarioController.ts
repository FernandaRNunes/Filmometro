import type { Request, Response, NextFunction } from "express";
import { UsuarioService } from "../services/UsuarioService.js";

export class UsuarioController {
  private usuarioService = new UsuarioService();
  create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { name, email, password, role } = req.body;
      const newUser = await this.usuarioService.create(
        name,
        email,
        password,
        role
      );
      return res.status(201).json(newUser);
    } catch (error: unknown) {
      next(error);
    }
  };
}
