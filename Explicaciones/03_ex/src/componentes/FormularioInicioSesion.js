//imr
import React, { useState } from "react";

//sfc
const FormularioInicioSesion = (props) => {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if(usuario === "martin" && password === "abc123."){
        props.cambiarEstadoSesion(true);
    }else{
        alert("Datos incorrectos");
        setUsuario('');
        setPassword('');
    }
  };

  return (
    <form action="" onSubmit={onSubmit}>
      <p>Login con el usuario: {usuario}</p>
      <div>
        <label htmlFor="usuario">Usuario</label>
        <input 
            type="text" 
            name="usuario_app" 
            id="usuario"
            value={usuario}
            onChange={(e) => {
                setUsuario(e.target.value);
            }}
        >
        </input>
      </div>
      <div>
        <label htmlFor="password">Contraseña</label>
        <input 
            type="password"
            name="password_app"
            id="password"
            value={password}
            onChange={(e) => {
                setPassword(e.target.value);
            }}
            >
        </input>
      </div>
      <button type="submit">Iniciar Sesion</button>
    </form>
  );
};

export default FormularioInicioSesion;
