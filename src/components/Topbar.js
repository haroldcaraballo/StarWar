import React from 'react';
import { useSelector } from 'react-redux';

const Topbar=()=> {
    const personaje=  useSelector(state => state.listaPersonajes.personajeId); 
  return (
      <div class="topbar">
        <h1 className="color-dark text-center">{personaje.name}</h1>
      </div>
  )
}

export default Topbar