import type { Request, Response, NextFunction } from "express";
import { MovieStatusService } from "../services/MovieStatusService.js";

export class MovieStatusController {
  private movieStatusService = new MovieStatusService();

  create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { userId, movieId, status } = req.body;
      const newMovieStatus = await this.movieStatusService.create(
        userId,
        movieId,
        status
      );
      return res.status(201).json(newMovieStatus);
    } catch (error: unknown) {
      next(error);
    }
  };

  list = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const movieStatus = await this.movieStatusService.listAll();
      return res.json(movieStatus);
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
      const updatedMovieStatus = await this.movieStatusService.update(
        id,
        req.body
      );
      return res.status(200).json(updatedMovieStatus);
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
      await this.movieStatusService.delete(id);
      return res.status(204).send();
    } catch (error: unknown) {
      next(error);
    }
  };
}
