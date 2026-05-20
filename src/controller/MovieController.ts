import type { Request, Response, NextFunction } from "express";
import { MovieService } from "../services/MovieService.js";

export class MovieController {
  private movieService = new MovieService();
  create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const newMovie = await this.movieService.create(req.body);
      return res.status(201).json(newMovie);
    } catch (error: unknown) {
      next(error);
    }
  };

  list = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const movies = await this.movieService.listAll();
      return res.json(movies);
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
      await this.movieService.delete(id);
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
      const updatedMovie = await this.movieService.update(id, req.body);
      return res.status(200).json(updatedMovie);
    } catch (error: unknown) {
      next(error);
    }
  };
}
