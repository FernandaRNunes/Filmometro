import { Router } from "express";
import { UsuarioController } from "../controller/UsuarioController.js";

const router = Router();
const usuarioController = new UsuarioController();

router.get("/", usuarioController.list);
router.post("/", usuarioController.create);
router.patch("/:id", usuarioController.update);
router.delete("/:id", usuarioController.delete);

export const UsuarioRouter = router;
