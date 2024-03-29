import React,{ useState } from 'react'
import TempCounter from './TempCounter';
import SetCurrent from './SetCurrent';
import ShowEquipment from './ShowEquipment';
import axios from 'axios'
import SetSurface from './SetSurface';

const baseURL = 'http://localhost:4000/'





const Home = () => {
  const postCurrent = async(e) => {
    e.preventDefault()
    console.log('posting')
    let body = {
      current: current
    }
    console.log(body)
    const result = axios.post(`${baseURL}current`,body)
    .then(res => {
      let { data } = res
      console.log(typeof data)
      setSites(data)
    }).catch(error => {
      console.log('onRejected function called: ' + error.message);
    })
    return result
  }

  const postTemp = async (e) => {
    e.preventDefault()
    console.log('posting')
    let body = {
      temp: temp
    }
    const result = axios.post(`${baseURL}tempSetter`, body)
    .then(res => {
      let { data } = res
      console.log (data)
      setSites(data)

    }).catch(error => {
      console.log('onRejected function called: ' + error.message);
    })
    return result
  }

  const postSurface = async (e) => {
    e.preventDefault()
    let body = {
      surface: surface
    }

    const result = axios.post(`${baseURL}surface`, body)
    .then(res => {
      let { data } = res
      console.log(data)
      setSites(data)
    }).catch(error => {
      console.log('onRejected function called: ' + error.message);
    })
    return result

  }




    
    const [current, setCurrent] = useState('')
    const [temp, setTemp] = useState(80)
    const increaseCounter = () => setTemp(temp + 1)
    const decreaseCounter = () => setTemp(temp - 1)
    const [surface, setSurface] = useState('')
    const[sites, setSites] = useState('')

    
   
  return (
    <div className = 'App'>
        <TempCounter tempUp = {increaseCounter} tempDown = {decreaseCounter} defaultTemp = {temp} submitTemp = {postTemp} sites={sites} />
        <div className='infoCard'>
          <ShowEquipment sites={sites} setSites={setSites}/>
        </div>
        <SetCurrent current = {current} setCurrent = {setCurrent} postCurrent = {postCurrent} sites={sites}/>
        <SetSurface surface={surface} setSurface={setSurface} postSurface={postSurface} sites={sites}/>
        
    </div>
  )
}

export default Home;