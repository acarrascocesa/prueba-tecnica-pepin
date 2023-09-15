import express from "express";
import { Poliza } from "../models/poliza.model.js";

const router = express.Router();

// Crear una póliza
router.post("/", async (req, res) => {
  const nuevaPoliza = new Poliza(req.body);
  try {
    const polizaGuardada = await nuevaPoliza.save();
    res.status(201).send(polizaGuardada);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Obtener todas las pólizas
router.get("/", async (req, res) => {
  try {
    const polizas = await Poliza.find({}).populate("cliente");
    res.status(200).send(polizas);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Obtener una póliza por ID
router.get("/:id", async (req, res) => {
  try {
    const poliza = await Poliza.findById(req.params.id).populate("cliente");
    if (!poliza) {
      return res.status(404).send({ message: "Póliza no encontrada" });
    }
    res.status(200).send(poliza);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Actualizar una póliza
router.put("/:id", async (req, res) => {
  try {
    const polizaActualizada = await Poliza.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!polizaActualizada) {
      return res
        .status(404)
        .send({ message: "Póliza no encontrada para actualizar" });
    }
    res.status(200).send(polizaActualizada);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Eliminar una póliza
router.delete("/:id", async (req, res) => {
  try {
    const polizaEliminada = await Poliza.findByIdAndDelete(req.params.id);
    if (!polizaEliminada) {
      return res
        .status(404)
        .send({ message: "Póliza no encontrada para eliminar" });
    }
    res.status(204).send();
  } catch (err) {
    res.status(500).send(err);
  }
});

router.put("/:id/vehiculos", async (req, res) => {
  try {
    const poliza = await Poliza.findById(req.params.id);
    if (!poliza) {
      return res.status(404).send({ message: "Póliza no encontrada" });
    }
    // Asumiendo que en req.body.vehiculos tienes los vehículos que quieres añadir
    poliza.vehiculos.push(...req.body.vehiculos);
    await poliza.save();
    res.status(200).send(poliza);
  } catch (err) {
    res.status(500).send(err);
  }
});

export default router;
