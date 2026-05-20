import type { Request, Response, NextFunction } from "express";
import { UsuarioService } from "../services/UsuarioService.js";

export class UsuarioController {
  private usuarioService = new UsuarioService();
  create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const newUser = await this.usuarioService.create(req.body);
      return res.status(201).json(newUser);
    } catch (error: unknown) {
      next(error);
    }
  };

  list = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const users = await this.usuarioService.listAll();
      return res.json(users);
    } catch (error: unknown) {
      next(error);
    }
  };

  delete = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = Number(req.params.id);
      if (isNaN(id)) {
        throw new Error("ID inválido");
      }
      await this.usuarioService.delete(id);
      return res.status(204).send();
    } catch (error: unknown) {
      next(error);
    }
  };

  update = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = Number(req.params.id);
      if (isNaN(id)) {
        throw new Error("ID inválido");
      }
      const updatedUser = await this.usuarioService.update(id, req.body);
      return res.status(200).json(updatedUser);
    } catch (error: unknown) {
      next(error);
    }
  };
}
