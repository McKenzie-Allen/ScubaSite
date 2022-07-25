import React,{ useState } from 'react'
import TempCounter from './TempCounter';
import axios from 'axios'


const Home = () => {
  const postTemp = async () => {
    console.log('posting')
    let body = {
      temp: temp
    }
    console.log(body.temp)
    const result = axios.post("http://localhost:4000/tempSetter", body)
    .then(res => {
      console.log(res)
    })
    return result
  }
    const [surfaceCondition, setSurfaceCondition] = useState('calm')
    const [current, setCurrent] = useState("no")
    const [temp, setTemp] = useState(80)
    const increaseCounter = () => setTemp(temp + 1)
    const decreaseCounter = () => setTemp(temp - 1)
   
  return (
    <div className = 'App'>
        <TempCounter tempUp = {increaseCounter} tempDown = {decreaseCounter} defaultTemp = {temp} submitTemp = {postTemp} />
    </div>
  )
}

export default Home;