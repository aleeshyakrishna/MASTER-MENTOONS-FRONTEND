import React,{useEffect, useState} from 'react'
import '../pagecss/Signup.css'
import menlogo from '../Images/menlogo.png'
import group from '../Images/group.png'
import join from '../Images/join.png'
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa6";
import {Link} from 'react-router-dom'
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

const schema = yup.object().shape({
  userName:yup.string().required('Please Enter Your Name').min(6),
  email: yup.string().lowercase().trim().email('please enter your email properly').required(),
  number:yup.number().required('Please Enter Your Number').max(4),
  age:yup.number().integer().positive().required('Please Enter Your Age').min(2),
  password:yup.string().required().min(5,'Minium 5 chars required ').max(15,'Enter upto 15 chars only'),
  confrimPassword:yup.string().required('Please Enter Your Confrim Password').oneOf([yup.ref("password"),null]),

});
const Signup = () => {
 
    const {register, handleSubmit, formState: {errors, isValid}} =useForm({
      resolver:yupResolver(schema)
    });

   console.log(errors);
   
    
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState('');
  
    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };
    const [showconfrimPassword, setShowconfrimPassword] = useState(false);
    const [confrimPassword, setconfrimPassword] = useState('');
  
    const confrimtogglePasswordVisibility = () => {
      setShowconfrimPassword(!showconfrimPassword);
    };
  return (
    <div>

<div>
        <div className="signup-main-container">
        
          <form onSubmit={handleSubmit((data)=>{console.log(data);})}>
          <div className="left-side-box-signup">
          <img src={menlogo}  className='sign-up-logo' alt="" />
          <span className='signin-p'>Join Mentoons to get Started</span>
            <div className="signup-input-new">
          <input  {...register('userName')}   type='text' placeholder='User name' /><br></br>
          <p>{errors?.userName?.message}</p>
          <input  {...register('email')}   type='text' placeholder='Email Address' /><br></br>
          <p>{errors?.email?.message}</p>
          <input  {...register('number')}  type='text' placeholder='Phone Number' /><br></br>
          <p>{errors?.number?.message}</p>
          <input  {...register('age')}  type='text' placeholder='Enter Your age' /><br></br>
          <p>{errors?.age?.message}</p>

          <input {...register('password')}  className='pass'
        type={showPassword ? 'text' : 'password'}
        id="password"
        placeholder='Password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <p>{errors?.password?.message}</p>
      <button onClick={togglePasswordVisibility}>
        {showPassword ? <FaRegEyeSlash  className='pass-icons'/> : <FaRegEye className='pass-icons' />}
      </button><br></br>


           <input 
           {...register('confrimPassword')} 
           className='pass'
        type={showconfrimPassword ? 'text' : 'password'}
        id="confirmpassword"
        placeholder='Confrim Password'
        value={confrimPassword}
        onChange={ (e) => setconfrimPassword(e.target.value)}
      />
      <p>{errors?.confrimPassword?.message}</p>
      <button onClick={confrimtogglePasswordVisibility}>
        {showconfrimPassword ? <FaRegEyeSlash  className='pass-icons'/> : <FaRegEye className='pass-icons' />}
      </button><br></br>
          
            </div>
          <button role='submit' className='signup-btn' disabled={!isValid}  >
          Create Mentoons Account 
          </button>
          <h4 className='forget'>Forgot Password?</h4>
            <h2>Have an account? <Link to='/Signin' >Sign in</Link></h2>


            <div className="facebook-login-new">
          
                <div className='gog-box-new'>
                <h3>Sign in with google</h3>
                <FcGoogle className='gog-icon' />
                </div>
              
              <div className='fb-box-new'>  
              <FaFacebook className='fb-icon'/>  
              <h3> Sign in with Facebook</h3>
              </div>
  
            </div>
              </div>

          </form>







            <div className="right-side-box">
              <img src={join} className='logo-signup-new' alt="" />
              <img src={group}  className='group-image-signup' alt="" />
            </div>
          </div>
         
        </div>

    </div>
  )
}

export default Signup