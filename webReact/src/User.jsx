import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './User.css';
import perfil from "./assets/perfil.png";

export default function User() {
  const [users, setUsers] = useState([]);
  const [followerUserId, setFollowerUserId] = useState(1); // Cambiar según la sesión!!
  const [userMessages, setUserMessages] = useState({}); // Almacena mensajes sgn cada usuario

  useEffect(() => {
    axios.get('http://localhost:3000/users')
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [setFollowerUserId]);

  // manejo errores como loco, desordenado hasta q funciono
  const handleFollow = async (userId) => {
    try {
      const response = await axios.get(`http://localhost:3000/followers/user/${userId}/follower/${followerUserId}`);
  
      if (response.status === 200) {
        setUserMessages({ ...userMessages, [userId]: 'Ya sigues a este usuario' });
      } else if (response.status === 404) {
        await axios.post('http://localhost:3000/followers', {
          id_user: userId,
          follower_user_id: followerUserId,
        });
        setUserMessages({ ...userMessages, [userId]: 'Siguiendo a este usuario' });
      }
    } catch (error) {
      if (axios.isAxiosError(error) && error.response && error.response.status === 404) {
        await axios.post('http://localhost:3000/followers', {
          id_user: userId,
          follower_user_id: followerUserId,
        });
        setUserMessages({ ...userMessages, [userId]: 'Ahora sigues a este usuario' });
      } else {
        console.error('Error al seguir al usuario:', error);
        setUserMessages({ ...userMessages, [userId]: 'Error al seguir al usuario' });
      }
    }
  };
  

  const handleUnfollow = async (userId) => {
    try {
      const response = await axios.get(`http://localhost:3000/followers/user/${userId}/follower/${followerUserId}`);
  
      console.log('Unfollow Response:', response);
  
      if (response.status === 200) {
        await axios.delete(`http://localhost:3000/followers/${response.data[0].id}`);
        setUserMessages({ ...userMessages, [userId]: 'Dejaste de seguir al usuario' });
      } else if (response.status === 404) {
        setUserMessages({ ...userMessages, [userId]: 'No sigues a este usuario' });
      }
    } catch (error) {
      console.error('Error al dejar de seguir al usuario:', error);
      setUserMessages({ ...userMessages, [userId]: 'No sigues a este usuario' });
    }
  };
  

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
      </div>

      <div className="user-list">
        <h3>Lista de Usuarios:</h3>
        <ul>
          {users.map(user => (
            <li key={user.id}>
              {userMessages[user.id] && <h2 className="errormsj">{userMessages[user.id]}</h2>}
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

              <Link to={`/feed/reviews/${user.id}`} style={{ textDecoration: 'none' }}>
                <button>
                  Ver Reviews
                </button>
              </Link>

              {/* Botón "Follow" */}
              <button onClick={() => handleFollow(user.id)}>
                Follow
              </button>

              {/* Botón "Unfollow" */}
              <button onClick={() => handleUnfollow(user.id)}>
                Unfollow
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
