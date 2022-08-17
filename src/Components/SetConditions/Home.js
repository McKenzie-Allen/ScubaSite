import React,{ useState } from 'react'
import TempCounter from './TempCounter';
import SetCurrent from './SetCurrent';
import ShowEquipment from './ShowEquipment';
import axios from 'axios'

const baseURL = 'http://localhost:4000/'

let siteArr = []

const Home = () => {
  const postTemp = async () => {
    console.log('posting')
    let body = {
      temp: temp
    }
    const result = axios.post(`${baseURL}tempSetter`, body)
    .then(res => {
      let { data } = res
      console.log(data)
      siteArr.push(data)
      if(siteArr.length >= 4) {
        setSite(siteArr)
      }
    }).catch(error => {
      console.log('onRejected function called: ' + error.message);
    })
    return result
  }
    const [site, setSite] = useState(siteArr)
    const [current, setCurrent] = useState('')
    const [temp, setTemp] = useState(80)
    const increaseCounter = () => setTemp(temp + 1)
    const decreaseCounter = () => setTemp(temp - 1)
    
   
  return (
    <div className = 'App'>
        <TempCounter tempUp = {increaseCounter} tempDown = {decreaseCounter} defaultTemp = {temp} submitTemp = {postTemp} />
        <SetCurrent current = {current} setCurrent = {setCurrent}/>
        <div className='infoCard'>
          <ShowEquipment />
        </div>
    </div>
  )
}

export default Home;