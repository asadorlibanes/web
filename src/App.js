import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Inicio from './components/Inicio/inicio'
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Inicio />} />
        {/* <Route exact path="/Acerca" component={(Acerca)} />
        <Route exact path="/Menu" component={(MenuPagina)} />
        <Route exact path="/Factura" component={(Factura)} />
        <Route exact path="/Login" component={(Login)} />
        <RutaPrivada exact path="/Dashboard" component={(Dashboard)} />
        <RutaPrivada exact path="/Dashboard/Facturas" component={(Facturas)} />
        <RutaPrivada exact path="/Dashboard/Reservaciones" component={(Reservaciones)} /> */}

      </Routes>
    </BrowserRouter>
  );
}

export default App;
