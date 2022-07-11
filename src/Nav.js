import './App.css';
import { Link } from "react-router-dom";

function Nav () {
    return(
        <div className='navContain'>
            <Link to="/setconditions">Set conditions</Link>
            <Link to="/">Set Equipment</Link>
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">About</a>
        </div>
    )
}

export default Nav;