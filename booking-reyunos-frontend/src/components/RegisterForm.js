import React, { useState } from 'react';
import axios from 'axios';

function RegisterForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/users/register', { username, password, email });
      setMessage('Registro exitoso. Ahora puedes iniciar sesión.');
    } catch (error) {
      setMessage('Error: No se pudo completar el registro.');
    }
  };

  return (
    <div className="register-form">
      <h2>Registro</h2>
      <form onSubmit={handleRegister}>
        <div>
          <label>Usuario:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
        <button type="submit">Registrarse</button>
        {message && <p>{message}</p>}
      </form>
    </div>
  );
}

export default RegisterForm;
