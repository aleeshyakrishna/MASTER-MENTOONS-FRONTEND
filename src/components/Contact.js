import React from 'react'
import '../css/contact.css'
import { IoMailOutline } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className='contact-main'>
       
       <div className="information">
        <h1 >INFORMATION</h1>
        <p>
        <a href='mailto:mentermahesh@gmail.com'><IoMailOutline />mentarmahesh@gmail.com</a> 
        </p>
        <p>
        <FaPhoneAlt />      Call us 7892858593
        </p>
        <p>
        We are located at Domlur, Bangalore.
        </p>
        <div className="map">
        <iframe id='contact' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.2836653176196!2d77.63712627484104!3d12.953691687360022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae155a60ecb7a1%3A0xac5bd734b84eb2b8!2sMentoons!5e0!3m2!1sen!2sin!4v1702880574719!5m2!1sen!2sin"  
         loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
       </div>
       <div className="write-us">
        <h1>WRITE US</h1>
        <div class="flex flex-col justify-center py-12 sm:px-6 lg:px-8">

<div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
  <div class=" py-8 px-4 shadow sm:rounded-lg sm:px-10">
    <form method="POST" action="#">
      <div>
        <label class="block text-sm font-medium text-gray-700" for="username">
          Name
        </label>
        <div class="mt-1">
          <input class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required="" autocomplete="username" type="text" name="username" id="username"/>
        </div>
      </div>

      <div class="mt-6">
        <label class="block text-sm font-medium text-gray-700" for="email">
          Email address
        </label>
        <div class="mt-1">
          <input class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required="" autocomplete="email" type="email" name="email" id="email"/>
        </div>
      </div>

      <div class="mt-6">
        <label class="block text-sm font-medium text-gray-700" for="email">
          Subject
        </label>
        <div class="mt-1">
          <input class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required="" autocomplete="email" type="email" name="email" id="email"/>
        </div>
      </div>
      <div class="mt-6">
        <label class="block text-sm font-medium text-gray-700" for="email">
          Text Your Message
        </label>
        <div class="mt-1">
          <textarea class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required="" autocomplete="email" type="email" name="email" id="email"/>
        </div>
      </div>
   

    
      <div class="flex items-center justify-center mt-6">
<span class="mr-3 text-gray-700 font-medium">Gender:</span>
<label class="inline-flex items-center">
  <input type="radio" class="form-radio h-5 w-5 text-pink-600" name="gender" value="Male"/>
  <span class="ml-2 text-gray-700">Male</span>
</label>
<label class="inline-flex items-center ml-6">
  <input type="radio" class="form-radio h-5 w-5 text-purple-600" name="gender" value="Female" />
  <span class="ml-2 text-gray-700">Female</span>
</label>
</div>


      <div class="mt-6">
        <button class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" type="submit">
          Send Message
        </button>
      </div>
    </form>
  </div>
</div>
</div>

       </div>
        
        </div>
  )
}

export default Contact