import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Landing from '../Landing.jsx';
import Feed from '../Feed';
import App from './App';
import Instructions from '../Instructions';
import User from '../User';

import Login from '../Login.jsx';
import UserCheck from '../protected/UserCheck.jsx';
import AdminCheck from '../protected/AdminCheck.jsx';

import Create_Post from '../CRUDs/Create_Post';
import Delete_Post from '../CRUDs/Delete_Post';
import Create_Comentario from '../CRUDs/Create_Comentario';
import Chat from '../CRUDs/Chat';
import Review from '../CRUDs/Reviews';

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
                <Route path= {"/protecteduser"} element={<UserCheck />} />
                <Route path= {"/protectedadmin"} element={<AdminCheck />} />

                <Route path= {"/feed/create_post"} element={<Create_Post />} />
                <Route path= {"/feed/delete_post"} element={<Delete_Post />} />
                <Route path= {"/feed/create_comentario/:postId"} element={<Create_Comentario />} />
                <Route path= {"/feed/chat/:userId"} element={<Chat />} />
                <Route path= {"/feed/reviews/:userId"} element={<Review />} />

            </Routes>
        </BrowserRouter>
        </>
    )
}

export default Routing