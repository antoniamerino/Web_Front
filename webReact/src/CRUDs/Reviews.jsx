import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../auth/AuthContext';
import './Review.css';

function Reviews() {
  const { userId } = useParams();

  const [UserIdAutor, setUserIdAutor] = useState(); 

  const [reviews, setReviews] = useState([]);
  const [nuevoReview, setNuevoReview] = useState('');
  const [nuevaCalificacion, setNuevaCalificacion] = useState(0);
  const [msg, setMsg] = useState('');
  const { token } = useContext(AuthContext);
  const headers = {
    'Authorization': `Bearer ${token}`
  }

  useEffect(() => {
    axios.get(`http://localhost:3000/reviews/user/${userId}`, { headers })
      .then(response => {
        setReviews(response.data);
      })
      .catch(error => {
        console.error(error);
      });
      setUserIdAutor(userId);
  }, []);
  

  const handleEliminarReview = async (reviewId) => {
    try {
      await axios.delete(`http://localhost:3000/reviews/${reviewId}`, { headers });

      const nuevosReviews = reviews.filter(
        (review) => review.id !== reviewId
      );
      setReviews(nuevosReviews);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCrearReview = async () => {
    try {

    if (nuevaCalificacion < 0 || nuevaCalificacion > 5) {
            setMsg('La calificación debe estar entre 0 y 5.');
            console.error('La calificación debe estar entre 0 y 5.');
            return;
          }
      const response = await axios.post('http://localhost:3000/reviews', {
        id_user: userId,
        id_user_autor: UserIdAutor,
        descripcion: nuevoReview,
        calificacion: nuevaCalificacion,
      }, { headers });

      setReviews([...reviews, response.data]);
      setNuevoReview('');
      setNuevaCalificacion(0);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div>
        <h3>Nuevo Review</h3>
        <input
          type="text"
          value={nuevoReview}
          onChange={(e) => setNuevoReview(e.target.value)}
          placeholder="Escribe tu review"
        />
        {msg && <h2 className="errormsj">{msg}</h2>}
        <input
          type="number"
          value={nuevaCalificacion}
          onChange={(e) => setNuevaCalificacion(Number(e.target.value))}
          placeholder="Calificación (0-10)"
        />
        <button onClick={handleCrearReview}>Crear Review</button>
      </div>
      <h2>Review del Usuario {userId}</h2>
      <ul>
        {reviews.map(review => (
          <li key={review.id}>
            Descripción: {review.descripcion}<br />
            Calificación: {String(review.calificacion)}
            <button onClick={() => handleEliminarReview(review.id)}>
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Reviews;
