import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    setUser(userData); // Guarda la información del usuario
    localStorage.setItem('user', JSON.stringify(userData)); // Opcional: persistir en localStorage
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user'); // Opcional: limpiar localStorage
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
