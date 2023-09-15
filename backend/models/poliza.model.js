import mongoose from "mongoose";

const VehiculoSchema = new mongoose.Schema({
  marca: String,
  modelo: String,
  año: Number,
  placa: String,
});

const ClienteSchema = new mongoose.Schema({
  nombre: String,
  direccion: String,
  telefono: String,
  // Puedes agregar más campos si es necesario
});

const PolizaSchema = new mongoose.Schema({
  cliente: { type: mongoose.Schema.Types.ObjectId, ref: "Cliente" },
  vehiculos: [VehiculoSchema],
});

const Cliente = mongoose.model("Cliente", ClienteSchema);
const Poliza = mongoose.model("Poliza", PolizaSchema);

export { Poliza, Cliente };
