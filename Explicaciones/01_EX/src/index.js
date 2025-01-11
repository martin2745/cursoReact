import React from 'react';
import ReactDOM from 'react-dom/client';

/*JSX*/
let saludo = <h1>Hola Mundo!!!</h1>;
let nombre = 'Martín';
// let nombre = undefined;
let colorFondo = 'brown';
const sesion = false;
const sesion2 = false;
const amigos = ['Martín', 'Nacho', 'Marcos'];

const JSX = (
  <div>
    <h3>Aprendiendo JSX</h3>
    <p>Si queremos varias lineas</p>
    <p>Las tenemos que encerrar en un contenedor</p>
  </div>
);

const contenedor = (
  <>
    <h3>No iniciaste sesion</h3>
    <p>Si no queremos que se encierren en un div</p>
    <p>Podemos hacerlo así</p>
    <p className='parrafo-contenedor'>No sería correcto dar la propiedad class ya que trabajamos en JSX, tenemos que usar className</p>
    <p style={{color: 'green', background: colorFondo, border: '1px solid black'}}>Si nosotros queremos usar estilos tendremos que usar dobles llaves para englobar al objeto que contiene todos los estilos</p>
    {
      sesion2 === true ? 
        <p>Variable verdadera</p> 
      : 
        <>
          <p>Variable falsa</p>
          <p>Más de una etiqueta</p> 
          <p>Soy {nombre}</p> 
          {nombre && <p>Soy {nombre}</p>} 
        </> 
      }
  </>
);

/*Condicionales*/

const verificarSesion = (sesion) => {
  if(sesion === true){
    return JSX;
  } else{
    return contenedor;
  }
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {saludo}
    <h3>Me llamo {nombre} y tengo {24+1}</h3>
    {verificarSesion(sesion)}
    <ul>
      {amigos.map((valor, clave) => {
          return <li className={clave}>{valor}</li>
        })
      }
    </ul>
  </React.StrictMode>
);