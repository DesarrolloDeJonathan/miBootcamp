import './App.css';
// así lo obtenemos
import Mensaje from './Mensaje.js'
const Description = () => { 
  return <p> Esta es la App del curso</p>
}
const App = () => {
  return(
    <div className="App">
      <Mensaje color='red' message='Estmos trabajando' />
      <Mensaje color='green' message='en un curso' />
      <Mensaje color='pink' message='de ReactJS' />
      <Description />
    </div>
  )
}

export default App;
