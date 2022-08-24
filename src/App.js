import './App.css';
import Boton from './Componentes/Boton.js';
import Contador from './Componentes/Contador';
import freeCodeCampLogo from './Imagenes/imagen-freecodecamp.png'; 
import { useState } from 'react';

function App() {

  const [numClicks, setNumClicks] = useState(0);

  const manejarClick = () => {
    setNumClicks(numClicks + 1);
  }
  const reiniciarContador = () => {
    setNumClicks(0);
  }

  return (
    <div className='App'>
      <div className= 'freecodecamp-logo-contenedor'>
        <img 
          className= 'freecodecamp-logo'
          src= {freeCodeCampLogo}
          alt= 'Logo de freecodecamp' />
      </div>
      <div className='contenedor-principal'>
         <Contador numClicks= {numClicks} />
         <Boton 
            texto= 'Click'
            esBotonDeClick= {true}
            manejarClick= {manejarClick} />
         <Boton /*este seria un props, aca se declarantodas las propiedades y funciones q van hacer los botones y se importan a Boton.js */
            texto= 'Reiniciar'
            esBotonDeClick= {false}
            manejarClick= {reiniciarContador} />
      </div>
    </div>
  );
}

export default App;
