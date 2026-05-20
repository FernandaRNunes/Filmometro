import { Router } from "express";
import { MovieController } from "../controller/MovieController.js";

const router = Router();
const movieController = new MovieController();

router.post("/", movieController.create);
router.get("/", movieController.list);
router.patch("/:id", movieController.update);
router.delete("/:id", movieController.delete);

export const MovieRouter = router;
