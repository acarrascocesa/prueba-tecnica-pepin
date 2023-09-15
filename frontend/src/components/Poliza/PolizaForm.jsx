import './poliza.css';
import { useState } from "react";
import { createPoliza } from "../../api/poliza";

const PolizaForm = () => {
  const [clienteId, setClienteId] = useState("");
  const [vehiculos, setVehiculos] = useState([{ marca: "", modelo: "", año: "", placa: "" }]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPoliza = {
      cliente: clienteId,
      vehiculos
    };

    try {
      await createPoliza(newPoliza);
      alert("Póliza agregada con éxito!");
    } catch (err) {
      alert("Hubo un error al agregar la póliza");
    }
  };

  const handleVehiculoChange = (index, event) => {
    const values = [...vehiculos];
    values[index][event.target.name] = event.target.value;
    setVehiculos(values);
  };

  const addVehiculo = () => {
    setVehiculos([...vehiculos, { marca: "", modelo: "", año: "", placa: "" }]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Cliente ID:
        <input
          value={clienteId}
          onChange={(e) => setClienteId(e.target.value)}
          type="text"
          required
        />
      </label>

      <h2>Vehículos</h2>
      {vehiculos.map((vehiculo, index) => (
        <div key={index}>
          <input
            type="text"
            placeholder="Marca"
            name="marca"
            value={vehiculo.marca}
            onChange={(e) => handleVehiculoChange(index, e)}
            required
          />
          <input
            type="text"
            placeholder="Modelo"
            name="modelo"
            value={vehiculo.modelo}
            onChange={(e) => handleVehiculoChange(index, e)}
            required
          />
          <input
            type="number"
            placeholder="Año"
            name="año"
            value={vehiculo.año}
            onChange={(e) => handleVehiculoChange(index, e)}
            required
          />
          <input
            type="text"
            placeholder="Placa"
            name="placa"
            value={vehiculo.placa}
            onChange={(e) => handleVehiculoChange(index, e)}
            required
          />
        </div>
      ))}
     <div>
      <button type="button" onClick={addVehiculo}>Agregar Vehículo</button>
      <button type="submit">Agregar Póliza</button>
    </div>
    </form>
  );
};

export default PolizaForm;
