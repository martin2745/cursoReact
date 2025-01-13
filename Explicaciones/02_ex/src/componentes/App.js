import React, {useState} from 'react';
import {TituloRojo, TituloAzul} from './Titulo';
import UsuarioApp from './UsuarioApp';

const App = () => {
    //Hooks
    const [sesion, cambiarEstadoSesion] = useState(true);

    /*
    const abrirSesion = () =>{
        sesion = true;
        alert(sesion);
    };

    const cerrarSesion = () =>{
        sesion = false;
        alert(sesion);
    };
    */
    
    return (
        <>
            {sesion === true ? (
                <>
                    <TituloRojo usuario="Martín" edad="24"/>
                    <UsuarioApp/> 
                    <TituloAzul usuario="Martín"/>
                    <button onClick={() => cambiarEstadoSesion(false)}>Cerrar sesión</button>
                </>
            )
            : 
            <>
                <p>No has iniciado sesión</p>
                <button onClick={() => cambiarEstadoSesion(true)}>Iniciar sesión</button>
            </>
            }
        </>
    );
};

export default App;