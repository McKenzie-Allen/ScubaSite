import { useState } from 'react';
import './App.css';

function Maintitle() {
  return(
    <div className='header'>
      <h1>Scuba Conditions Calculator</h1>
      <pre>{(new Date).toLocaleTimeString()}</pre>
    </div>
  )
}
function Tempcounter(props) {
return (
  <div className='tempContainer'>
    <button onClick={props.tempUp}>Increase Temp</button>
    <div className='tempCounter'>{props.defaltTemp}</div>
    <button onClick={props.tempDown}>Decrease Temp</button>
    <button onClick={props.submitTemp}>test</button>
  </div>
)
}

function App() {
  const [ countTemp, setCountTemp ] = useState(80)
  const increaseCounter = () => setCountTemp(countTemp+1)
  const decreaseCounter = () => setCountTemp(countTemp-1)
  const submitTemp = () => console.log(countTemp)
  return(
    <div className='App'>
      <Maintitle />
      <Tempcounter tempUp={increaseCounter} tempDown={decreaseCounter} defaltTemp={countTemp} submitTemp={submitTemp}/>
    </div>
  )
}


export default App
