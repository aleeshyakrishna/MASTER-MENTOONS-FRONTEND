import React from 'react'
import '../css/job.css'
const Jobapply = () => {
  return (
    <div class="container">
        <h1>Apply Here</h1>
        <div className="form">
        <div class="mt-4 flex flex-col bg-gray-100 rounded-lg p-4 shadow-sm">
  <h2 class="text-black font-bold text-lg">Shipping Label Address Form</h2>

  <div class="mt-4">
    <label class="text-black" for="name">Name</label>
    <input placeholder="Your name" class="w-full bg-white rounded-md border-gray-300 text-black px-2 py-1" type="text" required/>
  </div>
  
  
  <div class="mt-4">
    <label class="text-black" for="name">Number</label>
    <input placeholder="Your number" class="w-full bg-white rounded-md border-gray-300 text-black px-2 py-1" type="text" required/>
  </div>

  <div class="mt-4">
    <label class="text-black" for="name">Email</label>
    <input placeholder="Your number" class="w-full bg-white rounded-md border-gray-300 text-black px-2 py-1" type="text" required/>
  </div>

  <div class="flex-1">
      <label class="text-black" for="country">Job Roll</label>
      <select class="w-full bg-white rounded-md border-gray-300 text-black px-2 py-1" id="country">
        <option required value="">Select a country</option>

        
          <option value="AF">Anchor</option>
          <option value="DZ">Flim Maker</option>
          <option value="AO">Backend Developer</option>
          ...
          <option value="ZW">Story Teller</option>
      

       
          <option value="AM">Actor/Model</option>
          <option value="AZ">Flutter Developer</option>
          <option value="BH">IOS Developer</option>
          ...
          <option value="YE">Illustrater Designer</option>
        

        
          <option value="AR">Psycology Teacher</option>
          <option value="BO">Degital Marketing</option>
          <option value="BR">Sanskrit teacher</option>
          ...
         
       

        ...
      </select>
    </div>

  <div class="mt-4 flex flex-row space-x-2">
    <div class="flex-1">
      <label class="text-black" for="city">Country</label>
      <input required placeholder="Your city" class="w-full bg-white rounded-md border-gray-300 text-black px-2 py-1" id="city" type="text" />
    </div>

    <div class="flex-1">
      <label class="text-black" for="state">State</label>
      <input required placeholder="Your state" class="w-full bg-white rounded-md border-gray-300 text-black px-2 py-1" id="state" type="text" />
    </div>
  </div>

  <div class="mt-4 flex flex-row space-x-2">
    <div class="flex-1">
      <label class="text-black" for="zip">Add Resume</label>
      <input required placeholder="Your ZIP code" class="w-full bg-white rounded-md border-gray-300 text-black px-2 py-1" id="zip" type="file"/>
    </div>

   
  </div>

  <div class="mt-4 flex justify-end">
    <button class="bg-white text-black rounded-md px-4 py-1 hover:bg-gray-200 hover:text-gray-900" type="submit">Submit</button>
  </div>
</div>

        </div>
      
</div>
  )
}

export default Jobapply