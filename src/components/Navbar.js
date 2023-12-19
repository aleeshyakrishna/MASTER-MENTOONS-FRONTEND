import React,{useState} from 'react'
import menlogo from '../Images/menlogo.png'
import nav from '../css/nav.css'
import { TfiClose } from "react-icons/tfi";
import { CiMenuFries } from "react-icons/ci";
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import Teampage from './Teampage';

const Navbar = () => {

     const [open,setopen]= useState(false);

     const handleClick = () => setopen(!open);
     const closeMenu = () => setopen(false)

  return (
    <div>
        <nav>
          <img src={menlogo}  className='logo'/>
          <ul className={ open ? 'nav-links ' : 'nav-links active'}>
        <li onClick={closeMenu}><Link 
           to="hero"
           spy={true}
           smooth={true}
           hashSpy={true}
           offset={50}
           duration={1200}>
            Home
           </Link> </li> 
        <li onClick={closeMenu}><Link 
           to="about"
           spy={true}
           smooth={true}
           hashSpy={true}
           offset={50}
           duration={1200}>
            About
           </Link> </li> 
        <li onClick={closeMenu}><Link 
           to="workshop"
           spy={true}
           smooth={true}
           hashSpy={true}
           offset={50}
           duration={1200}>
            Work Shop
           </Link> </li>
           <li onClick={closeMenu}><Link 
           to="team"
           spy={true}
           smooth={true}
           hashSpy={true}
           offset={50}
           duration={1200}>
            Team
           </Link> </li>  
        <li onClick={closeMenu}><Link 
           to="gallery"
           spy={true}
           smooth={true}
           hashSpy={true}
           offset={50}
           duration={1200}>
            Gallery
           </Link> </li> 
        <li onClick={closeMenu}><Link 
           to="join"
           spy={true}
           smooth={true}
           hashSpy={true}
           offset={50}
           duration={1200}>
           Join Us
           
           </Link> </li> 
        <li onClick={closeMenu}><Link 
           to="contact"
           spy={true}
           smooth={true}
           hashSpy={true}
           offset={-500}
           duration={1200}>
           Contact </Link> </li> 
        <li onClick={closeMenu}><Link 
           to="hero"
           spy={true}
           smooth={true}
           hashSpy={true}
           offset={50}
           duration={1200}>
            Youtube 
           </Link> </li> 
        <li onClick={closeMenu}><Link 
           to="hero"
           spy={true}
           smooth={true}
           hashSpy={true}
           offset={50}
           duration={1200}>
            Career
           </Link> </li> 
       
            
          </ul>
          <Teampage />
          <div onClick={handleClick} className="icons">
            {
              open ?   <TfiClose /> : <CiMenuFries /> 
            }
       
          

          </div>
        </nav>
    </div>
  )
}

export default Navbar