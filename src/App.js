import logo from './logo.svg';
import './App.css';
import './assets/site/css/style.css'

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Inicio from './components/Inicio/Inicio.js'
import Navbar from './components/Navbar/Navbar.js';
import About from './components/About/About';
import Menu from './components/Menu/Menu';
import Contacto from './components/Contacto/Contacto';
import Facturacion from './components/Facturacion/Facturacion';
import Reservacion from './components/Reservacion/Reservacion';
import Login from './components/Login/Login';


function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/facturacion" element={<Facturacion />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reservacion" element={<Reservacion />} />
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
