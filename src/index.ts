import "dotenv/config";
import express from "express";
import type { Application } from "express";
import { AppDataSource } from "./data-source.js";
import { UsuarioRouter } from "./routes/UsuarioRoutes.js";
import { MovieRouter } from "./routes/MovieRoutes.js";
import { ReviewRouter } from "./routes/ReviewRoutes.js";
import { MovieStatusRouter } from "./routes/MovieStatusRoutes.js";
import { AuthRoutes } from "./routes/AuthRoutes.js";
import { errorMiddleware } from "./middleware/ErrorMiddleware.js";

const app: Application = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use("/api/movies", MovieRouter);
app.use("/api/reviews", ReviewRouter);
app.use("/api/usuarios", UsuarioRouter);
app.use("/api/movie-status", MovieStatusRouter);
app.use("/api/auth", AuthRoutes);
app.use(errorMiddleware);

AppDataSource.initialize()
  .then(() => {
    console.log("Banco conectado com sucesso!");

    app.listen(port, () => {
      console.log(`Servidor rodando em http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.error("Erro ao conectar no banco:", error);
  });
