import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Landing from './../Landing.jsx';
import Feed from '../Feed';
import App from './App';
import Instructions from '../Instructions';

function Routing() {
    return (
        <>
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Landing />} />
                <Route path={"/feed"} element={<Feed />} />
                <Route path={"/app"} element={<App />} />
                <Route path={"/instructions"} element={<Instructions />} />
            </Routes>
        </BrowserRouter>
        </>
    )
}

export default Routing