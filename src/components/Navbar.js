import React from 'react'
import { FaMonero } from "react-icons/fa6";
import {Link} from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    return (
        <Link to='/'>
            <div className='navbar'>
                <FaMonero className='icon'/>
                <h1 className='myheader'> My Crypto <span className='purple'>Tracker</span></h1>
            </div>
        </Link>
    )
}

export default Navbar
