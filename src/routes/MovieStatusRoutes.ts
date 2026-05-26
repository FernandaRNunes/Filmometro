import { Router } from "express";
import { MovieStatusController } from "../controller/MovieStatusController.js";
import { authMiddleware } from "../middleware/AuthMiddleware.js";

const router = Router();

const movieStatusController = new MovieStatusController();

router.post("/", authMiddleware, movieStatusController.create);
router.get("/", movieStatusController.list);
router.patch("/:id", authMiddleware, movieStatusController.update);
router.delete("/:id", authMiddleware, movieStatusController.delete);

export const MovieStatusRouter = router;
