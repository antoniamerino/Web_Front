/* eslint-disable no-unused-vars */
// Create_Post.jsx

import React, { useState, useContext } from 'react';
import './Post.css';
import axios from 'axios';
import { AuthContext } from '../auth/AuthContext';
import API_URL from '../config';

function Create_Post() {

  const [inputIdUser, setInputIdUser] = useState("");
  const [inputTitulo, setInputTitulo] = useState("");
  const [inputDescripcion, setInputDescripcion] = useState("");
  const [inputCategoria, setInputCategoria] = useState("");
  const [inputPrecio, setInputPrecio] = useState("");
  const [inputCreatedAt, setInputCreatedAt] = useState(new Date().toISOString());
  const [inputUpdatedAt, setInputUpdatedAt] = useState(new Date().toISOString()); 
  const [inputFoto, setInputFoto] = useState("");
  
  const [msg, setMsg] = useState("");
  const [complete, setComplete] = useState(false);
    const { token } = useContext(AuthContext);
    const headers = {
        'Authorization': `Bearer ${token}`
    }

    const getUserData = () => {
        var user = JSON.parse(localStorage.getItem("userData"));
        console.log(user);
        return user;
      }
    const user = getUserData();



  const handleCreatePost = async (event) => {
    event.preventDefault();
    setInputIdUser(user.id)
    const myUserIdValue = user.id;
    setInputIdUser(myUserIdValue);


    if (inputIdUser !== "" && inputTitulo !== "" && inputDescripcion !== "" && inputCategoria !== "" && inputPrecio !== "" && inputCreatedAt !== "" && inputUpdatedAt !== "")
    {       
            try {
                const nuevo_post = {
                    id_user: myUserIdValue,
                    titulo: inputTitulo,
                    foto: inputFoto,
                    descripcion: inputDescripcion,
                    categoria: inputCategoria, 
                    precio: parseInt(inputPrecio, 10),
                    createdAt: inputCreatedAt,
                    updatedAt: inputUpdatedAt
                  }

                    await axios.post(`${API_URL}/posts`, nuevo_post, { headers });
                    setMsg("Posteado bien");
                    setComplete(true);
            }

            catch (error){
                setMsg("error");
                setComplete(false);
            }
    }
    else{
        setMsg("Debes completar todos los inputs");
        setComplete(false);

    }
}
return (
  <div className="Post">
      <div className="background">
          <div className="shape"></div>
          <div className="shape"></div>
      </div>
      
      <form onSubmit={handleCreatePost} className="Postform">
          <h1>Crear Post</h1>
          {msg && <h2 className="errormsj">{msg}</h2>}
          <div className="form-group">
              <label htmlFor="titulo">Titulo</label>
              <input
                  className="form-control"
                  type="titulo"
                  id="titulo"
                  name="titulo"
                  value={inputTitulo}
                  onChange={(event) => setInputTitulo(event.target.value)}
                  required
              />
          </div>
          <div className="form-group">
              <label htmlFor="descripcion">Descripcion</label>
              <input
                  className="form-control"
                  type="descripcion"
                  id="descripcion"
                  name="descripcion"
                  value={inputDescripcion}
                  onChange={(event) => setInputDescripcion(event.target.value)}
                  required
              />
          </div>
          <div className="form-group">
              <label htmlFor="categoria">Categoria</label>
              <input
                  className="form-control"
                  type="categoria"
                  id="categoria"
                  name="categoria"
                  value={inputCategoria}
                  onChange={(event) => setInputCategoria(event.target.value)}
                  required
              />
          </div>

          <div className="form-group">
              <label htmlFor="precio">Precio</label>
              <input
                  className="form-control"
                  type="precio"
                  id="precio"
                  name="precio"
                  value={inputPrecio}
                  onChange={(event) => setInputPrecio(event.target.value)}
                  required
              />
          </div>


          <button className="btn btn-primary" type="submit">
              Publicar
          </button>

          {/* Si esta completo, se renderiza el boton
          {complete && <ButtonAPI handleClickGet={handleClickNext} textspan={'Avanzar'}/>} */}
      </form>
  </div>
);
}

export default Create_Post;
