import React from 'react';
import '../Hojas-de-estilo/Contador.css';

function Contador ({ numClicks }) {
    return (
      <div className= 'contador'>
         {numClicks}
      </div>
    );
}

export default Contador;