import { useState, useEffect } from 'react';

//! 1. Crear un "custom hook" para manejar la fecha y hora actual.
const useTime = () => {
  // Crear un estado para almacenar la fecha y hora actual:
  const [time, setTime] = useState(new Date());

  // Crear una función para actualizar la fecha y hora cada segundo:
  useEffect(() => {
    //Fecha y hora actuales:
    const updateTime = () => {
      setTime(new Date());
    };

    // Actualizar la fecha y hora cada segundo:
    const timeOut = setTimeout(() => {
      updateTime();
    }, 1000);

    // Limpiar antes de configurar uno nuevo:
    return () => clearTimeout(timeOut);
  }, [time]); // solo se actualiza cuando cambia la fecha.

  return time;
};

export default useTime;
