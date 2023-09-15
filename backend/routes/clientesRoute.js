import express from "express";
import { Cliente } from "../models/poliza.model.js";

const router = express.Router();

// Crear un Cliente
router.post("/", async (req, res) => {
  const nuevoCliente = new Cliente(req.body);
  try {
    const clienteGuardado = await nuevoCliente.save();
    res.status(201).send(clienteGuardado);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Obtener todos los Clientes
router.get("/", async (req, res) => {
  try {
    const clientes = await Cliente.find({});
    res.status(200).send(clientes);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Obtener un Cliente por ID
router.get("/:id", async (req, res) => {
  try {
    const cliente = await Cliente.findById(req.params.id);
    if (!cliente) {
      return res.status(404).send({ message: "Cliente no encontrado" });
    }
    res.status(200).send(cliente);
  } catch (err) {
    res.status(500).send(err);
  }
});

export default router;
