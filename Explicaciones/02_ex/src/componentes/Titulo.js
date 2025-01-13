/*
Componente, primera letra en mayúscula, retorna código JSX
Dentro del componente podemos tener funciones, métodos o variables, la única condición es retornar código JSX
Los componentes son exportados e importados en aquellos archivos donde son utilizados.
Los componentes pueden tener propiedades lo que permite su dinamismo.
*/

import React from 'react';

/*
const TituloRojo = () => {
    return (
        <h1 style={{color: 'red'}}>Listado de amigos!!!</h1>
    );
};
*/

const TituloRojo = ({usuario="Anónimo", edad}) => {
    return (
        <h1 style={{color: 'red'}}>Listado de amigos de {usuario} con {edad} años!!!</h1>
    );
};

const TituloAzul = (props) => {
    return (
        <h1 style={{color: 'blue'}}>Cuantos amigos tienes {props.usuario}!!!</h1>
    );
};

export {TituloRojo, TituloAzul};