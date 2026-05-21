import { Router } from "express";
import { MovieStatusController } from "../controller/MovieStatusController.js";

const router = Router();

const movieStatusController = new MovieStatusController();

router.post("/", movieStatusController.create);
router.get("/", movieStatusController.list);
router.patch("/:id", movieStatusController.update);
router.delete("/:id", movieStatusController.delete);

export const MovieStatusRouter = router;
