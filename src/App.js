import { useState } from 'react';
import './App.css';
import { useFormik } from 'formik'
import Maintitle from './Maintitle';
import Tempcounter from './TempCounter';




function App() {
    const [countTemp, setCountTemp] = useState(80)
    const increaseCounter = () => setCountTemp(countTemp + 1)
    const decreaseCounter = () => setCountTemp(countTemp - 1)
    const submitTemp = () => console.log(countTemp)
    return ( 
        <div className = 'App'>
        <Maintitle />
        <Tempcounter tempUp = {increaseCounter} tempDown = {decreaseCounter} defaltTemp = {countTemp} submitTemp = {submitTemp} />
        </div>
    )
}


export default App