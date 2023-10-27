import './Instructions.css'

//import { useState } from 'react';

import React, { useState, useEffect } from 'react';

export default function Instructions() {
  const [showDescription1, setShowDescription1] = useState(false);
  const [showDescription2, setShowDescription2] = useState(false);
  const [showDescription3, setShowDescription3] = useState(false);
  const [showDescription4, setShowDescription4] = useState(false);
  const [showDescription5, setShowDescription5] = useState(false);
  const [showDescription6, setShowDescription6] = useState(false);
  

  const toggleDescription1 = () => {setShowDescription1(!showDescription1);};
  const toggleDescription2 = () => {setShowDescription2(!showDescription2);};
  const toggleDescription3 = () => {setShowDescription3(!showDescription3);};
  const toggleDescription4 = () => {setShowDescription4(!showDescription4);};
  const toggleDescription5 = () => {setShowDescription5(!showDescription5);};
  const toggleDescription6 = () => {setShowDescription6(!showDescription6);};
//   const textos = [
//     "Landing Page y Registro",
//     "Navegación", "Feed","Componente Social","Confianza y Reseñas","Monedero",
//   ];

//   const [indiceTexto, setIndiceTexto] = useState(0);
//   const [textosVisibles, setTextosVisibles] = useState([]);

  // efecto obtenido de internet
  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     if (indiceTexto < textos.length) {
  //       setTextosVisibles((prevTextos) => [...prevTextos, textos[indiceTexto]]);
  //       setIndiceTexto(indiceTexto + 1);
  //     }
  //   }, 2000);

  //   return () => clearInterval(intervalId);
  // }, [indiceTexto, textos]);


  return (

        <div>
          
        <h1>Instrucciones de FavoRápido!</h1>
        <h2>
        <strong>FavoRápido, la mejor página de intercambio de servicios pronto disponible para todos los usuarios!</strong>
        </h2>

        <p> <strong>Descripción: </strong>FavoRápido es una plataforma de red social centrada en el intercambio de servicios express entre
            usuarios. 
            <br></br>
            En esta plataforma los usuarios tendrán la capacidad de crear su perfil y hacer publicaciones para
            ofrecer y/o solicitar servicios
            <br></br>
            La idea principal es fomentar la conexion entre las personas que buscan un
            servicio y aquellas dispuestas a realizarlos.</p>

            {/* <h2>
        <strong>A continuación te hablaremos de las instrucciónes y detalles sobre los siguientes temas desplegados dinámicamente:</strong>
        </h2> */}
{/* 
      {textosVisibles.map((texto, index) => (
        <p key={index}><h3><ol><crazy>{texto}</crazy></ol></h3></p>
      ))} */}



      <div>        
          <h4><strong>Landing Page y Registro </strong></h4>
          <button onClick={toggleDescription1}>{showDescription1 ? '▲' : '▼'}</button>
      </div>
      <div style={{ display: showDescription1 ? 'block' : 'none' }}>
          <ul>
            <li>La aplicación funcionará teniendo una página de inicio o Landing Page, donde el usuario podrá registrarse y unirse a nuestra comunidad, o también Iniciar Sesión si ya es parte de ella <br></br> Si no desea Iniciar Sesión puede explorar las ofertas como usuario anónimo</li>
          </ul>
      </div>


      <div>        
          <h4><strong>Navegación</strong></h4>
          <button onClick={toggleDescription2}>{showDescription2 ? '▲' : '▼'}</button>
      </div>
      <div style={{ display: showDescription2 ? 'block' : 'none' }}>
        <ul>
            <li>Existirán cuatro páginas en la app web, esto podrá cambiar en un futuro debido a peticiones del curso o por cambios motivados por la eficiencia y funcionamiento de la app web.</li>
            <ol>
              <li>Landing Page</li>
              <li>Página Principal</li>
              <li>Página de Instrucciones</li>
              <li>Página de Usuario</li>
              </ol>
            <li>
              Se podrá navegar a la través de la navbar y botones a la vista que desee, ya sea la Landing Page, la página principal, página de instrucciones o página del usuario, esta última será implementada en una futura entrega. </li>
          </ul>  
      </div>


      <div>        
          <h4><strong>Feed</strong></h4>
          <button onClick={toggleDescription3}>{showDescription3 ? '▲' : '▼'}</button>
      </div>
      <div style={{ display: showDescription3 ? 'block' : 'none' }}>
          <ul>
            <li>Desde la página principal o feed se podrán observar las ofertas que han hecho otros usuarios, dentro de cada oferta estarán sus detalles, se podrá poner en contacto con el oferente y el usuario registrado tendrá la posibilidad de añadir nuevas ofertas. <br></br>Estas funciones están hoy hardcodeadas, y algunas no implementadas en absoulto, se reservan para la entrega siguiente.  </li>
          </ul>
      </div>

      <div>        
          <h4><strong>Componente Social</strong></h4>
          <button onClick={toggleDescription4}>{showDescription4 ? '▲' : '▼'}</button>
      </div>
      <div style={{ display: showDescription4 ? 'block' : 'none' }}>
        <ul>
          <li>Desde la página de usuario, registrado, se podrá agregar o eliminar followers e iniciar conversaciones a través de mensajes internos, tanto con ellos como con potenciales clientes u ofertores. </li>
        </ul> 
      </div>

      <div>        
          <h4><strong>Confianza y Reseñas</strong></h4>
          <button onClick={toggleDescription5}>{showDescription5 ? '▲' : '▼'}</button>
      </div>
      <div style={{ display: showDescription5 ? 'block' : 'none' }}>
      <ul>
          <li>La confianza es muy importante por lo que también se podrá calificar compradores o vendedores de servicios a través de un feature por implementar en la página principal.</li>
        </ul>
      </div>


      <div>        
          <h4><strong>Monedero</strong></h4>
          <button onClick={toggleDescription6}>{showDescription6 ? '▲' : '▼'}</button>
      </div>
      <div style={{ display: showDescription6 ? 'block' : 'none' }}>
      <ul>
        <li>Simularemos un flujo y registro de entradas y salidas de dinero que estarán disponibles en los datos del usuario, lo cual está por implementar.<br></br>Esto actuará como un monedero virtual, sin procedimientos oficiales de pago, sino más bien simulando e imitando lo que sería una página de compra/venta con las herramientas del curso.</li>
        </ul>
      </div>



        <h2>
        <strong>Pronto tendremos más features por implementar!</strong>
        </h2>



    </div>
  );
}