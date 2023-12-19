import React from 'react'
import '../pagecss/signin.css'
import { FcGoogle } from "react-icons/fc";
import { FaFacebookSquare } from "react-icons/fa";
const Signin = () => {
  return (
    <div>
        <div className='container'>
          <h1>Sign in</h1>
          <div className="box">
          <div class="h-96 flex items-center justify-center ">
  <div class="relative">
    <div class="absolute -top-2 -left-2 -right-2 -bottom-2 rounded-lg bg-gradient-to-r  via-pink-500 to-red-500 shadow-lg animate-pulse"></div>
    <div id="form-container" class="bg-white p-16 rounded-lg shadow-2xl w-110 relative z-10 transform transition duration-500 ease-in-out">
      <h2 id="form-title" class="text-center text-3xl font-bold mb-10 text-gray-800">Signin</h2>
      <div class="space-y-5 ">
        <input class="w-full h-12 border border-gray-800 px-3 rounded-lg" placeholder="Email" id="" name="" type="text" />
        <input class="w-full h-12 border border-gray-800 px-3 rounded-lg" placeholder="Password" id="" name="" type="password" />
        <button class="w-full h-12 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Sign in</button>
        <a class="text-blue-500 hover:text-blue-800 text-sm" href="#">Forgot Password?</a>
        <p><FcGoogle />Sign in with google</p>
        <p><FaFacebookSquare />Sign in with Facebook</p>
      </div>
    </div>
  </div>
</div>
          </div>
       

    </div>
    </div>
  )
}

export default Signin