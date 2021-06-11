import ReactDOM from 'react-dom'
import { useState } from 'react'
import "./styles.css"

const rootElement = document.getElementById("root");

// Delarando componentes para renderizado condicional
const WarningNotUsed = () => {
  return <h1>Todavia no se ha usado el contador</h1>
}
const ListOfClicks = ({clicks}) => {
  return <p>{clicks.join(', ')}</p>
}

const App = (props) => {
  const [counters, setCounters] = useState({
    left: 0,
    right:0,
    mensaje: 'Mensaje en el estado'
  });

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

   return (
      <div>
        {counters.left}
        <button onClick={handleClickLeft}>left</button>
        <button onClick={handleClickRight}>right</button>
        {counters.right}
        <p>Total clicks: {clicks.length}</p>
        <p>{counters.mensaje}</p>
        {/* Aplicando renderizado condicional */}
        {clicks.length === 0 ? (<WarningNotUsed />) : (<ListOfClicks clicks={clicks}/>)}
      </div>
    )
}

ReactDOM.render(
  <App  />,
  rootElement
)