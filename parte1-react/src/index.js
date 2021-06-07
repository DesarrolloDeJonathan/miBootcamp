import ReactDOM from 'react-dom';

const rootElement = document.getElementById("root")

const App = (props) => {
  return <h1>{props.contadorInicial}</h1>
}

let contador = 0

const refresh = () => {
  ReactDOM.render(
    <App contadorInicial={contador} />,
    rootElement
  )
}
setInterval(() => {
  contador = contador +1
  refresh()
}, 1000)