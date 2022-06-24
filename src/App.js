import { useState } from 'react';
import './App.css';
import { useFormik } from 'formik'

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

function Test(props) {
  const formik = useFormik({
    initialValues: {
      defaultTemp: props.temp
    }
    
  })
  return (
    <form>
      <div>
        <div>{formik.values.defaultTemp}</div>
      </div>
    </form>
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
      <Test temp={countTemp}/>
    </div>
  )
}


export default App
