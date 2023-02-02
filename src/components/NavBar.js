import React from "react";
import {Link} from 'react-router-dom';
import { UserAuth } from "../context/AuthContext";

const NavBar=()=>{
   const{logOut}=UserAuth();
    const handleSignOut=async()=>{
        try{
            await logOut();
            localStorage.removeItem('isLoggedIn');
            localStorage.removeItem('userId');
        }catch(error){
            console.log(error);
        }
    }
    return(
        <nav>
            <Link to='/' className='NavLink'>tasks</Link>
            <Link to='/profile' className='NavLink'>profile</Link>
            <Link to='/login' onClick={handleSignOut} className='NavLink'>logout</Link>
        </nav>
    )
}
export default NavBar;