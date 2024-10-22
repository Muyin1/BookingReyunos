// src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LoginForm from './loginForms';
import { useAuth } from '../context/AuthContext';
import '../styles/index.css';

function Navbar() {
  const { user, logout } = useAuth(); // Asegúrate de tener el user del contexto
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const toggleLogin = (event) => {
    event.stopPropagation();
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

        {user ? (
          <>
            <span>Bienvenido, {user.username}</span>
            <button className="login-button" onClick={logout}>Cerrar Sesión</button>
          </>
        ) : (
          <button className="login-button" onClick={toggleLogin}>
            Login
          </button>
        )}
      </nav>

      <div
        className={`login-sidebar ${isLoginOpen ? 'open' : ''}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="close-button" onClick={closeLogin}>
          X
        </button>
        <LoginForm onClose={closeLogin} /> {/* Asegúrate de pasar onClose aquí */}
      </div>

      {isLoginOpen && <div className="backdrop" onClick={closeLogin}></div>}
    </>
  );
}

export default Navbar;
