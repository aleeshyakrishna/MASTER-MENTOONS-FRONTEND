import React from 'react'
import '../css/footer.css'
import menlogo from '../Images/menlogo.png'
import { CiFacebook } from "react-icons/ci";
import { LuYoutube } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa";
import grndownwave from '../Images/grndownwave.png'
const Footer = () => {
  return (
    <div className='hole-container'>
    <div className="down-wave-image">
          <img src={grndownwave} width={'100%'} />
        </div>
        <div className="footer">
        <footer>
        <div className="subscribe">
            <p>Mentoons is more than a service. <br></br>We are a guiding light to evolving personalities.<br></br> Help us help you transform your life today!</p>
            <h1>SUBSCRIBE TO OUR NEWSLETTER</h1>
            <form class="form">
  
    <label for="nome">Name:</label>
    
      <input type="text" class="infos" id="nome" name="nome" />
    <div class="mario"></div>
      <label for="email">E-mail:</label>
      <input type="email" id="email" name="email" />

      <button type="submit">Subscribe</button>
      <button type="reset" id="limpar">Clear</button>


</form>
        </div>
            <div className="footer-logo">
            <img src={menlogo}  width={'150px'}/>
            <div className="round-icons">
            <ul class="wrapper">
    <li className="icon facebook">
        <span className="tooltip">Facebook</span>
        <span><i className="fab fa-facebook-f"><CiFacebook /></i></span>
    </li>
    <li className="icon twitter">
        <span className="tooltip">Instagram</span>
        <span><i className="fab fa-twitter"><FaInstagram /></i></span>
    </li>
    <li className="icon instagram">
        <span className="tooltip">YouTube</span>
        <span><i className="fab fa-instagram"><LuYoutube /></i></span>
    </li>
</ul>
            </div>
         
            </div>
            <div className="opening-hours">
            <h1>OPENING HOURS:</h1>
            <th>
                <tr>Monday to Friday</tr>
                <tr>10 a.m. to 7 p.m.</tr>
            </th>
            <th>
                <tr>Weekends / Holidays</tr>
                <tr>	available on
appointment

</tr>
            </th>
            </div>
        </footer>
        
       

    </div>
    <div className="copyright">
            <p>Brand Powered by <a href='Propelling Stories'>Propelling Stories</a></p>
        </div>
    </div>
  )
}

export default Footer