import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ForgotPassword from './ForgotPassword';
import RegisterForm from './RegisterForm';
import '../styles/App.css';

function LoginForm({ onClose }) { // Asegúrate de recibir onClose como prop
  const { login } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [forgotPassword, setForgotPassword] = useState(false);
  const [register, setRegister] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/users/login', {
        username,
        password,
      });

      const userData = response.data;
      login(userData);
      setMessage(`Bienvenido, ${userData.username}`);

      // Cierra el menú de inicio de sesión y redirige
      onClose(); // Aquí se cierra el menú
      navigate('/dashboard');
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      setMessage('Error: Credenciales inválidas');
    }
  };

  return (
    <div>
      {forgotPassword ? (
        <ForgotPassword onClose={() => setForgotPassword(false)} />
      ) : register ? (
        <RegisterForm onClose={() => setRegister(false)} />
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
            <button type="button" onClick={() => setForgotPassword(true)}>
              ¿Olvidaste tu contraseña?
            </button>
            <br />
            <button type="button" onClick={() => setRegister(true)}>
              ¿No tienes cuenta? Regístrate
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default LoginForm;
