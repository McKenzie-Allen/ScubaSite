import './App.css';
import Nav from './Nav';

function Maintitle() {
    return ( 
    <div className = 'header'>
        <h1> Scuba Conditions Calculator </h1>
        <pre> {(new Date).toLocaleTimeString()} </pre>
        <Nav /> 
        </div>
    )
}

export default Maintitle;