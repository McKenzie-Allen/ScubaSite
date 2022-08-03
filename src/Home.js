import React,{ useState } from 'react'
import TempCounter from './TempCounter';
import SetCurrent from './SetCurrent';
import axios from 'axios'

const baseURL = 'http://localhost:4000/'

const Home = () => {
  const postTemp = async () => {
    console.log('posting')
    let body = {
      temp: temp
    }
    console.log(body.temp)
    const result = axios.post(`${baseURL}test`, body)
    .then(res => {
      console.log(res)
    }).catch(error => {
      console.log('onRejected function called: ' + error.message);
    })
    return result
  }
    const [surfaceCondition, setSurfaceCondition] = useState('')
    const [current, setCurrent] = useState('')
    const [temp, setTemp] = useState(80)
    const increaseCounter = () => setTemp(temp + 1)
    const decreaseCounter = () => setTemp(temp - 1)
    
   
  return (
    <div className = 'App'>
        <TempCounter tempUp = {increaseCounter} tempDown = {decreaseCounter} defaultTemp = {temp} submitTemp = {postTemp} />
        <SetCurrent current = {current} setCurrent = {setCurrent}/>
    </div>
  )
}

export default Home;