import React from 'react'
import '../css/Logbtn.css'
import {Link} from 'react-router-dom'
const Logbtn = () => {
  return (
    <div>
        <ul className='nav-links'>
            <Link to="/Signup"><li>Signup</li></Link>
            <Link to="/Signin"><li>Login</li></Link>
            
        </ul>
    </div>
  )
}

export default Logbtn