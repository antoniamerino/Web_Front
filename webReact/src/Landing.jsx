import './Landing.css'
import logo from './assets/logo.png';

// DISEÑO INSPIRADO EN LOGIN DE FACEBOOK

function Landing() {
    return (
        <>
        <div className="formato-landing">
        <div>

          <img src={logo} alt="Logo" style={{width: "300px"}}/>
          <p>
            <strong>Tu página de intercambio de servicios</strong>
          </p>
        </div>

{/* CAJA DE INICIO DE SESION */} 
        <div className="caja-inicio-sesion">
          <h2>Iniciar Sesión</h2>
          <form>

              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" />
              <label htmlFor="password">Contraseña:</label>
              <input type="password" id="password" name="password" />

            <button type="submit">Iniciar Sesión</button>
          </form>
              <p>¿Aún no tienes cuenta?</p>
              <button type="submit">Registrarse</button>
        </div>

      </div>
      <a href='/feed'>Acceder sin Iniciar Sesión</a>
      </>
    );
}

export default Landing;