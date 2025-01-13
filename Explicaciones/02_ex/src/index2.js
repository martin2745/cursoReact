import React from 'react';
import ReactDOM from 'react-dom/client';

/*JSX*/
const amigos = ['Martín', 'Nacho', 'Marcos'];

// Componente, primera letra en mayúscula, retorna código JSX
const UsuarioApp = () => {
  return (
    <>
      <h1>Hola Mundo!!!</h1>
      <ul>
          {amigos.map((valor, clave) => {
            return <li key={clave} className={`amigo-${clave}`}>{valor}</li>
          })
        }
      </ul>
    </>
  );
}

const App = () => {
  return (
    <>
    <UsuarioApp/>
    <hr></hr>
    <UsuarioApp/>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);


