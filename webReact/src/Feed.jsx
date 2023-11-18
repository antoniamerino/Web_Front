import './Feed.css'
// import Post from "./Post"
import taxi from './assets/taxi.jpg';
import profe from './assets/profe.jpg';
import limpieza from './assets/limpieza.jpg';
import payaso from './assets/payaso.jpg';
import { Link } from 'react-router-dom';
import axios from 'axios';
import React, { useState , useEffect, useContext } from 'react';
import { AuthContext } from './auth/AuthContext';

function Feed() {
    // const posts = [
    //     {id:0, imgSrc: taxi, postName: 'Ofrezco transporte'},
    //     {id:1, imgSrc: profe, postName: 'Necesito profesora'},
    //     {id:2, imgSrc: limpieza, postName: 'Ofrezco limpieza'},
    //     {id:3, imgSrc: payaso, postName: 'Necesito payaso'},
    // ]

    const [posts, setPosts] = useState([]);
    const { token } = useContext(AuthContext);
    const headers = {
        'Authorization': `Bearer ${token}`
    }

    useEffect(() => {
      axios.get('http://localhost:3000/posts', { headers })
        .then((response) => {
          setPosts(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);


    return(
    
        <div className='feed'>
            {/* Barra estética de nueva publicación */}
            <Link to="/feed/create_post" style={{ textDecoration: 'none' }}>
            <button style={{ backgroundColor: '#0056b3', color: 'white', padding: '10px', border: 'none', cursor: 'pointer' }}>
                Crear Post
            </button>
            </Link>
            <Link to="/feed/delete_post" style={{ textDecoration: 'none' }}>
            <button style={{ backgroundColor: '#0056b3', color: 'white', padding: '10px', border: 'none', cursor: 'pointer' }}>
                Eliminar Post
            </button>
            </Link>


            {/* Lista de publicaciones */}
            {/* <div className='feed-row'>

            </div> */}
            <div>
            {posts.map(post => (
                <div className="post" key={post.id}>
                <h3 className="post-id">{post.id}</h3>
                <h3 className="post-title">{post.titulo}</h3>
                <p className="post-description">{post.descripcion}</p>
                <div className="post-info">
                    <span className="post-category">{post.categoria}</span>
                </div>
                <span className="post-price">${post.precio}</span>
                
                <Link to={`/feed/chat/${post.id_user}`} style={{ textDecoration: 'none' }}>
                <button style={{ backgroundColor: '#007BFF', color: 'white', padding: '8px', border: 'none', cursor: 'pointer' }}>
                    Contactar al oferente
                </button>
                </Link>

                <Link to={`/feed/create_comentario/${post.id}`} style={{ textDecoration: 'none' }}>
                <button style={{ backgroundColor: '#4CAF50', color: 'white', padding: '8px', border: 'none', cursor: 'pointer' }}>
                    Comentarios
                </button>
                </Link>
                </div>

            ))}
            </div>
        </div>
    )
}

export default Feed;