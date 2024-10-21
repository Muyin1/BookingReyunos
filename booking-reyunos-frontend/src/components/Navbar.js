import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LoginForm from './loginForms';
import '../styles/index.css';

function Navbar() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const toggleLogin = (event) => {
    event.stopPropagation(); // Previene que el evento cierre el sidebar si clickeas dentro de él.
    setIsLoginOpen(!isLoginOpen);
  };

  const closeLogin = () => {
    setIsLoginOpen(false);
  };

  return (
    <>
      <nav className="navbar">
        <div className="nav-links">
          <Link to="/">Inicio</Link> | 
          <Link to="/accommodations">Alojamientos</Link> | 
          <Link to="/programas">Programas</Link> | 
          <Link to="/infraestructura">Infraestructura</Link> | 
          <Link to="/contacto">Contacto</Link>
        </div>

        <button className="login-button" onClick={toggleLogin}>
          Login
        </button>
      </nav>

      <div
        className={`login-sidebar ${isLoginOpen ? 'open' : ''}`}
        onClick={(e) => e.stopPropagation()} // Evita que el click dentro del sidebar lo cierre.
      >
        <button className="close-button" onClick={closeLogin}>
          X
        </button>
        <LoginForm />
      </div>

      {isLoginOpen && <div className="backdrop" onClick={closeLogin}></div>}
    </>
  );
}

export default Navbar;
