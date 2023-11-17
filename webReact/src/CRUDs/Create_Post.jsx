// Create_Post.jsx

import React, { useState } from 'react';
import './Post.css';
import axios from 'axios';

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

  const handleCreatePost = async (event) => {
    event.preventDefault();

    if (inputIdUser !== "" && inputTitulo !== "" && inputDescripcion !== "" && inputCategoria !== "" && inputPrecio !== "" && inputCreatedAt !== "" && inputUpdatedAt !== "" && inputFoto !== "")
    {       
            try {
                const nuevo_post = {
                  iduser: parseInt(inputIdUser, 10),
                    titulo: inputTitulo,
                    foto: inputFoto,
                    descripcion: inputDescripcion,
                    categoria: inputCategoria, 
                    precio: parseInt(inputPrecio, 10),
                    createdAt: inputCreatedAt,
                    updatedAt: inputUpdatedAt
                  }

                    await axios.post('http://localhost:3000/posts', nuevo_post);
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
              <label htmlFor="iduser">Id User</label>
              <input
                  className="form-control"
                  type="iduser"
                  id="iduser"
                  name="iduser"
                  value={inputIdUser}
                  onChange={(event) => setInputIdUser(event.target.value)}
                  required
              />

          </div>
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
              <label htmlFor="foto">Foto</label>
              <input
                  className="form-control"
                  type="foto"
                  id="foto"
                  name="foto"
                  value={inputFoto}
                  onChange={(event) => setInputFoto(event.target.value)}
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
