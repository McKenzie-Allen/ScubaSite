import '../../App.css';
import { Link } from "react-router-dom";

function Nav () {
    return(
        <div className='navContain'>
            <Link to="/setequipment">Set Equipment</Link>
            <Link to="/">Set Conditions</Link>
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">About</a>
        </div>
    )
}

export default Nav;