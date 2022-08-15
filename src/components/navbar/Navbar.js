import React from 'react'
import './navbar.css'
import { FaYoutube }   from 'react-icons/fa';
import { FaFacebook }   from 'react-icons/fa';
import { FaInstagram }   from 'react-icons/fa';
import { FaLinkedin }   from 'react-icons/fa';

const Navbar = () => {
  return (
    <div className='part-1'>
            <div className='vertical'>
                <div className='vl'>  Call Us: +91-9111554999 </div> 
                <div className='vl'>  info@gardening.com </div>
                <div style={{padding: 7 }}> Mon-Sat: 9:00-18:00 </div>
            </div>
            <div>
                <FaFacebook className='v1' />&nbsp;
                <FaInstagram className='v1'/>&nbsp;
                <FaLinkedin className='v1'/>&nbsp;
                <FaYoutube className='v1'/>&nbsp;
            </div>
        
    </div>
        
    
  )
}

export default Navbar