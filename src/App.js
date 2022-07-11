import { Routes, Route, Link } from "react-router-dom";

import Home from './Home'
import SetConditions from "./SetConditions";
import MainTitle from './MainTitle'

import './App.css';

function App() {
  return (
    <>
      <MainTitle />
      <Routes>
        <Route path="/setconditions" element={ <SetConditions />}/>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  )
}


export default App