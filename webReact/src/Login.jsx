/* eslint-disable no-unused-vars */
import React, {useState} from "react";
import './Login.css';
import logo from "./assets/whitelogowink.jpeg";
import axios from "axios";
import { AuthContext } from "./auth/AuthContext";
import { useContext } from "react";
import { json } from "react-router-dom";
import API_URL from './config';

//Componente
function Login() {
    const { token, setToken } = useContext(AuthContext);
    //Dos estados
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userMessage, setUserMessage] = useState(""); // Almacena mensajes sgn cada usuario

    async function getUserData(email) {
      try {
          const response = await axios.get(`${API_URL}/users/email/${email}`, {});
          const userData = response.data;
          localStorage.setItem("userData", JSON.stringify(userData));
          return userData;
      } catch (error) {
          console.log("Error al obtener datos del usuario:", error);
          return null;
      }
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log("apretaste el form")
    try {
        const response = await axios.post(`${API_URL}/login`, {
            email: email,
            password: password
        });

        const access_token = response.data.access_token;
        setToken(access_token);

        // Llamada para obtener datos del usuario y almacenarlos en localStorage
        await getUserData(email);

        location.href = "/";
        console.log(response);
    } catch (error) {
        console.log(error);
        if (error.response.status === 400) {
            setUserMessage('Credenciales inválidas');
        }
    }
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