/* eslint-disable no-unused-vars */
import React from 'react';
import './Landing.css';
import logo from "./assets/whitelogowink.jpeg";

export default function Landing() {
  return (
    <div className="container">
      <img src={logo} className='logo' alt='Logo' />

      <div className="login-form">
        <h2>Iniciar Sesión</h2>
        <form>
          <input
            type="text"
            placeholder="Usuario"
            className="input-field"
          />
          <input
            type="password"
            placeholder="Contraseña"
            className="input-field"
          />
          <button type="submit" className="login-button">
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