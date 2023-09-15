import { useState, useEffect } from "react";
import { getAllPolizas, deletePoliza } from "../../api/poliza";
import PolizaItem from "./PolizaItem";

const PolizaList = () => {
  const [polizas, setPolizas] = useState([]);

  useEffect(() => {
    async function getPolizas() {
      const data = await getAllPolizas();
      setPolizas(data);
    }
    getPolizas();
  }, []);

  const handleDeletePoliza = async (id) => {
    try {
      // Elimina la póliza de la base de datos usando la API
      await deletePoliza(id);
      // Actualiza el estado local eliminando la póliza por ID
      setPolizas((prevPolizas) =>
        prevPolizas.filter((poliza) => poliza._id !== id)
      );
    } catch (error) {
      console.error("Error eliminando póliza:", error);
      alert("Ocurrió un error al eliminar la póliza.");
    }
  };

  return (
    <div>
      {polizas.map((poliza) => (
        <PolizaItem
          key={poliza._id}
          poliza={poliza}
          onDelete={handleDeletePoliza}
        />
      ))}
    </div>
  );
};

export default PolizaList;
