 
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Landing.css';
import logo from "./assets/whitelogowink.jpeg";
import LogoutButton from './Logout';
import AuthCheck from './auth/AuthCheck';

export default function Landing() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    // Navegar a la ruta "/login"
    navigate('/login');
  };

  function handleRegisterClick() {
    // Navegar a la ruta "/register"
    navigate('/register');
  }

  function displayLoginOrLogout() {
    if (AuthCheck()) {
      return (
        <div className="login-form">
          <h2>¡Bienvenido!</h2>
          <p>Has iniciado sesión correctamente.</p>
          <p>¡Ya puedes empezar a usar la aplicación!</p>
          <p>Si quieres cerrar sesión, pulsa el botón de abajo.</p>
            <LogoutButton />
        </div>
      );
    } else {
      return (
        <div className="login-form">
          <h2>Iniciar Sesión</h2>
          <form>
            <button type="button" className="login-button" onClick={handleLoginClick}>
              Iniciar Sesión
            </button>
            <p className="login-lost" onClick={handleRegisterClick}>
              ¿No tienes cuenta? <a href="">Regístrate aquí</a>
            </p>
          </form>
        </div>
      );
    }
  }


  return (
    <div className="container">
      <img src={logo} className='logo' alt='Logo' />

      {displayLoginOrLogout()}
    </div>
  );
}