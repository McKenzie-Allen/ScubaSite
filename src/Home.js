import React,{ useState } from 'react'
<<<<<<< HEAD
import TempCounter from './TempCounter';
=======
import TempCounter from './TempCounter'
>>>>>>> 9dda66a7e01bd7667ee4f108f0869d39bc3f6bf4
import axios from 'axios'

const baseURL = 'http://localhost:5000/'

const Home = () => {
<<<<<<< HEAD
  const postTemp = async () => {
    console.log('posting')
    let body = {
      temp: temp
    }
    console.log(body.temp)
    const result = axios.post("http://localhost:4000/tempSetter", body)
    .then(res => {
=======
  const postTemp = async() => {
    console.log('getting')
    const result = await axios.get(`http://localhost:5000/test`)
    .then(res => {
      console.log("this is working")
>>>>>>> 9dda66a7e01bd7667ee4f108f0869d39bc3f6bf4
      console.log(res)
    }).catch(error => {
      console.log('onRejected function called: ' + error.message);
    })
    return result
  }
<<<<<<< HEAD
    const [surfaceCondition, setSurfaceCondition] = useState('calm')
    const [current, setCurrent] = useState("no")
    const [temp, setTemp] = useState(80)
    const increaseCounter = () => setTemp(temp + 1)
    const decreaseCounter = () => setTemp(temp - 1)
=======

  const postSiteName = async () =>{
    console.log('posting Name')
    const result =  await axios.get(`${baseURL}test`)
    .then(res => {
      console.log('this is working')
      console.log(res)
    }).catch(error => {
      console.log('onRejected function called: ' + error.message);
    })
    return result

  }

    const [countTemp, setCountTemp] = useState(80)
    const increaseCounter = () => setCountTemp(countTemp + 1)
    const decreaseCounter = () => setCountTemp(countTemp - 1)
>>>>>>> 9dda66a7e01bd7667ee4f108f0869d39bc3f6bf4
   
  return (
    <div className = 'App'>
        <TempCounter tempUp = {increaseCounter} tempDown = {decreaseCounter} defaultTemp = {temp} submitTemp = {postTemp} />
    </div>
  )
}

export default Home;