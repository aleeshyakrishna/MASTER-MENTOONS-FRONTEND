import React,{useState,useEffect}   from 'react';
import Home from './Pages/Home.js'
import './App.css';
import Signin from './Pages/Signin.js';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Lottie from 'lottie-react';
import loding from '../src/animation/loding.json'
import Jobapply from './components/Jobapply.js'
import Payment from './Pages/Payment.js'; 
import Signup from './Pages/Signup.js'
import Error from './components/Error.js';
import Logbtn from './components/Logbtn.js';
function App() {
const [ loading , setloading] = useState (false)

useEffect(()=>{
  setloading(true)
  setTimeout(() => {
    setloading(false)
  }, 5000);
},[])

  return (
      <div >
        {
          loading ? <Lottie animationData={loding} className='loding'/>:
          <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='*' element={<Error />} />
            <Route path='/Signin' element={<Signin />} />
            <Route path='/Jobapply' element={<Jobapply />} />
            <Route path='/Payment' element={<Payment />} />
            <Route path='/Logbtn' element={<Logbtn />} />
            <Route path='/Signup' element={<Signup />} />
            <Route path='/Signin' element={<Signin />} />
            <Route path='/Logbtn' element={<Logbtn />} />
          </Routes>
          </BrowserRouter>
        }
          
     
      </div>
  );
}

export default App;
