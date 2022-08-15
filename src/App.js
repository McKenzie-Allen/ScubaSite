import { Routes, Route , link } from "react-router-dom";

import Home from './Components/SetConditions/Home'
import SetEquipment from "./Components/SetEquipment/SetEquipment";
import MainTitle from './Components/MainTitle/MainTitle'

import './App.css';

function App() {
  return (
    <>
      <MainTitle />
      <Routes>
        <Route path="/setequipment" element={ <SetEquipment />}/>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  )
}


export default App