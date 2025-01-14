import React, { useState } from 'react';
import Contador from './Contador.js';

const App = () => {
    const [mostrarContador, setMostrarContador] = useState(false);

    const mostrarComponente = () => {
        setMostrarContador(true);
    };

    const cerrarContador = () => {
        setMostrarContador(false);
    };

    return (
        <div>
            {mostrarContador && <Contador />}
            <button onClick={mostrarComponente}>Mostrar</button>
            <button onClick={cerrarContador}>Cerrar</button>
        </div>
    );
};

export default App;
