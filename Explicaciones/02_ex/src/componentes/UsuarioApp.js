import React from 'react';

const UsuarioApp = () => {
    let amigos = ['Martín', 'Nacho', 'Marcos'];

    return (
    <>
      <ul>
        {amigos.map((valor, clave) => {
            return <li key={clave} className={`amigo-${clave}`}>{valor}</li>
          })
        }
      </ul>
    </>
  );
};

export default UsuarioApp;