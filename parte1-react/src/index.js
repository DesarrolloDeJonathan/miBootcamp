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
    right:0
  })

  const handleClickLeft = () => {
    setCounters({
      left: counters.left + 1,
      right: counters.right
    })
  }

  const handleClickRight = () => {
    setCounters({
      left: counters.left,
      right: counters.right + 1
    })
  }

   return (
      //Con los estados separados
      // <div>
      //   {left}<button onClick={() => setLeft(left + 1)}>left</button>
      //   <button onClick={() => setRight(right + 1)}>right</button>{right}
      // </div>
      <div>
        {counters.left}<button onClick={handleClickLeft}>left</button><br />
        <button onClick={handleClickRight}>right</button>{counters.right}
      </div>
    )
}

ReactDOM.render(
  <App  />,
  rootElement
)