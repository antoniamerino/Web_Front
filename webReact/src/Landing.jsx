import logo from './assets/logo.png';

function Landing() {
    return (
        <>
        <h1>Bienvenido</h1>
        <div>
            <img src={logo} alt="Logo" style={{width: "300px"}} />
            <h2>Tu página de intercambio de servicios</h2>
        </div>

        <div>
            <p>¿Qué vas a explorar hoy?</p>
            <form>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" />
                <label htmlFor="password">Contraseña</label>
                <input type="password" id="password" name="password" />
                <button type="submit">Iniciar sesión</button>
                
                
            </form>
            <p>¿Aún no tienes cuenta?</p>
            <a href='/feed'> Pagina Principal </a>
            <a href='/instructions'> Instrucciones</a>
            <button>Registrarse</button>
        </div>
        </>
    );
}

export default Landing;