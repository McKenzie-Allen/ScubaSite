import React,{ useState } from 'react'
import TempCounter from './TempCounter'
import axios from 'axios'

const baseURL = 'http://localhost:5000/'

const Home = () => {
  const postTemp = async() => {
    console.log('getting')
    const result = await axios.get(`http://localhost:5000/test`)
    .then(res => {
      console.log("this is working")
      console.log(res)
    }).catch(error => {
      console.log('onRejected function called: ' + error.message);
    })
    return result
  }

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
   
  return (
    <div className = 'App'>
        <TempCounter tempUp = {increaseCounter} tempDown = {decreaseCounter} defaultTemp = {countTemp} submitTemp = {postTemp} />
    </div>
  )
}

export default Home;