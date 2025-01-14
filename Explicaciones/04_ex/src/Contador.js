import React, { useState, useEffect } from 'react';

const Contador = () => {
  // Declarar un estado con useState
  const [cuenta, setCuenta] = useState(0);
  const [mensaje, setMensaje] = useState('Bienvenido');

  // Solo se ejecuta al cargar por primera vez el componente
  useEffect(() => {
    console.log('Aparece el componente');
  }, []);

  // useEffect se utiliza para manejar efectos secundarios
  // Cuando cambiamos el estado de nuestro componente se renderiza de nuevo
  useEffect(() => {
    console.log('El componente se renderiza por primera vez o modifica su estado');
  });

  // Se ejecuta solo cuando `cuenta` cambia, pudiendo ser varios elementos
  // como por ejemplo [elem1, elem2, elem3], se ejecuta cuando cambia cualquiera
  // de los tres elementos.
  useEffect(() => {
    console.log('El componente se montó o cuenta cambió');
    document.title = `Has hecho clic ${cuenta} veces`;
  }, [cuenta]);

  useEffect(() => {
    return () => {
      console.log('Desaparece el componente');
    };
  }, []);

  const incrementa = () => {
    setCuenta(cuenta + 1);
  };

  return (
    <div>
      <h1>{mensaje}</h1>
      <p>Has hecho clic {cuenta} veces</p>
      <button onClick={incrementa}>Haz clic aquí</button>
    </div>
  );
};

export default Contador;