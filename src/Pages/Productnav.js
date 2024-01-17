import React from 'react'
import '../pagecss/Productnav.css'
import menlogo from '../Images/menlogo.png'
import { IoIosCart } from "react-icons/io";
import { useNavigate,NavLink } from 'react-router-dom';
import { UseSelector, useSelector } from 'react-redux';
const Productnav = () => {

  const state= useSelector((state)=>state.handleCart)
    
  return (
    <div>

<nav className='mentoon-nav'>
        <NavLink to='/'><img src={menlogo}  className='mentoons-logo'/></NavLink>
        <ul className='mentoons-links'>
            <NavLink to='/Cart'><li><IoIosCart className='cart-icon' />Cart({state.length})</li></NavLink>
        </ul>
        </nav>

    </div>
  )
}

export default Productnav