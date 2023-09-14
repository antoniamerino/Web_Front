import './Instructions.css'

import { useState } from 'react';

export default function Instrucciones() {

    return (

        <div className="container">
        <h1>Instrucciones de FavoRápido!</h1>
        <h2>
        <strong>FavoRápido, la mejor página de intercambio de servicios disponible ya para todos los usuarios!</strong>
        </h2>

        <p>FavoRápido es una plataforma de red social centrada en el intercambio de servicios express entre
            usuarios. En esta plataforma los usuarios tendrán la capacidad de crear su perfil y hacer publicaciones para
            ofrecer y/o solicitar servicios. La idea principal es fomentar la conexion entre las personas que buscan un
            servicio y aquellas dispuestas a realizarlos.</p>

        <ol>
          <li>Puedes Registrarte y unirte a nuestra comunidad, o también Iniciar Sesión si ya eres parte de ella!</li>
          <li>Si no deseas Iniciar Sesión puedes explorar las ofertas como usuario anónimo</li>
          <li>Navega a través de la navbar a la vista que desees! </li>
          <li>Desde la página principal puedes observar las ofertas que han hecho otros usuarios, y puedes ver sus detalles </li>
          <li>Navega a través de la navbar a la vista que desees! </li>
        </ol>
        <p>¡Diviértete jugando al Gato!</p>
      </div>
    )
}