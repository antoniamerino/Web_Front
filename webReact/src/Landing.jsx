import React from 'react';
import './landing.css';
import logo from "./assets/whitelogowink.jpeg";

function App() {
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

export default App;