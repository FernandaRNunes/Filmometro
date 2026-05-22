import { Router } from "express";
import { ReviewController } from "../controller/ReviewController.js";
import { authMiddleware } from "../middleware/AuthMiddleware.js";

const router = Router();
const reviewController = new ReviewController();

router.post("/", authMiddleware, reviewController.create);
router.get("/", reviewController.list);
router.patch("/:id", authMiddleware, reviewController.update);
router.delete("/:id", authMiddleware, reviewController.delete);

export const ReviewRouter = router;
