import './App.css';
import Calculator from './components/Calculator/Calculator';
import Timer from './components/Timer/Timer';
import useTime from './customHooks/useTime';

function App() {
  //! 3. Llamar al custom hook `useTime` para obtener la fecha y hora actual.
  const time = useTime();

  //! 4. Pintar el componente `Timer` con la fecha y hora actual.
  return (
    <div className='App'>
      <Timer time={time} />
      <Calculator />
    </div>
  );
}

export default App;
