import React from 'react'
import './section5.css'
import one from "./images/1.jpg"
import two from "./images/2.jpg"
import three from "./images/3.jpg"
import four from "./images/4.jpg"
import five from "./images/5.jpg"
import six from "./images/6.jpg"
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Section5 = () => {
  

  return (
    <div className='section5' id='section5'>
      <h3> Feature Projects</h3>
  
   
      <OwlCarousel className="owl-theme" loop margin={10} nav>
        <div className='item'> 
          <img src={one} alt='...'  />
          <p className='img_des'> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className='item'> 
          <img src={two} alt='...' />
          <p className='img_des'> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className='item'> 
          <img src={three} alt='...' /> 
          <p className='img_des'> sdf Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className='item'> 
          <img src={four} alt='...' /> 
          <p className='img_des'> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className='item'> 
          <img src={five} alt='...' /> 
          <p className='img_des'> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className='item'> 
          <img src={six} alt='...' />
          <p className='img_des'> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        </OwlCarousel>
      
    </div>  
  )
}

export default Section5