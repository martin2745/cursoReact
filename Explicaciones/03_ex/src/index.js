import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { TituloRojo, TituloAzul } from './componentes/Titulo';
import UsuarioApp from './componentes/UsuarioApp';
import FormularioInicioSesion from './componentes/FormularioInicioSesion.js';

const App = () => {
    const [sesion, cambiarEstadoSesion] = useState(false);

    return (
        <React.StrictMode>
            {sesion === true ? (
                <>
                    <TituloRojo usuario="Martín" edad="24" />
                    <UsuarioApp />
                    <TituloAzul usuario="Martín" />
                    <button onClick={() => cambiarEstadoSesion(false)}>Cerrar sesión</button>
                </>
            ) : (
                <>
                    <h1>Formulario de Login</h1>
                    <FormularioInicioSesion cambiarEstadoSesion={cambiarEstadoSesion} />
                </>
            )}
        </React.StrictMode>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
