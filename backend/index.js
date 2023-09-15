import express, { json, urlencoded } from "express";
import cors from "cors";
import dotenv from "dotenv";
import polizaRoutes from "./routes/polizaRoute.js";
import clienteRoutes from "./routes/clientesRoute.js";

// Conección a la BBDD
import { coneccionDB } from "./config/db.js";

const app = express();
const PORT = 3000;

// Configuración para utilizar variables de entorno
dotenv.config();

// MIDDLEWARES
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(cors());

// HACER CONEXION A LA BASE DE DATOS MONGOOSE
coneccionDB();

// RUTA PRUEBA
app.get("/", (req, res) => {
  res.send("Prueba Tecnica Seguros Pepin");
});

// RUTAS
app.use("/polizas", polizaRoutes);
app.use("/clientes", clienteRoutes);

// PUERTO ESCUCHANDO
app.listen(PORT, () => {
  console.log(`API Rest Polizas Corriendo en el puerto: ${PORT}`);
});
