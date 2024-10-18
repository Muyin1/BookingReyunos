// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Accomodation from './components/Accomodation';
import LoginForm from './components/loginForms';
import RegisterForm from './components/RegisterForm';  // Nueva importación
import ForgotPassword from './components/ForgotPassword';  // Nueva importación

function App() {
  return (
    <Router>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<h1>Página Principal</h1>} />
          <Route path="/accommodations" element={<Accomodation />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />  {/* Ruta de registro */}
          <Route path="/forgot-password" element={<ForgotPassword />} />  {/* Ruta restablecer */}
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
