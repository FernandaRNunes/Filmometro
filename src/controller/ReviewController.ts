import type { Request, Response, NextFunction } from "express";
import { ReviewService } from "../services/ReviewService.js";

export class ReviewController {
  private reviewService = new ReviewService();

  create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { userId, movieId, rating, comment } = req.body;
      const newReview = await this.reviewService.create(
        userId,
        movieId,
        rating,
        comment
      );
      return res.status(201).json(newReview);
    } catch (error: unknown) {
      next(error);
    }
  };

  list = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const reviews = await this.reviewService.listAll();
      return res.json(reviews);
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
      const updatedReview = await this.reviewService.update(id, req.body);
      return res.status(200).json(updatedReview);
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
      await this.reviewService.delete(id);
      return res.status(204).send();
    } catch (error: unknown) {
      next(error);
    }
  };
}
