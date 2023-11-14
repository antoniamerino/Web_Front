/* eslint-disable no-unused-vars */
import React, {useState} from "react";
import './Login.css';
import logo from "./assets/whitelogowink.jpeg";
import axios from "axios";

//Componente
function Login() {
    //Dos estados
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();

        console.log("apretaste el form")
        // vamos a enviar un post
    };

  return (
    <div className="container">
      <img src={logo} className='logo' alt='Logo' />

      <div className="login-form">
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