import React, {useContext} from 'react'
import { IoHome } from "react-icons/io5";
import { FaHistory } from "react-icons/fa"
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { GlobalContext } from './global'; 
import { Link } from 'react-router-dom';


function Navbar() {
  const {dmode, setDmode} = useContext(GlobalContext)
  const dmodefunc = () => {
    setDmode(!dmode)
  }
  return (
    <div className={`navbar${dmode ? 'dark-mode' : ''}`}>
      <ul>
        <li>
        <Link to="/home"><button className={`butt${dmode ? 'dark-mode' : ''}`}><IoHome className={`home_icon${dmode ? 'dark-mode' : ''}`}/></button></Link>
        </li>
        <br /><br />
        <li>
        <Link to="/history"><button className={`butt${dmode ? 'dark-mode' : ''}`}><FaHistory className={`history_icon${dmode ? 'dark-mode' : ''}`}/></button></Link>
        </li>
        <br /><br />
        <li>
        {!dmode && <button onClick={dmodefunc} className='button'><MdDarkMode /></button>}
        </li>
        <li>
        {dmode && <button onClick={dmodefunc} className='buttondark-mode'><MdLightMode /></button>}
        </li>
      </ul>
    </div>
  )
}

export default Navbar
