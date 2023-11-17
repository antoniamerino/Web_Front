import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './Chat.css';

function Chat() {
  const { userId } = useParams();
  const [myUserId, setMyUserId] = useState(1); // Cambiar según la sesión!!
  const [chatData, setChatData] = useState({});
  const [mensajes, setMensajes] = useState([]);
  const [newMensaje, setNewMensaje] = useState('');
  const [msg, setMsg] = useState('');

  useEffect(() => {
    const fetchChatData = async () => {
      try {
        const chatRespuesta = await axios.get(`http://localhost:3000/chats/user1/${myUserId}/user2/${userId}`);
        const chat = chatRespuesta.data[0];
        setChatData(chat);

    // LO CREAMOS SI NO EXISTE
        if (!chat) {
            try {
                const newChatRespuesta = await axios.post('http://localhost:3000/chats', { id_user_1: myUserId, id_user_2: userId });
                const newChat = newChatRespuesta.data;
                console.log('Respuesta del servidor al crear el chat:', newChat);
              
                setChatData(newChat);
                setMensajes([]);
              } catch (error) {
                console.error('Error al crear el chat:', error);
                setMsg('Error al crear el chat');
              }
          setChatData(newChat);
          setMensajes([]);
        } else {
    // SI YA EXISTE LO CARGAMOS
    try{
        const mensajesRespuesta = await axios.get(`http://localhost:3000/mensajes/chat/${chat.id}`);
        const chatMensajes = mensajesRespuesta.data;
        setMensajes(chatMensajes);
    }
    catch (error) {
        console.error('Error al cargar el chat:', error);
        setMsg('No hay mensajes en este chat');
    }

        }
      } catch (error) {
        console.error(error);
        setMsg('Error al cargar el chat');
      }
    };

    fetchChatData();
  }, [userId, myUserId]);


  const handleNewMensaje = async (event) => {
    event.preventDefault();

    try {
        // posteamos
      await axios.post('http://localhost:3000/mensajes', { id_chat: chatData.id, id_user_sender: myUserId, contenido: newMensaje });
      // de nuevo recogemos el get
      const updatedMensajesRespuesta = await axios.get(`http://localhost:3000/mensajes/chat/${chatData.id}`);
      const updatedMensajes = updatedMensajesRespuesta.data;

      // redefinimo
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
