import React, {useContext, useState} from 'react';
import './Login.css';
import { AuthContext } from './auth/AuthContext';

const LogoutButton = () => {
    const { logout } = useContext(AuthContext);
    const [msg, setMsg] = useState("");

    function handleLogout() {
        logout();
        setMsg("has cerrado sesion con éxito");
        // send to "/"
        location.href = "/";

    }

    return (
        <>
            {msg.length > 0 && <div className='successMsg'> {msg} </div>}
            <button onClick={handleLogout}>Cerrar Sesión</button>
        </>
    )
}

export default LogoutButton;