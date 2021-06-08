import ReactDOM from 'react-dom'
import { useState } from 'react'

const rootElement = document.getElementById("root")

const App = (props) => {
  const [contadorValue, updateContador] = useState(1)

  console.log("render");

  const handleClick = () => {
    {updateContador(contadorValue+1)}
  }
  const handleClickReset = () => {
    updateContador(0)
  }

  const isEven = contadorValue % 2 === 0

  return (
  <div>
    <p>El valor del contador es:</p>
    <h1>{contadorValue}</h1>
    {/* condicional ternario */}
    <p>{isEven ? 'Es par' : 'Es impar'}</p>
    <button onClick={handleClick}>Incrementar</button>
    <button onClick={handleClickReset}>Reset</button>
  </div>
  )
}

ReactDOM.render(
  <App  />,
  rootElement
)