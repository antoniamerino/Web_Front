import AuthProvider from "./AuthProvider";

function AuthCheck() {
  return localStorage.getItem('token') != 'null';
}

export default AuthCheck;