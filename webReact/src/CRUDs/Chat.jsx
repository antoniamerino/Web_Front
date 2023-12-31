// Chat.jsx
// ChatGPT adapto este codigo al .CSS (para que calcen los nombres de las clases)

import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './Chat.css';
import { AuthContext } from '../auth/AuthContext';
import API_URL from '../config';

function Chat() {
  const { userId } = useParams();
  const [myUserId, setMyUserId] = useState(); 
  const [chatData, setChatData] = useState({});
  const [mensajes, setMensajes] = useState([]);
  const [newMensaje, setNewMensaje] = useState('');
  const [msg, setMsg] = useState('');
  const { token } = useContext(AuthContext);
  const headers = {
    'Authorization': `Bearer ${token}`
  }

  const getUserData = () => {
    var user = JSON.parse(localStorage.getItem("userData"));
    console.log(user);
    return user;
  }

  useEffect(() => {
    const fetchChatData = async () => {
      try {
        const user = getUserData();
        setMyUserId(user.id);
        const myUserIdValue = user.id;

        if (myUserIdValue == userId) {
          setMsg('No puedes chatear contigo mismo');
          return;
        } else {
          let chatRespuesta;
          let hay_chat = false;

          try {
            chatRespuesta = await axios.get(`${API_URL}/chats/user1/${myUserIdValue}/user2/${userId}`, { headers });
            hay_chat = true;
          } catch (error) {
            try {
              chatRespuesta = await axios.get(`${API_URL}/chats/user1/${userId}/user2/${myUserIdValue}`, { headers });
              hay_chat = true;
            } catch (error) {
              hay_chat = false;
              

              if (hay_chat == false) {
                try {
                  const newChatRespuesta = await axios.post(`${API_URL}/chats`, { id_user_1: myUserIdValue, id_user_2: userId }, { headers });
                  const newChat = newChatRespuesta.data;
                  console.log('Respuesta del servidor al crear el chat:', newChat);
                
                  setChatData(newChat);
                  setMensajes([]);
                } catch (error) {
                  console.error('Error al crear el chat:', error);
                  setMsg('Error al crear el chat');
                }
              } else {
                try {
                  const mensajesRespuesta = await axios.get(`${API_URL}/mensajes/chat/${chat.id}`, { headers });
                  const chatMensajes = mensajesRespuesta.data;
                  setMensajes(chatMensajes);
                } catch (error) {
                  console.error('Error al cargar el chat:', error);
                  setMsg('No hay mensajes en este chat');
                }
              }



            }
          }

          const chat = chatRespuesta.data[0];
          setChatData(chat);
        }
      } catch (error) {
        console.error(error);
        // setMsg('Error al cargar el chat');
      }
    };

    fetchChatData();
  }, [userId, myUserId]);

  const handleNewMensaje = async (event) => {
    event.preventDefault();

    try {
      await axios.post(`${API_URL}/mensajes`, { id_chat: chatData.id, id_user_sender: myUserId, contenido: newMensaje }, { headers });
      const updatedMensajesRespuesta = await axios.get(`${API_URL}/mensajes/chat/${chatData.id}`, { headers });
      const updatedMensajes = updatedMensajesRespuesta.data;

      setMensajes(updatedMensajes);
      setNewMensaje('');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="chat-container">
      {msg && <h2 className="errormsj">{msg}</h2>}
      <h3>{`ChatID ${chatData.id}: Chat entre ${chatData.id_user_1} y ${chatData.id_user_2}`}</h3>
      <h5>Envia un mensaje para reiniciar la conversacion</h5>
      <div className="chat-mensajes">
        {mensajes.map((mensaje) => (
          <div key={mensaje.id} className={`mensaje ${mensaje.id_user_sender === myUserId ? 'sent' : 'received'}`}>
            <p>{`${mensaje.id_user_sender}: ${mensaje.contenido}`}</p>
          </div>
        ))}
      </div>
      <form onSubmit={handleNewMensaje}>
        <textarea
          value={newMensaje}
          onChange={(event) => setNewMensaje(event.target.value)} />
        <button type="submit">Enviar mensaje</button>
      </form>
    </div>
  );
}

export default Chat;
