import { Router } from "express";
import { UsuarioController } from "../controller/UsuarioController.js";

const router = Router();
const usuarioController = new UsuarioController();

router.post("/", usuarioController.create);

export const UsuarioRouter = router;
