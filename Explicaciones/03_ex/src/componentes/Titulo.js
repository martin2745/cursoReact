import React from 'react';

const TituloRojo = ({ usuario = "Anónimo", edad }) => {
    return (
        <h1 style={{ color: 'red' }}>Listado de amigos de {usuario} con {edad} años!!!</h1>
    );
};

const TituloAzul = (props) => {
    return (
        <h1 style={{ color: 'blue' }}>Cuantos amigos tienes {props.usuario}!!!</h1>
    );
};

export { TituloRojo, TituloAzul };