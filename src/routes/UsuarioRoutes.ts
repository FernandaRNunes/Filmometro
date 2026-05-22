import { Router } from "express";
import { UsuarioController } from "../controller/UsuarioController.js";
import { authMiddleware } from "../middleware/AuthMiddleware.js";

const router = Router();
const usuarioController = new UsuarioController();

router.get("/", usuarioController.list);
router.post("/", usuarioController.create);
router.patch("/:id", authMiddleware, usuarioController.update);
router.delete("/:id", authMiddleware, usuarioController.delete);

export const UsuarioRouter = router;
