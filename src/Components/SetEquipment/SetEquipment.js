import React,{ useState } from 'react'
import SetFin from './SetFin';
import axios from 'axios'

const baseURL = 'http://localhost:4000/'



const Equip = () => {
  const postFin = async(e) => {
    e.preventDefault()
    console.log('posting')
    let body = {
      fin: fin
    }
    console.log(body)
    const result = axios.post(`${baseURL}fin`,body)
    .then(res => {
      console.log('this is working')
      // let { data } = res
      // setSites(data)
    }).catch(error => {
      console.log('onRejected function called: ' + error.message);
    })
    return result
  }
    
    const [fin, setFin] = useState('')
    const[sites, setSites] = useState('')

    
   
  return (
    <div className = 'AppTwo'>
      <SetFin fin = {fin} setFin = {setFin} postFin = {postFin} sites={sites}/>
        
    </div>
  )
}

export default Equip;