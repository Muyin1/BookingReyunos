// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext'; // Importa el AuthProvider
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Terminos from './pages/Terminos';
import Privacidad from './pages/Privacidad';
import Cookies from './pages/Cookies';
import Accommodation from './components/Accommodation';
import Dashboard from './pages/Dashboard';
import Contacto from './components/Contacto';
import Infraestructura from './components/Infraestructura';
import Programas from './components/Programas';
import LoginForm from './components/loginForms';
import RegisterForm from './components/RegisterForm';
import ForgotPassword from './components/ForgotPassword';
import Home from './pages/Home';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';


function App() {
  return (
    <AuthProvider> {/* Envuelve toda la app con AuthProvider */}
      <Router>
        <Navbar />
        <div className="main-content">
          <a href="https://api.whatsapp.com/send?phone=5492604021708" target="_blank" rel="noopener noreferrer" className='whatsapp'>
            <FontAwesomeIcon icon={faWhatsapp} color="#f0f0f0" />
          </a>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/accommodations" element={<Accommodation />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/terminos" element={<Terminos />} />
            <Route path="/privacidad" element={<Privacidad />} />
            <Route path="/cookies" element={<Cookies />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/infraestructura" element={<Infraestructura />} />
            <Route path="/programas" element={<Programas />} />
            <Route path="/" element={<LoginForm />} />
            <Route path="/" element={<RegisterForm />} />
            <Route path="/" element={<ForgotPassword />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
