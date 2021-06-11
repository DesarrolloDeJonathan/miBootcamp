import ReactDOM from 'react-dom'
import { useState } from 'react'
import "./styles.css"

const rootElement = document.getElementById("root");

const App = (props) => {

  const [counters, setCounters] = useState({
    left: 0,
    right:0,
    // clicks: 0 //Esta propiedad ya la estamos opteniendo de click.length
    mensaje: 'Mensaje en el estado'
  });

  const [clicks, setClicks] = useState ([])
  const handleClickLeft = () => {
    const newCountersState = {
      ...counters,
      left: counters.left + 1
      // Eliminamos, lo podemos obtener del estado con la propiedad click.length
      // clicks: counters.clicks +1
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
      // clicks: counters.clicks +1
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
        <p>{clicks.join(', ')}</p>
      </div>
    )
}

ReactDOM.render(
  <App  />,
  rootElement
)