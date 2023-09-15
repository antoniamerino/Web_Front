import './User.css'
import perfil from "./assets/perfil.png";
export default function User() {

    return (
        <div className="user-profile">
            <img src={perfil} className='user-img' alt='Perfil' />
          
          <h2 className="user-name">Nombre de Usuario</h2>
          <p className="user-bio">Descripción breve del usuario.</p>
          <div className="user-stats">
            <div className="stat">
              <strong>Seguidores:</strong> 100
            </div>
            <div className="stat">
              <strong>Siguiendo:</strong> 50
            </div>
          </div>
        </div>
      );
}