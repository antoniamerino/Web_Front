import React, { useState , useEffect } from 'react';
import axios from 'axios';

import './User.css'
import perfil from "./assets/perfil.png";


export default function User() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/users')
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

    return (
      <div>
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


      {/* <div className="response-data">
        <h3>Respuesta del servidor:</h3>
        <pre>{JSON.stringify(responseData, null, 2)}</pre>
      </div> */}




        </div>
<div className="user-list">
        <h3>Lista de Usuarios:</h3>
        <ul>
          {users.map(user => (
            <li key={user.id}>
              <strong>ID:</strong> {user.id}<br />
              <strong>Nombre:</strong> {user.name}<br />
              <strong>Nombre de usuario:</strong> {user.username}<br />
              <strong>Email:</strong> {user.email}<br />
              <strong>Tipo:</strong> {user.tipo}<br />
              <strong>Descripción:</strong> {user.descripcion}<br />
              <strong>Monedero:</strong> {user.monedero}<br />
              <strong>Fecha de Creación:</strong> {user.createdAt}<br />
              <strong>Fecha de Actualización:</strong> {user.updatedAt}<br />
              <br />
            </li>
          ))}
        </ul>
      </div>

      
      </div>
      );
}