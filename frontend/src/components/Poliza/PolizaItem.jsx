/* eslint-disable react/prop-types */
import './poliza.css';

const PolizaItem = ({ poliza, onDelete,  }) => {
  return (
    <div className="poliza-container">
      <div className="poliza-header">
        <h2>Poliza ID: {poliza._id}</h2>
      </div>
      <p className="cliente-name">Nombre del Cliente: {poliza.cliente.nombre}</p>
      <div className="vehiculos-container">
        Vehículos:
        <ul>
          {poliza.vehiculos.map(vehiculo => (
            <li key={vehiculo._id} className="vehiculo-item">
              {vehiculo.marca} - {vehiculo.modelo}
            </li>
          ))}
        </ul>
      </div>
      <button onClick={() => onDelete(poliza._id)}>Eliminar</button>
    </div>
  );
};

export default PolizaItem;

