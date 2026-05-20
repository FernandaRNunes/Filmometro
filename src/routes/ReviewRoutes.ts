import { Router } from "express";
import { ReviewController } from "../controller/ReviewController.js";

const router = Router();
const reviewController = new ReviewController();

router.post("/", reviewController.create);
router.get("/", reviewController.list);
router.patch("/:id", reviewController.update);
router.delete("/:id", reviewController.delete);

export const ReviewRouter = router;
