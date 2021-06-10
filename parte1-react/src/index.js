import ReactDOM from 'react-dom'
import { useState } from 'react'
import "./styles.css"

const rootElement = document.getElementById("root")

const App = (props) => {
  //De esta forma expresamos los estados separados entendiblemente
  // const [left, setLeft] = useState(0)
  // const [right, setRight] = useState(0)

  const [counters, setCounters] = useState({
    left: 0,
    right:0,
    clicks: 0,
    mensaje: 'Mensaje en el estado'
  })

  const handleClickLeft = () => {
    const newCountersState = {
      // Esto guarda todas la propiedades del objeto
      ...counters,
      left: counters.left + 1,
      // right: counters.right, Este no sera necesario recuperarlo, la queremos igual
      clicks: counters.clicks +1 //Forma correcta de actualizar el estado
    }
      counters.left++ //De esta forma no se actualiza el estado se estaria mutando
    setCounters(newCountersState)
  }

  const handleClickRight = () => {
    setCounters({
      ...counters,
      // left: counters.left, Este no sera necesario recuperarlo, la queremos igual
      right: counters.right + 1,
      clicks: counters.clicks +1
    })
  }

   return (
      <div>
        {counters.left}
        <button onClick={handleClickLeft}>left</button>
        <button onClick={handleClickRight}>right</button>
        {counters.right}
        <p>Total clicks: {counters.clicks}</p>
        {/* Este mensaje desaparece cuando hacemos clic pues no estamos recuperando todas las propíedades del objeto usar ... ayudara*/}
        <p>{counters.mensaje}</p>
      </div>
    )
}

ReactDOM.render(
  <App  />,
  rootElement
)