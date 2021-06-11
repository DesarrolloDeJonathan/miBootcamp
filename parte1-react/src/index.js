import ReactDOM from 'react-dom'
import { useState } from 'react'
import "./styles.css"

const rootElement = document.getElementById("root");

// Delarando componentes para renderizado condicional
const WarningNotUsed = () => {
  return <h1>Todavia no se ha usado el contador</h1>
}
const ListOfClicks = ({clicks}) => {
  //console.log({clicks}); //Añadimos llaves para más detalles
  //debugger; //Detendra la ejecucuón en este punto
  return <p>{clicks.join(', ')}</p>
}

const INITIAL_COUNTER_STATE = {
  left: 0,
  right:0,
  mensaje: 'Mensaje en el estado'
}

const App = () => {
  const [counters, setCounters] = useState(INITIAL_COUNTER_STATE);

  const [clicks, setClicks] = useState ([])

  const handleClickLeft = () => {
    const newCountersState = {
      ...counters,
      left: counters.left + 1
    };
    //Sin el Spread Operator
    setCounters(newCountersState);
    setClicks(prevClicks => {
      return prevClicks.concat('L')
    });
  };

  const handleClickRight = () => {
    setCounters({
      ...counters,
      right: counters.right + 1
    });
    //Con el Spread Operator
    setClicks(prevClicks => ([...prevClicks, ['R']]))
  }

  // una de las formas es pasando los valores originales para volver a ese estado
  const handleReset = () => {
    setCounters(INITIAL_COUNTER_STATE);
    setClicks([])
  }

   return (
      <div>
        {counters.left}
        <button onClick={handleClickLeft}>left</button>
        <button onClick={handleClickRight}>right</button>
        {counters.right}
        <p>
          <button onClick={handleReset}>Reset</button>
        </p>
        <p>Total clicks: {clicks.length}</p>
        <p>{counters.mensaje}</p>
        {clicks.length === 0 ? <WarningNotUsed /> : <ListOfClicks clicks={clicks}/>}
      </div>
    )
}

ReactDOM.render(
  <App  />,
  rootElement
)