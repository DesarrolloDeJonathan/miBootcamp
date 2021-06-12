import ReactDOM from 'react-dom'
import { useState } from 'react'
import "./styles.css"

const rootElement = document.getElementById("root");

const WarningNotUsed = () => {
  return <h1>Todavia no se ha usado el contador</h1>
}
const ListOfClicks = ({clicks}) => {
  return <p>{clicks.join(', ')}</p>
}

//Teniendo en cuenta que estos cntadores siempre estan en cero
// const INITIAL_COUNTER_STATE = { PODREMOS QUITAR ESTO Y TRABAJAR APARTIR DE setClicks
//   left: 0,
//   right:0,
//   mensaje: 'Mensaje en el estado'
// }

const App = () => {
  //PODREMOS QUITAR ESTO Y TRABAJAR APARTIR DE setClicks
  // const [counters, setCounters] = useState(INITIAL_COUNTER_STATE);

  const [clicks, setClicks] = useState ([]) //ahora tenemos más información en este estado

  const handleClickLeft = () => {
    // const newCountersState = {  PODREMOS QUITAR ESTO Y TRABAJAR APARTIR DE setClicks
    //   ...counters,
    //   left: counters.left + 1
    // };
    // //Sin el Spread Operator
    // setCounters(newCountersState);
    setClicks(prevClicks => ([...prevClicks, ['L']]))
  };

  const handleClickRight = () => {
    // setCounters({  PODREMOS QUITAR ESTO Y TRABAJAR APARTIR DE setClicks
    //   ...counters,
    //   right: counters.right + 1
    // });
    setClicks(prevClicks => ([...prevClicks, ['R']]))
  }

  const handleReset = () => {
    // setCounters(INITIAL_COUNTER_STATE); PODREMOS QUITAR ESTO
    setClicks([])
  }

  // Mientras se vayan a filtrar algo así como mil elementos sera mejor esta forma
  //si llegaran a ser más de 10 mil elementos ya habria que pensarlo
  //com filter devuelve un string
  const left = clicks.filter(click => click === 'L')
  const right = clicks.filter(click => click === 'R')
  console.log({left});

   return (
      <div>
        {left.length}{/** aquí usamos length para obtener un entero */}
        <button onClick={handleClickLeft}>left</button>
        <button onClick={handleClickRight}>right</button>
        {right.length}
        <p>
          <button onClick={handleReset}>Reset</button>
        </p>
        <p>Total clicks: {clicks.length}</p>
        {/* <p>{counters.mensaje}</p> */}
        {clicks.length === 0 ? <WarningNotUsed /> : <ListOfClicks clicks={clicks}/>}
      </div>
    )
}

ReactDOM.render(
  <App  />,
  rootElement
)