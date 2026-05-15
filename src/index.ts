import "dotenv/config";
import express from "express";
import type { Application } from "express";
import { AppDataSource } from "./data-source.js";

const app: Application = express();
const port = process.env.PORT || 3000;

app.use(express.json());

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
