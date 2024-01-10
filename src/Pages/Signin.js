import React,{useState} from 'react'
import '../pagecss/signin.css'
import menlogo from '../Images/menlogo.png'
import group from '../Images/group.png'
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa6";
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'


      


const Signin = () => {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState('');
  
    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };
  return (
   <div>
        <div className="signup-main-container-new">
        <form>
        <div className="left-side-box">
          <h1>Welcome Back</h1>
          <p className='signin-p'>Sign in to continue</p>
         
            <div className="signup-input">
            <input type='text' placeholder='Email ID' /><br></br>
          <input className='pass'
        type={showPassword ? 'text' : 'password'}
        id="password"
        placeholder='Confrim Password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={togglePasswordVisibility}>
        {showPassword ? <FaRegEyeSlash  className='passc-icons'/> : <FaRegEye className='passc-icons' />}
      </button><br></br>
          <span>Forgot Password?</span>
            </div>
          
         <input type='submit' className='signup-btn' placeholder='Login' />
            <h2>Not a Member? <Link to='/Signup'><a href=''>Click here</a> </Link></h2>


            <div className="facebook-login">
          
                <div className='gog-box'>
                <FcGoogle className='gog-icon' />
              <h3>Sign in with google</h3>
             
                </div>
              
              <div className='fb-box'>  
              <FaFacebook className='fb-icon'/>  
              <h3> Sign in with Facebook</h3>
              </div>
  
            </div>
              </div>

            </form>
        







            <div className="right-side-box">
              <img src={menlogo} className='logo-signup' alt="" />
              <img src={group} className='group-image-signin' alt="" />
            </div>
          </div>
         
        </div>

  
  )
}

export default Signin