import React,{ useState } from 'react'
import TempCounter from './TempCounter';


const Home = () => {
  const postTemp = async () => {
    console.log('posting')
    const result = await fetch("http://localhost:4000/tempSetter")
    .then(res => {
      console.log(res.url)
      console.log(res)
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