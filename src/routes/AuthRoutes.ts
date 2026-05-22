import { Router } from "express";
import { AuthController } from "../controller/AuthController.js";

const router = Router();
const authController = new AuthController();

router.post("/login", authController.login);

export const AuthRoutes = router;
