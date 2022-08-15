import './footer.css';
import React from 'react'
import { GiLotus }   from 'react-icons/gi';
import { FaYoutube }   from 'react-icons/fa';
import { FaFacebook }   from 'react-icons/fa';
import { FaInstagram }   from 'react-icons/fa';
import { FaLinkedin }   from 'react-icons/fa';


const Footer = () => {
  return (
    <>
    <div className='footer' id='footer'>
        <div className='foot1'>
            <div className='foo1'>
                <GiLotus size={70} className='lotus' />
                <div className='subpart1'>
                    <h1 style={{color:"#355E3B"}}>Gardening</h1>
                    <h2 style={{color:"#355E3B"}}>MASTERING ON LANDSCAPING</h2>
                </div>    
                    
            </div>
            <p style={{color:"#808000"}}>Get the breathing space now and we'll extend your term at the other end.</p>
            <div className='icon'>
            <FaFacebook />&nbsp; <FaInstagram/>&nbsp; <FaLinkedin />&nbsp; <FaYoutube />
            </div>    
        </div>
        <div className='foot'>
        <div className='foo2'>
            <ul className='list2'>
                <li><h4 style={{color:"#355E3B"}}>Services</h4></li>
                <li>Lawn removal</li>
                <li>Landscaping</li>
                <li>Planting</li>
                <li>Watering</li>
            </ul>
        </div>
        <div className='foo3'>
            <ul className='list2'>
                <li><h4 style={{color:"#355E3B"}}>Navigation</h4></li>
                <li><a href='#top'>Home</a></li>
                <li><a href='#section2'>Services</a></li>
                <li><a href='#section3'>About</a></li>
                <li><a href='#section5'>Projects</a></li>
                <li><a href='#footer'>Contact</a></li>
            </ul>
        </div>
        <div className='foo4'>
            <ul className='list2'>
                <li><h4 style={{color:"#355E3B"}}>Contact Us</h4></li>
                <li style={{color:"#228B22"}}>consultus98@gmail.com</li>
                <li>76/A Green road, NYC</li>
                <li><h3 style={{color:"#228B22"}}>(80)783 367-3904</h3></li>
            </ul>
        </div>
           
        </div>
        
    </div>
    
    </>
  )
}

export default Footer