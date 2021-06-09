import ReactDOM from 'react-dom'
import { useState } from 'react'

const rootElement = document.getElementById("root")

//Este componente recibe por props number que almacena el estado
//Para que se vuelva a renderizar
const Counter = ({ number }) => {
  console.log('Console Render');
  return <h1>{number}</h1>
}

const App = (props) => {
  const [contador, setContador] = useState(0)

  console.log("render");

  const handleClick = () => {
    // {updateContador(contadorValue+1)}
    setContador((prevContador) => {
      return prevContador + 1
    })
  }
  const handleClickReset = () => {
    setContador(0)
  }

  const isEven = contador % 2 === 0

  return (
  <div>
    <p>El valor del contador es:</p>
    {/* pasamos el estado como props al componente */}
    <Counter number={contador} />
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