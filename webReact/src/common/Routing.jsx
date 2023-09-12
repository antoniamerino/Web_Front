import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Landing from './../Landing.jsx';
import UserWelcome from './../UserWelcome';
import App from './App';

function Routing() {
    return (
        <>
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Landing />} />
                <Route path={"/user"} element={<UserWelcome />} />
                <Route path={"/app"} element={<App />} />
            </Routes>
        </BrowserRouter>
        </>
    )
}

export default Routing