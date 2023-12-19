import React,{useState,useEffect}   from 'react';
import Home from './Pages/Home.js'
import './App.css';
import Signin from './Pages/Signin.js';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Lottie from 'lottie-react';
import loding from '../src/animation/loding.json'
import Jobapply from './components/Jobapply.js' 
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
            <Route path='/Signin' element={<Signin />} />
            <Route path='/Jobapply' element={<Jobapply />} />
          </Routes>
          </BrowserRouter>
        }
          
     
      </div>
  );
}

export default App;
