import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";

function AuthProvider({ children }) {
    const [token, setToken] = useState(localStorage.getItem("token" || null));

    useEffect(() => {
        localStorage.setItem("token", token);
    }, [token]);

    function logout(token) {
        setToken(null);
        localStorage.setItem("userData", null);
    }

    return (
        <AuthContext.Provider value={{ token, setToken, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;