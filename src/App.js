import { Routes, Route, Link } from "react-router-dom";

import Home from './Home'
import SetEquipment from "./SetEquipment";
import MainTitle from './MainTitle'

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