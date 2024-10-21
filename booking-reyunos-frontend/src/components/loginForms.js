import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ForgotPassword from './ForgotPassword';
import RegisterForm from './RegisterForm'; // Importa el nuevo componente de registro
import '../styles/App.css';

function LoginForm({ onClose }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [forgotPassword, setForgotPassword] = useState(false);
  const [register, setRegister] = useState(false); // Estado para el formulario de registro

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/users/login', {
        username,
        password,
      });
      setMessage(`Bienvenido, ${username}`);
      //onClose(); // Cerrar el sidebar
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      setMessage('Error: Credenciales inválidas');
    }
  };

  const handleForgotPasswordClick = () => {
    setForgotPassword(true);
  };

  const handleRegisterClick = () => {
    setRegister(true); // Cambia a mostrar el formulario de registro
  };

  return (
    <div>
      {forgotPassword ? (
        <ForgotPassword onClose={() => setForgotPassword(false)} />
      ) : register ? (
        <RegisterForm onClose={() => setRegister(false)} /> // Muestra el formulario de registro
      ) : (
        <form className="login-form" onSubmit={handleSubmit}>
          <h2>Iniciar Sesión</h2>
          <div>
            <label>Usuario:</label>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Contraseña:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Iniciar Sesión</button>
          {message && <p>{message}</p>}
          <div className="login-options">
            <button type="button" onClick={handleForgotPasswordClick}>¿Olvidaste tu contraseña?</button>
            <br />
            <button type="button" onClick={handleRegisterClick}>¿No tienes cuenta? Regístrate</button>
          </div>
        </form>
      )}
    </div>
  );
}

export default LoginForm;
