import React, { useEffect, useState, useContext } from 'react';
import { useParams} from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../auth/AuthContext';
import API_URL from '../config';

function Create_Comentario() {

    const { postId } = useParams(); 

    const [comentarios, setComentarios] = useState([]);
    const [nuevoComentario, setNuevoComentario] = useState('');
    const { token } = useContext(AuthContext);
    const headers = {
      'Authorization': `Bearer ${token}`
    }
  
    useEffect(() => {
      axios.get(`${API_URL}/comentarios/post/${postId}`, { headers })
        .then(response => {
          setComentarios(response.data);
        })
        .catch(error => {
          console.error(error);
        });
    }, [postId]); 

    const handleEliminarComentario = async (comentarioId) => {
      try {
        // Realiza la llamada a la API para eliminar el comentario
        await axios.delete(`${API_URL}/comentarios/${comentarioId}`, { headers });
  
        // Actualiza la lista de comentarios después de la eliminación
        const nuevosComentarios = comentarios.filter(
          (comentario) => comentario.id !== comentarioId
        );
        setComentarios(nuevosComentarios);
      } catch (error) {
        console.error(error);
      }
    };


    const handleCrearComentario = async () => {
      try {
        // Realiza la llamada a la API para crear un nuevo comentario
        const response = await axios.post(`${API_URL}/comentarios`, {
          id_post: postId,
          contenido: nuevoComentario,
        }, { headers });
  
        // Actualiza la lista de comentarios después de la creación
        setComentarios([...comentarios, response.data]);
        // Limpia el campo de nuevoComentario después de la creación
        setNuevoComentario('');
      } catch (error) {
        console.error(error);
      }
    };
  
    return (
      <div>
         <div>
        <h3>Nuevo Comentario</h3>
        <input
          type="text"
          value={nuevoComentario}
          onChange={(e) => setNuevoComentario(e.target.value)}
          placeholder="Escribe tu comentario"
        />
        <button onClick={handleCrearComentario}>Crear Comentario</button>
      </div>
        <h2>Comentarios del Post {postId}</h2>
        <ul>
          {comentarios.map(comentario => (
            <li key={comentario.id}>{comentario.contenido}
            <button onClick={() => handleEliminarComentario(comentario.id)}>
              Eliminar
            </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default Create_Comentario;