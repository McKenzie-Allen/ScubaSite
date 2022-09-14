import '../../App.css';
import { Link } from "react-router-dom";

function Nav () {
    return(
        <div className='navContain'>
            <Link to="/setequipment">Set Equipment</Link>
            <Link to="/">Set Conditions</Link>
        </div>
    )
}

export default Nav;
