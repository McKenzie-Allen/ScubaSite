import React,{ useState } from 'react'
import SetFin from './SetFin';
import SetReg from './SetReg';
import SetSuit from './SetSuit';
import ShowConditions from './ShowConditions'
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
      console.log(res.data)
      let { data } = res
      setItem(data)
    }).catch(error => {
      console.log('onRejected function called: ' + error.message);
    })
    return result
  }

  const postReg = async(e) => {
    e.preventDefault()
    console.log('posting')
    let body = {
      reg: reg
    }
    console.log(body)
    const result = axios.post(`${baseURL}reg`,body)
    .then(res => {
      console.log(res.data)
      let { data } = res
      setItem(data)
    }).catch(error => {
      console.log('onRejected function called: ' + error.message);
      setItem('Entry cant be empty, Please try again')
    })
    return result
  }

  const postSuit = async(e) => {
    e.preventDefault()
    console.log('posting')
    let body = {
      suit: suit
    }
    console.log(body)
    const result = axios.post(`${baseURL}suit`,body)
    .then(res => {
      console.log(res.data)
      let { data } = res
      setItem(data)
    }).catch(error => {
      console.log('onRejected function called: ' + error.message);
    })
    return result
  }
    
    const [fin, setFin] = useState('')
    const[item, setItem] = useState('')
    const[reg, setReg] = useState('')
    const[suit, setSuit] = useState('')

    
   
  return (
    <div className = 'AppTwo'>
      <SetFin fin = {fin} setFin = {setFin} postFin = {postFin}/>
      
      <div className='infoCard'>
        <ShowConditions item={item} setItem={setItem}/>
      </div>
      <SetReg reg = {reg} setReg={setReg} postReg = {postReg}/>
      <SetSuit suit={suit} setSuit={setSuit} postSuit={postSuit}/>
    </div>
  )
}

export default Equip;