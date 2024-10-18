import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/">Inicio</Link> | 
      <Link to="/accommodations">Alojamientos</Link> | 
      <Link to="/programas">Programas</Link> |
      <Link to="/infraestructura">Infraestructura</Link> |
      <Link to="/login">Login</Link> |
      <Link to="/contacto">Contacto</Link> 
      
    </nav>
  );
}

export default Navbar;