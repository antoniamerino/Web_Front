import './Landing.css'
import logo from './assets/logo.png';

// DISEÑO INSPIRADO EN LOGIN DE FACEBOOK

function Landing() {
    return (
        <>
        <div className="formato-landing">
        <div>
          <img src={logo} alt="Logo" style={{width: "300px"}}/>
          <h3>Intercambio de Servicios</h3>
          
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
              <label>¿Aún no tienes cuenta?</label>
              <button type="submit">Registrarse</button>
        </div>

      </div>
      </>
    );
}

export default Landing;