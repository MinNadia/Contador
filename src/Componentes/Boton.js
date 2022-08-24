import React from 'react';
import '../Hojas-de-estilo/Boton.css';

function Boton({ texto, esBotonDeClick, manejarClick }) {
  return (
    <button 
       className= {esBotonDeClick ? 'boton-click' : 'boton-reiniciar'}
       onClick= {manejarClick}>
      {texto} 
    </button> /*aca estamos usando las propiedades del props boton que se declaran en App.js, aqui estamos usando la desestructuracion x eso no estan declaradas como props.texto, props.esBotonDeClick, etc */
  )
}

export default Boton;