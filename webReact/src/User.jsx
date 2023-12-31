import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './User.css';
import perfil from "./assets/perfil.png";
import { AuthContext } from './auth/AuthContext';
import API_URL from './config';

export default function User() {
  const [users, setUsers] = useState([]);
  const [followerUserId, setFollowerUserId] = useState(null); // Cambiar según la sesión!!
  const [userMessages, setUserMessages] = useState({}); // Almacena mensajes sgn cada usuario
  const { token } = useContext(AuthContext);
  const headers = {
    'Authorization': `Bearer ${token}`
}

useEffect(() => {
  axios.get(`${API_URL}/users`, { headers })
    .then((response) => {
      setUsers(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
  const user = getUserData();
  setFollowerUserId(user.id);

}, []); 

  // manejo errores como loco, desordenado hasta q funciono
  const handleFollow = async (userId) => {
    try {
      const response = await axios.get(`${API_URL}/followers/user/${userId}/follower/${followerUserId}`, { headers });
  
      if (response.status === 200) {
        setUserMessages({ ...userMessages, [userId]: 'Ya sigues a este usuario' });
      } else if (response.status === 404) {
        await axios.post(`${API_URL}/followers`, {
          id_user: userId,
          follower_user_id: followerUserId,
        }, { headers });
        setUserMessages({ ...userMessages, [userId]: 'Siguiendo a este usuario' });
      }
    } catch (error) {
      if (axios.isAxiosError(error) && error.response && error.response.status === 404) {
        await axios.post(`${API_URL}/followers`, {
          id_user: userId,
          follower_user_id: followerUserId,
        }, { headers });
        setUserMessages({ ...userMessages, [userId]: 'Ahora sigues a este usuario' });
      } else {
        console.error('Error al seguir al usuario:', error);
        setUserMessages({ ...userMessages, [userId]: 'Error al seguir al usuario' });
      }
    }
  };
  

  const handleUnfollow = async (userId) => {
    try {
      const response = await axios.get(`${API_URL}/followers/user/${userId}/follower/${followerUserId}`, { headers });
  
      console.log('Unfollow Response:', response);
  
      if (response.status === 200) {
        await axios.delete(`${API_URL}/followers/${response.data[0].id}`, { headers });
        setUserMessages({ ...userMessages, [userId]: 'Dejaste de seguir al usuario' });
      } else if (response.status === 404) {
        setUserMessages({ ...userMessages, [userId]: 'No sigues a este usuario' });
      }
    } catch (error) {
      console.error('Error al dejar de seguir al usuario:', error);
      setUserMessages({ ...userMessages, [userId]: 'No sigues a este usuario' });
    }
  };

  const handleDeleteUser = async (userId) => {
    try {
      const response = await axios.delete(`${API_URL}/users/${userId}`, { headers });

      console.log('Delete Response:', response);

      if (response.status === 200) {
        setUserMessages({ ...userMessages, [userId]: 'Usuario eliminado' });
      } else if (response.status === 404) {
        setUserMessages({ ...userMessages, [userId]: 'No se encontró el usuario' });
      }
    } catch (error) {
      console.error('Error al eliminar al usuario:', error);
      setUserMessages({ ...userMessages, [userId]: 'Error al eliminar al usuario' });
    }
  };

  const getUserData = () => {
    try {
      var user = JSON.parse(localStorage.getItem("userData"));
      console.log("User data retrieved from localStorage:", user);
      
      if (user == null || user == "null") {
        console.log("User is null or 'null', providing default data.");
        user = {
          name: "Sin iniciar sesión",
          descripcion: "Descripción",
        }
      }

      return user;
    } catch (error) {
      console.error("Error retrieving user data from localStorage:", error);
      return {
        name: "Sin iniciar sesión",
        descripcion: "Descripción",
      };
    } 
  }

  const user = getUserData();

  function showDeleteButton(userId) {
    if (user.tipo == "admin") {
      return (
        <button className="red" onClick={() => handleDeleteUser(userId)}>
          Eliminar Usuario
        </button>
      )
    }
  }

  return (
    <div>
      <div className="user-profile">
        <img src={perfil} className='user-img' alt='Perfil' />

        <h2 className="user-name">{user.name}</h2>
        <p className="user-bio">{user.descripcion}</p>
        <p className="user-money"><strong>Monedero:</strong> {user.monedero}</p>
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

              {/* Botón para eliminar */}
              {showDeleteButton(user.id)}

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
