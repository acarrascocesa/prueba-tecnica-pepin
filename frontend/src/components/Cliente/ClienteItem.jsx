/* eslint-disable react/prop-types */
import './cliente.css'; // Importa los estilos

const ClienteItem = ({ cliente }) => {
  return (
    <div className="cliente-container">
      <h2>{cliente.nombre} (ID: {cliente._id})</h2>
      <p>Dirección: {cliente.direccion}</p>
      <p>Teléfono: {cliente.telefono}</p>
    </div>
  );
};

export default ClienteItem;
