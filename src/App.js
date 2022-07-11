import { Routes, Route, Link } from "react-router-dom";

import Home from './Home'
import SetConditions from "./SetConditions";
import Nav from './Nav'

import './App.css';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/setconditions" element={ <SetConditions />}/>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  )
}


export default App