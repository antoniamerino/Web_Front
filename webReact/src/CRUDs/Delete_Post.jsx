// Create_Post.jsx

import React, { useState } from 'react';
import './Post.css';
import axios from 'axios';

function Delete_Post() {

  const [inputId, setInputId] = useState("");
  const [inputIdUser, setInputIdUser] = useState("");
  const [inputTitulo, setInputTitulo] = useState("");
  const [inputFoto, setInputFoto] = useState("");
  const [inputDescripcion, setInputDescripcion] = useState("");
  const [inputCategoria, setInputCategoria] = useState("");
  const [inputPrecio, setInputPrecio] = useState("");
  const [inputCreatedAt, setInputCreatedAt] = useState(new Date().toISOString());
  const [inputUpdatedAt, setInputUpdatedAt] = useState(new Date().toISOString()); 
  
  const [msg, setMsg] = useState("");
  const [complete, setComplete] = useState(false);

  const handleClickGet = async (event) => {
    if (inputId === "") {
        setMsg("Debes ingresar un id");
        return;
    }

    try {
        const response = await axios.get('http://localhost:3000/posts/'+inputId); 
        setInputIdUser(response.data.id_user);
        setInputTitulo(response.data.titulo);
        setInputFoto(response.data.foto);
        setInputDescripcion(response.data.descripcion);
        setInputCategoria(response.data.categoria);
        setInputPrecio(response.data.precio);
        setInputCreatedAt(response.data.createdAt);
        setInputUpdatedAt(response.data.updatedAt);
    }
    catch (error){
        setMsg("No existe post o error en get");
    }

}


  const handleClickDelete = async (event) => {
    event.preventDefault();

    if (inputIdUser !== "" && inputTitulo !== "" && inputDescripcion !== "" && inputCategoria !== "" && inputPrecio !== "" && inputCreatedAt !== "" && inputUpdatedAt !== "" && inputFoto !== "")
    {       
            try {
                try {
                    await axios.delete(`http://localhost:3000/comentarios/post/${inputId}`);
                    }
                    catch (error){
                        console.error("No hay comentarios que eliminar o error en la eliminación de comentarios", error);
                    }

                const response = await axios.delete('http://localhost:3000/posts/'+inputId); 
                setMsg("Eliminado correctamente");
                setInputIdUser("");
                setInputTitulo("");
                setInputFoto("");
                setInputDescripcion("");
                setInputCategoria("");
                setInputPrecio("");
                setInputCreatedAt("");
                setInputUpdatedAt("");
                setComplete(true);
            }

            catch (error){
                console.error("Error en la eliminación:", error);
                setMsg("No se eliminó correctamente. Consulta la consola para más detalles.");
                setComplete(false);
            }
    }
    else{
        setMsg("Debes completar todos los inputs");
        setComplete(false);

    }
}
return (
    <div className="Delete">
        <div className="background">
            <div className="shape"></div>
            <div className="shape"></div>
        </div>
        <h4 className="frase">Ingresa el Id del Post que deseas eliminar, luego haz click en el boton de abajo</h4>
        <div className="form-group">
                <label htmlFor="id">Id</label>
                <input
                    className="form-control"
                    type="id"
                    id="id"
                    name="id"
                    value={inputId}
                    onChange={(event) => setInputId(event.target.value)}
                    required
                />
        </div>

        <div>
            <button className="btn btn-primary" type="submit" onClick={handleClickGet}>
                Get
            </button>
        </div>
        
        <form onSubmit={handleClickDelete} className="Deleteform">
            <h1>Post a Eliminar</h1>
            {msg && <h2 className="errormsj">{msg}</h2>}
            
            <div className="form-group">
                <label htmlFor="name">Id User: {inputIdUser}</label>
            </div>

            <div className="form-group">
                <label htmlFor="name">Titulo: {inputTitulo}</label>
            </div>
            <div className="form-group">
                <label htmlFor="description">Descripcion: {inputDescripcion}</label>
            </div>
            <div className="form-group">
                <label htmlFor="stock">Categoria: {inputCategoria}</label>
            </div>
            <div className="form-group">
                <label htmlFor="price">Precio: {inputPrecio}</label>
            </div>

            <button className="btn btn-primary" type="submit">
                Delete
            </button>

            {/* Si esta completo, se renderiza el boton */}
            {/* {complete && <ButtonAPI handleClickGet={handleClickNext} textspan={'Avanzar'}/>} */}
        </form>
    </div>
);
}

export default Delete_Post;