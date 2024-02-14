import React from 'react'
import { IoHome } from "react-icons/io5";
import { FaHistory } from "react-icons/fa"

import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <div className='navbar'>
      <ul>
        <li>
        <Link to="/home"><button className='butt'><IoHome className='home_icon'/></button></Link>
        </li>
        <li>
        <br /><br />
        <Link to="/history"><button className='butt'><FaHistory className='history_icon'/></button></Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
