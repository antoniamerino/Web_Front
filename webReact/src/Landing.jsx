/* eslint-disable no-unused-vars */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Landing.css';
import logo from "./assets/whitelogowink.jpeg";

export default function Landing() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    // Navegar a la ruta "/login"
    navigate('/login');
  };

  return (
    <div className="container">
      <img src={logo} className='logo' alt='Logo' />

      <div className="login-form">
        <h2>Iniciar Sesión</h2>
        <form>
          <button type="button" className="login-button" onClick={handleLoginClick}>
            Iniciar Sesión
          </button>
          <p className="login-lost">
            ¿No tienes cuenta? <a href="#">Regístrate aquí</a>
          </p>
        </form>
      </div>
    </div>
  );
}