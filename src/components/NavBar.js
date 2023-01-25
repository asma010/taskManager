import React from "react";
import {Link} from 'react-router-dom';

const NavBar=()=>{
   
    const handleLogout=()=>{
    localStorage.removeItem('isLoggedIn');
    }
    return(
        <nav>
            <Link to='/' className='NavLink'>tasks</Link>
            <Link to='/profile' className='NavLink'>profile</Link>
            <Link to='/login' onClick={handleLogout} className='NavLink'>logout</Link>
        </nav>
    )
}
export default NavBar;

 //<button onClick={handleLogout}>logout</button>
//<Link to='/login' onClick={handleLogout} className='NavLink'>logout</Link>