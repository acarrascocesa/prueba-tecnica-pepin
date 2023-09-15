import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import ClienteList from "./components/Cliente/ClienteList";
import ClienteForm from "./components/Cliente/ClienteForm";
import PolizaList from "./components/Poliza/PolizaList";
import PolizaForm from "./components/Poliza/PolizaForm";
import './App.css';


const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/clientes">Clientes</Link>
            </li>
            <li>
              <Link to="/add-cliente">Agregar Cliente</Link>
            </li>
            <li>
              <Link to="/polizas">Pólizas</Link>
            </li>
            <li>
              <Link to="/add-poliza">Agregar Póliza</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<h1>Bienvenido a la gestión de pólizas vehiculos Prueba Tecnica Seguros Pepin</h1>} />
          <Route path="/clientes" element={<ClienteList />} />
          <Route path="/add-cliente" element={<ClienteForm />} />
          <Route path="/polizas" element={<PolizaList />} />
          <Route path="/add-poliza" element={<PolizaForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
