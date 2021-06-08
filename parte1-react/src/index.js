import ReactDOM from 'react-dom'
import { useState } from 'react'

const rootElement = document.getElementById("root")

const App = (props) => {
  const [contadorValue, updateContador] = useState(13)
  /* const contador = useState(10)
  const contadorValue = contador[0]
  const updateContador = contador [1]
  */

  //Cosas como esta pueden petar el pc o la web
  //por que se ejecuta cada vez que lo hace la función
  // 📌Importante Por que de una forma declarativa esta
  // Reflejando los cambios en la UI
  setInterval(() =>{
    updateContador(contadorValue + 1)
  }, 3000)

  setTimeout

  console.log("render")

  return (
  <div>
    <p>El valor del contador es:</p>
    <h1>{contadorValue}</h1>
    <h2>Mágia de React</h2>
  </div>
  )
}

ReactDOM.render(
  <App  />,
  rootElement
)
