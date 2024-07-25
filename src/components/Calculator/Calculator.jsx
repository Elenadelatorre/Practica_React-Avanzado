import { useRef } from 'react';
import './Calculator.css';

//! 1. Crear un componente que pinte el texto "Calculator".
const Calculator = () => {
  //* Utilizar 'useRef' para guardar la referencia de cada cosa:
  // 1. Input:
  const inputRef = useRef(null);
  // 2. Primer número introducido:
  const firstNumberRef = useRef(null);
  // 3. Operación seleccionada:
  const operationRef = useRef(null);
  // 4. Resultado de la operación:
  const resultRef = useRef(null);
  // 5. Historial de resultados:
  const historyRef = useRef([]);

  //* Crear una función para manejar la entrada del número:
  const handleInput = () => {
    // Crear una variable para almacenar el valor del input:
    const inputValue = inputRef.current?.valueAsNumber;

    if (isNaN(inputValue)) {
      inputRef.current.value = '';
      return;
    }

    if (firstNumberRef.current === null) {
      firstNumberRef.current = inputValue;
    } else {
      const secondNumber = inputValue;
      let calculation;
      switch (operationRef.current) {
        case '+':
          calculation = firstNumberRef.current + secondNumber;
          break;
        case '-':
          calculation = firstNumberRef.current - secondNumber;
          break;
        case '*':
          calculation = firstNumberRef.current * secondNumber;
          break;
        case '/':
          calculation = firstNumberRef.current / secondNumber;
          break;
        case '%':
          calculation = (firstNumberRef.current * secondNumber) / 100;
          break;
        default:
          calculation = 0;
          break;
      }
      resultRef.current = calculation;
      historyRef.current = [...historyRef.current, calculation].sort(
        (a, b) => a - b
      );
      firstNumberRef.current = null;
      operationRef.current = null;
      inputRef.current.value = '';
    }
  };

  //* Crear una función para manejar la operación:
  const handleOperation = (operation) => {
    if (inputRef.current.value !== '') {
      handleInput();
      inputRef.current.value = '';
    }
    operationRef.current = operation;
  };

  //* Crear una función para manejar el botón "=":
  const handleIgual = () => {
    handleInput();
  };

  //* Crear una función para manejar el botón "Reset":
  const handleReset = () => {
    inputRef.current.value = '';
    firstNumberRef.current = null;
    operationRef.current = null;
    resultRef.current = null;
    historyRef.current = [];
  };

  return (
    <div className='Calculator'>
      <h1 className='Title'>Calculadora</h1>
      <input type='number' ref={inputRef} />
      <div className='Operations'>
        <button onClick={() => handleOperation('+')}>+</button>
        <button onClick={() => handleOperation('-')}>-</button>
        <button onClick={() => handleOperation('*')}>X</button>
        <button onClick={() => handleOperation('/')}>/</button>
        <button onClick={() => handleOperation('%')}>%</button>
        <button onClick={handleIgual}>=</button>
        <button onClick={handleReset}>C</button>
      </div>
      {resultRef.current !== null && (
        <div>
          <h3>Último resultado: {resultRef.current}</h3>
        </div>
      )}
      {historyRef.current.length > 0 && (
        <div>
          <h4>Resultados históricos:</h4>
          <ul>
            {historyRef.current.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Calculator;
