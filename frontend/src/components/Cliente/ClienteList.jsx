
import { useState, useEffect } from "react";
import { getAllClientes } from "../../api/cliente";
import ClienteItem from "./ClienteItem";

const ClienteList = () => {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    const fetchClientes = async () => {
      const data = await getAllClientes();
      setClientes(data);
    };

    fetchClientes();
  }, []);

  return (
    <div>
      {clientes.map((cliente) => (
        <ClienteItem key={cliente._id} cliente={cliente} />
      ))}
    </div>
  );
};

export default ClienteList;
