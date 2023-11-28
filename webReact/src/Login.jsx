/* eslint-disable no-unused-vars */
import React, {useState} from "react";
import './Login.css';
import logo from "./assets/whitelogowink.jpeg";
import axios from "axios";
import { AuthContext } from "./auth/AuthContext";
import { useContext } from "react";
import { json } from "react-router-dom";

//Componente
function Login() {
    const { token, setToken } = useContext(AuthContext);
    //Dos estados
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userMessage, setUserMessage] = useState(""); // Almacena mensajes sgn cada usuario

    async function getUserData(email) {
        axios.get(`http://localhost:3000/users/email/${email}`, {
        }).then((response) => {
            localStorage.setItem("userData", JSON.stringify(response.data));
            const userData = JSON.parse(localStorage.getItem("userData"));
            console.log(userData);
            return response.data;
        }).catch((error) => {
            console.log(error);
            return null;
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        console.log("apretaste el form")
        // vamos a enviar un post
        axios.post("http://localhost:3000/login",
        {
            email: email,
            password: password
        }).then((response) => {
          // uno entra acá si no hay error en el request
          const access_token = response.data.access_token;
          setToken(access_token);
          getUserData(email);
          location.href = "/";

          console.log(response);
        }).catch((error) => {
          console.log(error);
          if (error.response.status === 400) {
            setUserMessage('Credenciales inválidas');
        }
        })
    };

  return (
    <div className="container">
      <img src={logo} className='logo' alt='Logo' />

      <div className="login-form">
      {userMessage && <h2 className="errormsj">{userMessage}</h2>}
        <h2>Iniciar Sesión</h2>
        <form onSubmit={handleSubmit}>
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
            <input type="submit" value="Enviar" />
        </form>
      </div>
    </div>
  );
}

export default Login;