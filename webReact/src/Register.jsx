/* eslint-disable no-unused-vars */
import React, {useState} from "react";
import './Login.css';
import logo from "./assets/whitelogowink.jpeg";
import axios from "axios";
import { AuthContext } from "./auth/AuthContext";
import { useContext } from "react";
import { json } from "react-router-dom";

//Componente
function Register() {
    const { token, setToken } = useContext(AuthContext);
    //Dos estados
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [foto, setFoto] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [userMessage, setUserMessage] = useState(""); // Almacena mensajes sgn cada usuario

    const handleSubmit = async (event) => {
        event.preventDefault();

        console.log("apretaste el form")
        // vamos a enviar un post
        axios.post("http://localhost:3000/signup",
        {
            name: name,
            username: username,
            email: email,
            password: password,
            tipo: "usuario",
            foto: foto,
            descripcion: descripcion,
            calificacion: 0,
            monedero: 20000

        }).then((response) => {
          // uno entra acá si no hay error en el request
          location.href = "/login";
          console.log(response);
        }).catch((error) => {
          console.log(error);
          if (error.response.status === 400) {
            setUserMessage('El email ya está en uso');
          } else {
            setUserMessage('Error al registrarse');
          }
        })
    };

  return (
    <div className="container">
      <img src={logo} className='logo' alt='Logo' />
      
      <div className="signup-form">
      {userMessage && <h2 className="errormsj">{userMessage}</h2>}
        <h2>Registrarse</h2>
        <form onSubmit={handleSubmit}>
            <label>
                Nombre:
                <input 
                    type="text"
                    name="name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    required
                />
            </label>
            <label>
                Username:
                <input 
                    type="text"
                    name="username"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    required
                />
            </label>
            <label>
                Email:
                <input 
                    type="email"
                    name="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                />
            </label>
            <label>
                Password:
                <input 
                    type="password"
                    name="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                />
            </label>
            <label>
                Foto:
                <input 
                    type="text"
                    name="foto"
                    value={foto}
                    onChange={e => setFoto(e.target.value)}
                />
            </label>
            <label>
                Descripción:
                <input 
                    type="text"
                    name="descripcion"
                    value={descripcion}
                    onChange={e => setDescripcion(e.target.value)}
                    required
                />
            </label>
            <input type="submit" value="Enviar" />
        </form>
      </div>
    </div>
  );
}

export default Register;