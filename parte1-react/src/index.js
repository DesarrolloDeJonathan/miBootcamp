import ReactDOM from 'react-dom'
import { useState } from 'react'

const rootElement = document.getElementById("root")

const App = (props) => {
  const [contadorValue, updateContador] = useState(1)

console.log("render");

  return (
  <div>
    <p>El valor del contador es:</p>
    <h1>{contadorValue}</h1>
    <button onClick={() =>
    // Esta forma más común cuando no se usa el estado anteriror
    //{updateContador(contadorValue+1)}
    //Para asegurar que se usara el estado anterior
      setContador(prevContador => {
        return prevContador + 1
      })
      }
    >
      Incrementar
    </button>
  </div>
  )
}

ReactDOM.render(
  <App  />,
  rootElement
)