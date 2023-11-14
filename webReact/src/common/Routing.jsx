import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Landing from '../Landing.jsx';
import Feed from '../Feed';
import App from './App';
import Instructions from '../Instructions';
import User from '../User';
import Login from '../Login.jsx';

function Routing() {
    return (
        <>
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Landing />} />
                <Route path={"/feed"} element={<Feed />} />
                <Route path={"/app"} element={<App />} />
                <Route path={"/instructions"} element={<Instructions />} />
                <Route path= {"/user"} element={<User />} />
                <Route path= {"/login"} element={<Login />} />
            </Routes>
        </BrowserRouter>
        </>
    )
}

export default Routing