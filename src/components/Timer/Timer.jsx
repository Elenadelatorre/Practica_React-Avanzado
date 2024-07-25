import React from 'react';
import './Timer.css';

//! 2. Crear un componente hijo que pinte la fecha y hora actual.
const Timer = ({ time }) => {
  const formattedDate = time.toLocaleTimeString();
  return <div className='Timer'>{formattedDate}</div>;
};

export default Timer;
